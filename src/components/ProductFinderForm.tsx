'use client';
import { useActionState, useState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { findProductAction } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Lightbulb, Bot, AlertCircle, Search } from 'lucide-react';
import type { Product } from '@/lib/types';
import ProductCard from './ProductCard';

const initialState: { recommendedProducts: Product[]; error: string | null } = {
  recommendedProducts: [],
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Bot className="mr-2 h-4 w-4 animate-spin" />
          Searching...
        </>
      ) : (
        <>
        <Search className="mr-2 h-4 w-4" />
        Find My Equipment
        </>
      )}
    </Button>
  );
}

export function ProductFinderForm() {
  const [state, formAction] = useActionState(findProductAction, initialState);
  const [hasSearched, setHasSearched] = useState(false);

  const handleFormAction = (formData: FormData) => {
    setHasSearched(true);
    formAction(formData);
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
            <div className="bg-accent text-accent-foreground p-3 rounded-full">
                <Lightbulb className="h-6 w-6" />
            </div>
            <div>
                <CardTitle className="font-headline text-2xl">Describe Your Needs</CardTitle>
                <CardDescription>The more detail, the better the recommendation.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <form action={handleFormAction}>
        <CardContent>
            <div className="grid w-full gap-1.5">
                <Label htmlFor="requirements">Your Requirements</Label>
                <Textarea
                    id="requirements"
                    name="requirements"
                    placeholder="e.g., 'I need a centrifuge for a small clinical lab, capable of handling 15ml tubes at up to 4000 RPM.'"
                    className="min-h-[150px]"
                    required
                />
            </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
      
      {(hasSearched || state.error) && (
        <CardContent>
          <div className="mt-6">
            {state.recommendedProducts.length > 0 && (
                <div>
                    <h3 className="font-headline text-xl mb-4">AI Recommendations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {state.recommendedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}
            {hasSearched && state.recommendedProducts.length === 0 && !state.error && (
                 <Alert>
                    <Bot className="h-4 w-4" />
                    <AlertTitle className="font-headline">No Products Found</AlertTitle>
                    <AlertDescription>
                        <p>We couldn't find any products that match your requirements. Please try refining your search.</p>
                    </AlertDescription>
                </Alert>
            )}
            {state.error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.error}</AlertDescription>
                </Alert>
            )}
            </div>
        </CardContent>
      )}

    </Card>
  );
}
