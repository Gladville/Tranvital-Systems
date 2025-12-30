'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '@/components/shared/Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-4 ">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <Link href="/product-finder" className="mt-auto ">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Lightbulb className="mr-2 h-5 w-5" />
                      Product Finder
                    </Button>
                  </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors hover:text-primary',
                pathname === link.href ? 'text-foreground' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
           <div className="md:hidden">
            <Logo />
          </div>
          <Link href="/product-finder" className="hidden md:block">
            <Button variant="outline" className="border-accent text-accent-foreground hover:bg-accent/10 hover:text-accent-foreground">
              <Lightbulb className="mr-2 h-4 w-4" />
              Product Finder
            </Button>
          </Link>
          <Link href="/contact">
            <Button>Get a Quote</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
