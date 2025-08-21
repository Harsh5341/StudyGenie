// src/ai/flows/generate-quizzes.ts
'use server';

/**
 * @fileOverview A flow to generate interactive quizzes from uploaded learning materials.
 *
 * - generateInteractiveQuizzes - A function that generates interactive quizzes.
 * - GenerateInteractiveQuizzesInput - The input type for the generateInteractiveQuizzes function.
 * - GenerateInteractiveQuizzesOutput - The return type for the generateInteractiveQuizzes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInteractiveQuizzesInputSchema = z.object({
  learningMaterial: z.string().describe('The learning material to generate quizzes from.'),
  numberOfQuestions: z.number().describe('The number of questions to generate.'),
});
export type GenerateInteractiveQuizzesInput = z.infer<
  typeof GenerateInteractiveQuizzesInputSchema
>;

const GenerateInteractiveQuizzesOutputSchema = z.object({
  quizzes: z.array(z.string()).describe('The generated interactive quizzes.'),
});
export type GenerateInteractiveQuizzesOutput = z.infer<
  typeof GenerateInteractiveQuizzesOutputSchema
>;

export async function generateInteractiveQuizzes(
  input: GenerateInteractiveQuizzesInput
): Promise<GenerateInteractiveQuizzesOutput> {
  return generateInteractiveQuizzesFlow(input);
}

const generateInteractiveQuizzesPrompt = ai.definePrompt({
  name: 'generateInteractiveQuizzesPrompt',
  input: {schema: GenerateInteractiveQuizzesInputSchema},
  output: {schema: GenerateInteractiveQuizzesOutputSchema},
  prompt: `You are a quiz generator. Generate {{numberOfQuestions}} interactive quizzes from the following learning material:\n\n{{learningMaterial}}`,
});

const generateInteractiveQuizzesFlow = ai.defineFlow(
  {
    name: 'generateInteractiveQuizzesFlow',
    inputSchema: GenerateInteractiveQuizzesInputSchema,
    outputSchema: GenerateInteractiveQuizzesOutputSchema,
  },
  async input => {
    const {output} = await generateInteractiveQuizzesPrompt(input);
    return output!;
  }
);
