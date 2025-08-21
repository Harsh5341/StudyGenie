
// src/ai/flows/generate-mind-map.ts
'use server';
/**
 * @fileOverview A flow to generate a mind map from study materials.
 *
 * - generateMindMap - A function that generates a mind map.
 * - GenerateMindMapInput - The input type for the generateMindMap function.
 * - GenerateMindMapOutput - The return type for the generateMindMap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMindMapInputSchema = z.object({
  material: z.string().describe('The combined study materials to generate a mind map from.'),
});
export type GenerateMindMapInput = z.infer<typeof GenerateMindMapInputSchema>;

const GenerateMindMapOutputSchema = z.object({
  mindMap: z.string().describe('A mind map of the key concepts in Markdown format.'),
});
export type GenerateMindMapOutput = z.infer<typeof GenerateMindMapOutputSchema>;

export async function generateMindMap(
  input: GenerateMindMapInput
): Promise<GenerateMindMapOutput> {
  return generateMindMapFlow(input);
}

const generateMindMapPrompt = ai.definePrompt({
  name: 'generateMindMapPrompt',
  input: {schema: GenerateMindMapInputSchema},
  output: {schema: GenerateMindMapOutputSchema},
  prompt: `You are an expert at creating concept mind maps.
Analyze the following study material and generate a concise mind map of the key topics and their relationships.
The mind map should be in Markdown format, using indentation for hierarchy.

Study Material:
---
{{material}}
---
`,
});

const generateMindMapFlow = ai.defineFlow(
  {
    name: 'generateMindMapFlow',
    inputSchema: GenerateMindMapInputSchema,
    outputSchema: GenerateMindMapOutputSchema,
  },
  async input => {
    const {output} = await generateMindMapPrompt(input);
    return output!;
  }
);
