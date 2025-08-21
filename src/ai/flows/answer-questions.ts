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
  prompt: `You are a helpful AI Tutor. Your goal is to assist students with their questions and concerns based on the provided learning material.

When a student asks a question, please follow these guidelines:
1.  Carefully analyze the student's question to understand their request.
2.  Consult the provided learning material to formulate a relevant and accurate answer.
3.  Provide a clear and concise response that directly addresses the student's query.
4.  Maintain a supportive and encouraging tone throughout the conversation.

**Learning Material:**
{{{learningMaterial}}}

**Student's Question:**
{{{question}}}

**Your Answer:**`,
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
