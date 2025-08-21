
"use server";

import { generateSummary } from "@/ai/flows/generate-summary";
import { generateInteractiveQuizzes } from "@/ai/flows/generate-quizzes";
import { personalizeStudyPlan } from "@/ai/flows/personalize-study-plan";
import { generatePracticeProblems } from "@/ai/flows/generate-practice-problems";
import { askAiTeacher } from "@/ai/flows/ask-ai-teacher";
import { translateText } from "@/ai/flows/translate-text";

import type { QuizQuestion, StudyGuide, Flashcard, PracticeProblem, AiTeacherResponse } from "@/lib/types";

export async function generateStudyGuide(
  prevState: { studyGuide: StudyGuide | null; error?: string | null },
  formData: FormData
) {
  "use server";
  const material = formData.get("material") as string;
  if (!material || material.trim().length < 50) {
    return {
      studyGuide: null,
      error: "Please provide more substantial study material (at least 50 characters).",
    };
  }

  try {
    const [summaryResult, quizResult, planResult, problemsResult] = await Promise.all([
      generateSummary({ lectureNotes: material }),
      generateInteractiveQuizzes({
        learningMaterial: material,
        numberOfQuestions: 10,
      }),
      personalizeStudyPlan({
        studentId: "user-123",
        learningMaterials: material,
        quizScores: [], 
        flashcardPerformance: [],
      }),
      generatePracticeProblems({
        learningMaterial: material,
        numberOfProblems: 3,
      }),
    ]);

    const quizzes: QuizQuestion[] = quizResult.quizzes;

    const flashcards: Flashcard[] = quizzes.map(q => ({
      front: q.question,
      back: q.correctAnswer,
    }));
      
    return {
      studyGuide: {
        summary: summaryResult.summary,
        quizzes: quizzes,
        flashcards: flashcards,
        studyPlan: planResult.personalizedStudyPlan,
        practiceProblems: problemsResult.problems,
      },
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      studyGuide: null,
      error: "Failed to generate study guide. Please try again later.",
    };
  }
}

export async function askTeacher(
  prevState: { response: AiTeacherResponse | null; error?: string | null },
  formData: FormData
) {
  "use server";
  const material = formData.get("material") as string;
  const question = formData.get("question") as string;

  if (!material || !question) {
    return {
      response: null,
      error: "Missing material or question.",
    };
  }

  try {
    const result = await askAiTeacher({
      learningMaterial: material,
      question,
    });
    return {
      response: {
        question,
        answer: result.answer
      },
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      response: null,
      error: "The AI Teacher had trouble answering. Please try again.",
    };
  }
}

export async function translateContent(
  content: StudyGuide,
  language: string
): Promise<StudyGuide> {
  if (language === 'en') {
    return content;
  }

  try {
    const translate = async (text: string) => {
      if (!text) return "";
      const result = await translateText({ text, targetLanguage: language });
      return result.translation;
    };
    
    const translatedSummary = await translate(content.summary);
    const translatedStudyPlan = await translate(content.studyPlan);

    const translatedQuizzes = await Promise.all(
      content.quizzes.map(async (q) => {
        const translatedQuestion = await translate(q.question);
        const translatedOptions = await Promise.all(q.options.map(translate));
        const translatedCorrectAnswer = await translate(q.correctAnswer);
        const translatedTopic = await translate(q.topic);
        return {
          ...q,
          question: translatedQuestion,
          options: translatedOptions,
          correctAnswer: translatedCorrectAnswer,
          topic: translatedTopic,
        };
      })
    );

    const translatedFlashcards = await Promise.all(
      content.flashcards.map(async (f) => ({
        front: await translate(f.front),
        back: await translate(f.back),
      }))
    );

    const translatedPracticeProblems = await Promise.all(
      content.practiceProblems.map(async (p) => ({
        problem: await translate(p.problem),
        solution: await translate(p.solution),
      }))
    );

    return {
      summary: translatedSummary,
      studyPlan: translatedStudyPlan,
      quizzes: translatedQuizzes,
      flashcards: translatedFlashcards,
      practiceProblems: translatedPracticeProblems,
    };
  } catch (error) {
    console.error("Translation failed", error);
    // Return original content if translation fails
    return content;
  }
}
