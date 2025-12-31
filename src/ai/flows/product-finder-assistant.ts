'use server';

/**
 * @fileOverview A product finder AI assistant that recommends products based on user requirements.
 *
 * - productFinderAssistant - A function that handles the product finding process.
 * - ProductFinderAssistantInput - The input type for the productFinderAssistant function.
 * - ProductFinderAssistantOutput - The return type for the productFinderAssistant function.
 */

import {ai} from '@/ai/genkit';
import type { Product } from '@/lib/types';
import {z} from 'genkit';

const ProductFinderAssistantInputSchema = z.object({
  requirements: z
    .string()
    .describe('The requirements for the equipment the user is looking for.'),
  products: z.array(z.any()).describe('The list of available products in the catalog.')
});
export type ProductFinderAssistantInput = z.infer<
  typeof ProductFinderAssistantInputSchema
>;

const ProductFinderAssistantOutputSchema = z.object({
  recommendedProductIds: z
    .array(z.string())
    .describe('An array of product IDs that best match the user\'s requirements. Can be empty.'),
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

You will be given a list of available products in JSON format and the user's requirements.
Your task is to analyze the requirements and determine which products from the list are the most suitable matches.

Return an array of product IDs for the recommended products. The array should contain the 'id' field of each matching product.

If no products in the catalog are a good fit for the user's requirements, return an empty array.

User Requirements:
"{{{requirements}}}"

Available Product Catalog:
{{{json products}}}
`,
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
