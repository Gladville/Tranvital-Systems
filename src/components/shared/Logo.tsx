import Link from 'next/link';
import { Atom } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 text-lg md:text-xl font-bold font-headline',
        className
      )}
    >
      <div className="p-1.5 bg-primary text-primary-foreground rounded-md">
        <Atom className="h-5 w-5" />
      </div>
      <span className="text-primary text-sm md:text-lg">Tranvital</span>
      <span className="text-foreground text-sm md:text-lg ml">Systems</span>
    </Link>
  );
}
