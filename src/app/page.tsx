import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  FlaskConical,
  HeartPulse,
  LifeBuoy,
  Lightbulb,
  Sun,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { products, services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProductCard from '@/components/ProductCard';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero_image');

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh] mt-[-20]">
      <section className="relative w-full mt-[-20] " style={{ backgroundColor: '#d3f4f5' }}>
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-12 md:py-24 lg:py-32">
            <div className="relative z-10 lg:-mr-24">
              <div className="bg-primary p-8 md:p-12 rounded-lg shadow-2xl text-primary-foreground">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6">
                  Empowering Progress with Advanced Solutions
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl mb-8">
                  Tranvital Systems is your trusted partner for cutting-edge
                  laboratory equipment, medical devices, and sustainable solar
                  power solutions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/products"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-transparent px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[550px] rounded-xl overflow-hidden shadow-2xl">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        id="featured-products"
        className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Products
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Precision, Reliability, Innovation
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a curated selection of high-performance equipment to
                meet the rigorous demands of modern science and healthcare.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:max-w-none md:grid-cols-3 lg:gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/products">
              <Button variant="outline">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Services
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Your Partner in Success
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Beyond products, we provide expert services to ensure your
              operations run smoothly and efficiently. Your success is our
              priority.
            </p>
            <Link href="/services">
              <Button>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6">
            {services.map((service) => (
              <Card key={service.id} className="bg-secondary/50 border-0 shadow-none">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-md">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ai-finder"
        className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                AI Assistant
              </div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Find Your Perfect Equipment
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Not sure what you need? Describe your requirements, and our
                AI-powered product finder will recommend the best solution from
                our catalog.
              </p>
              <Link href="/product-finder">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Try the AI Product Finder
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md p-8 bg-background rounded-xl shadow-lg">
                <p className="text-muted-foreground italic">
                  &quot;I need a microscope for a clinical research lab, capable of
                  fluorescence imaging and a minimum of 1000x magnification...&quot;
                </p>
                <div className="mt-4 text-right">
                  <p className="font-semibold text-primary font-headline">
                    AI Recommendation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ... instantly suggests the best fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
