'use server';

/**
 * @fileOverview A flow for personalizing study plans based on student performance.
 *
 * - personalizeStudyPlan - A function that personalizes the study plan.
 * - PersonalizeStudyPlanInput - The input type for the personalizeStudyPlan function.
 * - PersonalizeStudyPlanOutput - The return type for the personalizeStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeStudyPlanInputSchema = z.object({
  studentId: z.string().describe('The ID of the student.'),
  quizScores: z
    .array(z.number())
    .describe('An array of quiz scores for the student.'),
  flashcardPerformance: z
    .array(z.number())
    .describe('An array representing the flashcard performance of the student.'),
  learningMaterials: z
    .string()
    .describe('The learning materials (e.g., book chapters, notes).'),
});
export type PersonalizeStudyPlanInput = z.infer<typeof PersonalizeStudyPlanInputSchema>;

const PersonalizeStudyPlanOutputSchema = z.object({
  personalizedStudyPlan: z
    .string()
    .describe('The personalized study plan based on the student performance.'),
});
export type PersonalizeStudyPlanOutput = z.infer<typeof PersonalizeStudyPlanOutputSchema>;

export async function personalizeStudyPlan(input: PersonalizeStudyPlanInput): Promise<PersonalizeStudyPlanOutput> {
  return personalizeStudyPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeStudyPlanPrompt',
  input: {schema: PersonalizeStudyPlanInputSchema},
  output: {schema: PersonalizeStudyPlanOutputSchema},
  prompt: `You are an expert study plan generator.

You will analyze the student's performance on quizzes and flashcards to personalize their study plan.
Focus on their weak areas and optimize their learning efficiency.

Student ID: {{{studentId}}}
Quiz Scores: {{{quizScores}}}
Flashcard Performance: {{{flashcardPerformance}}}
Learning Materials: {{{learningMaterials}}}

Personalized Study Plan:`,
});

const personalizeStudyPlanFlow = ai.defineFlow(
  {
    name: 'personalizeStudyPlanFlow',
    inputSchema: PersonalizeStudyPlanInputSchema,
    outputSchema: PersonalizeStudyPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
