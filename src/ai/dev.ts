
import { config } from 'dotenv';
config();

import '@/ai/flows/generate-summary.ts';
import '@/ai/flows/generate-quizzes.ts';
import '@/ai/flows/personalize-study-plan.ts';
import '@/ai/flows/generate-practice-problems.ts';
import '@/ai/flows/ask-ai-teacher.ts';
import '@/ai/flows/translate-text.ts';
import '@/ai/flows/generate-mind-map.ts';
