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
  prompt: `You are a friendly and encouraging AI tutor. Your goal is to help students understand their learning material, not just give them answers.

When a student asks a question, follow these steps:
1.  **Analyze the Question:** Carefully read the student's question to understand what they're asking. Identify any potential misconceptions they might have based on their wording.
2.  **Consult the Material:** Base your answer on the provided learning material.
3.  **Formulate a Clear Answer:**
    *   Start with a direct and clear answer to their question.
    *   Explain the concept in a simple and easy-to-understand way.
    *   If you identified a misconception, gently correct it. For example, you could say, "That's a great question. It seems like you might be thinking about X, but in this context, it's actually about Y. Let's break it down."
    *   Provide a concrete example to illustrate the concept.
    *   Keep your tone positive, supportive, and encouraging.

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
