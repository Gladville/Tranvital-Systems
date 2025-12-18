'use server';

import { z } from 'zod';
import { productFinderAssistant } from '@/ai/flows/product-finder-assistant';

// Contact Form Action
const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const parsed = contactFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });

    // In a real application, you would send an email here.
    console.log('New contact form submission:', parsed);

    return { message: 'Thank you for your message! We will get back to you shortly.', error: false };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { message: 'There was an error submitting your message. Please try again.', error: true };
  }
}

// AI Product Finder Action
const productFinderSchema = z.object({
  requirements: z.string().min(10, "Please provide more details about your requirements."),
});

export async function findProductAction(prevState: any, formData: FormData) {
    const rawRequirements = formData.get('requirements');
    const validation = productFinderSchema.safeParse({ requirements: rawRequirements });

    if (!validation.success) {
        return { recommendation: null, error: validation.error.errors.map(e => e.message).join(', ') };
    }

    try {
        const result = await productFinderAssistant({ requirements: validation.data.requirements });
        return { recommendation: result.recommendation, error: null };
    } catch (error) {
        console.error("AI Product Finder Error:", error);
        return { recommendation: null, error: "Sorry, I couldn't process your request at the moment. Please try again later." };
    }
}
