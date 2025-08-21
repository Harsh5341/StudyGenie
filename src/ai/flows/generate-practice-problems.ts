// src/ai/flows/generate-practice-problems.ts
'use server';
/**
 * @fileOverview A flow to generate practice problems from uploaded learning materials.
 *
 * - generatePracticeProblems - A function that generates practice problems.
 * - GeneratePracticeProblemsInput - The input type for the generatePracticeProblems function.
 * - GeneratePracticeProblemsOutput - The return type for the generatePracticeProblems function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePracticeProblemsInputSchema = z.object({
  learningMaterial: z.string().describe('The learning material to generate problems from.'),
  numberOfProblems: z.number().describe('The number of problems to generate.'),
});
export type GeneratePracticeProblemsInput = z.infer<
  typeof GeneratePracticeProblemsInputSchema
>;

const GeneratePracticeProblemsOutputSchema = z.object({
  problems: z.array(z.object({
    problem: z.string(),
    solution: z.string(),
  })).describe('The generated practice problems with solutions.'),
});
export type GeneratePracticeProblemsOutput = z.infer<
  typeof GeneratePracticeProblemsOutputSchema
>;

export async function generatePracticeProblems(
  input: GeneratePracticeProblemsInput
): Promise<GeneratePracticeProblemsOutput> {
  return generatePracticeProblemsFlow(input);
}

const generatePracticeProblemsPrompt = ai.definePrompt({
  name: 'generatePracticeProblemsPrompt',
  input: {schema: GeneratePracticeProblemsInputSchema},
  output: {schema: GeneratePracticeProblemsOutputSchema},
  prompt: `You are an expert problem generator. Generate {{numberOfProblems}} practice problems with solutions from the following learning material:\n\n{{learningMaterial}}`,
});

const generatePracticeProblemsFlow = ai.defineFlow(
  {
    name: 'generatePracticeProblemsFlow',
    inputSchema: GeneratePracticeProblemsInputSchema,
    outputSchema: GeneratePracticeProblemsOutputSchema,
  },
  async input => {
    const {output} = await generatePracticeProblemsPrompt(input);
    return output!;
  }
);
