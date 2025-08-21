export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer?: string;
  isCorrect?: boolean;
}

export interface Flashcard {
  front: string;
  back: string;
}

export interface StudyGuide {
  summary: string;
  quizzes: QuizQuestion[];
  flashcards: Flashcard[];
  studyPlan: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}
