import { config } from 'dotenv';
config();

import '@/ai/flows/answer-questions.ts';
import '@/ai/flows/generate-summary.ts';
import '@/ai/flows/generate-quizzes.ts';
import '@/ai/flows/personalize-study-plan.ts';
import '@/ai/flows/generate-practice-problems.ts';
