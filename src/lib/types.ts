
export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: string;
  isCorrect?: boolean;
}

export interface Flashcard {
  front: string;
  back:string;
}

export interface PracticeProblem {
    problem: string;
    solution: string;
}

export interface StudyGuide {
  summary: string;
  quizzes: QuizQuestion[];
  flashcards: Flashcard[];
  studyPlan: string;
  practiceProblems: PracticeProblem[];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}
