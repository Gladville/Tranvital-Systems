'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { findProductAction } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Lightbulb, Bot, AlertCircle } from 'lucide-react';

const initialState: { recommendation: string | null; error: string | null } = {
  recommendation: null,
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
        'Find My Equipment'
      )}
    </Button>
  );
}

export function ProductFinderForm() {
  const [state, formAction] = useFormState(findProductAction, initialState);

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
      <form action={formAction}>
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
      
      {(state.recommendation || state.error) && (
        <CardContent>
            <div className="mt-6">
            {state.recommendation && (
                <Alert>
                    <Bot className="h-4 w-4" />
                    <AlertTitle className="font-headline">AI Recommendation</AlertTitle>
                    <AlertDescription>
                        <p className="whitespace-pre-wrap">{state.recommendation}</p>
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
