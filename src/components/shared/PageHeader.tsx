import type { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description: string | ReactNode;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-secondary">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <div className="max-w-3xl space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed">
              {description}
            </p>
          </div>
        </div>
    </div>
  );
}
