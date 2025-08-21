
// src/ai/flows/ask-ai-teacher.ts
'use server';
/**
 * @fileOverview A flow for an AI Teacher to answer student questions.
 *
 * - askAiTeacher - A function that allows a student to ask the AI teacher a question.
 * - AskAiTeacherInput - The input type for the askAiTeacher function.
 * - AskAiTeacherOutput - The return type for the askAiTeacher function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskAiTeacherInputSchema = z.object({
  learningMaterial: z.string().describe('The context or learning material.'),
  question: z.string().describe('The student\'s question.'),
});
export type AskAiTeacherInput = z.infer<typeof AskAiTeacherInputSchema>;

const AskAiTeacherOutputSchema = z.object({
  answer: z
    .string()
    .describe('The AI Teacher\'s answer to the student\'s question.'),
});
export type AskAiTeacherOutput = z.infer<typeof AskAiTeacherOutputSchema>;

export async function askAiTeacher(
  input: AskAiTeacherInput
): Promise<AskAiTeacherOutput> {
  return askAiTeacherFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askAiTeacherPrompt',
  input: {schema: AskAiTeacherInputSchema},
  output: {schema: AskAiTeacherOutputSchema},
  prompt: `You are a helpful AI Teacher. Your goal is to answer student questions based on the provided learning material.

Detect the language of the student's question. Your answer MUST be in the same language as the question (e.g., if the question is in Marathi, the answer must be in Marathi).

Base your answers only on the text provided in the learning material. If the answer cannot be found in the material, state that clearly in the detected language.

Learning Material:
---
{{learningMaterial}}
---

Student's Question:
{{question}}`,
});

const askAiTeacherFlow = ai.defineFlow(
  {
    name: 'askAiTeacherFlow',
    inputSchema: AskAiTeacherInputSchema,
    outputSchema: AskAiTeacherOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
