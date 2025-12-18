import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { Button } from '../ui/button';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
            <Logo />
            <p className="max-w-xs text-muted-foreground">
              Advanced solutions for laboratory, medical, and solar power needs.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary">Products</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/product-finder" className="text-muted-foreground hover:text-primary">AI Finder</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Science Park, Accra, Ghana</li>
              <li>+233 12 345 6789</li>
              <li>info@tranvital.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tranvital Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
