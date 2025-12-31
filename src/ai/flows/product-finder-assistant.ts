'use server';

/**
 * @fileOverview A product finder AI assistant that recommends products based on user requirements.
 *
 * - productFinderAssistant - A function that handles the product finding process.
 * - ProductFinderAssistantInput - The input type for the productFinderAssistant function.
 * - ProductFinderAssistantOutput - The return type for the productFinderAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductFinderAssistantInputSchema = z.object({
  requirements: z
    .string()
    .describe('The requirements for the equipment the user is looking for.'),
});
export type ProductFinderAssistantInput = z.infer<
  typeof ProductFinderAssistantInputSchema
>;

const ProductFinderAssistantOutputSchema = z.object({
  recommendation: z
    .string()
    .describe('The recommended product based on the user requirements.'),
});
export type ProductFinderAssistantOutput = z.infer<
  typeof ProductFinderAssistantOutputSchema
>;

export async function productFinderAssistant(
  input: ProductFinderAssistantInput
): Promise<ProductFinderAssistantOutput> {
  return productFinderAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productFinderAssistantPrompt',
  input: {schema: ProductFinderAssistantInputSchema},
  output: {schema: ProductFinderAssistantOutputSchema},
  prompt: `You are an AI assistant that helps users find the perfect equipment based on their requirements from a product catalog.

  Based on the following requirements, recommend the most suitable product from the catalog.
  Requirements: {{{requirements}}}`,
});

const productFinderAssistantFlow = ai.defineFlow(
  {
    name: 'productFinderAssistantFlow',
    inputSchema: ProductFinderAssistantInputSchema,
    outputSchema: ProductFinderAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
