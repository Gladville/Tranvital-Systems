import PageHeader from '@/components/shared/PageHeader';
import { ProductFinderForm } from '@/components/ProductFinderForm';
import { Lightbulb } from 'lucide-react';

export default function ProductFinderPage() {
  return (
    <div>
      <PageHeader
        title="AI Product Finder"
        description={
          <>
            Describe your requirements, and our AI assistant will analyze your
            needs and recommend the most suitable product from our catalog.
          </>
        }
      />
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-2xl mx-auto">
            <ProductFinderForm />
        </div>
      </div>
    </div>
  );
}
