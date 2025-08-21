// src/ai/flows/answer-questions.ts
'use server';
/**
 * @fileOverview A flow that allows users to ask questions about uploaded learning materials.
 *
 * - askAiTutorQuestions - A function that handles the question answering process.
 * - AskAiTutorQuestionsInput - The input type for the askAiTutorQuestions function.
 * - AskAiTutorQuestionsOutput - The return type for the askAiTutorQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskAiTutorQuestionsInputSchema = z.object({
  question: z.string().describe('The question to ask the AI tutor.'),
  learningMaterial: z.string().describe('The uploaded learning material.'),
});
export type AskAiTutorQuestionsInput = z.infer<typeof AskAiTutorQuestionsInputSchema>;

const AskAiTutorQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the question, based on the learning material.'),
});
export type AskAiTutorQuestionsOutput = z.infer<typeof AskAiTutorQuestionsOutputSchema>;

export async function askAiTutorQuestions(input: AskAiTutorQuestionsInput): Promise<AskAiTutorQuestionsOutput> {
  return askAiTutorQuestionsFlow(input);
}

const askAiTutorQuestionsPrompt = ai.definePrompt({
  name: 'askAiTutorQuestionsPrompt',
  input: {schema: AskAiTutorQuestionsInputSchema},
  output: {schema: AskAiTutorQuestionsOutputSchema},
  prompt: `You are an AI tutor, answering questions based on the provided learning material.\n\nLearning Material: {{{learningMaterial}}}\n\nQuestion: {{{question}}}\n\nAnswer:`,
});

const askAiTutorQuestionsFlow = ai.defineFlow(
  {
    name: 'askAiTutorQuestionsFlow',
    inputSchema: AskAiTutorQuestionsInputSchema,
    outputSchema: AskAiTutorQuestionsOutputSchema,
  },
  async input => {
    const {output} = await askAiTutorQuestionsPrompt(input);
    return output!;
  }
);
