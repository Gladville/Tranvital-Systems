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
import type { Product } from '@/lib/types';

const ProductFinderAssistantInputSchema = z.object({
  requirements: z
    .string()
    .describe('The requirements for the equipment the user is looking for.'),
  products: z.array(z.any()).describe("A list of available products in the catalog."),
});
export type ProductFinderAssistantInput = z.infer<
  typeof ProductFinderAssistantInputSchema
>;

const ProductFinderAssistantOutputSchema = z.object({
  recommendedProductIds: z
    .array(z.string())
    .describe('A list of product IDs from the catalog that best match the user\'s requirements.'),
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
  prompt: `You are an AI assistant that helps users find the perfect equipment from a product catalog based on their requirements.

You are given a list of products in JSON format.
Analyze the user's requirements and the provided product list.
Return a list of product IDs for the items that best match the requirements.
If no products match, return an empty list.

Products:
{{{json products}}}

Requirements:
{{{requirements}}}`,
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
