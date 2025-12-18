import ProductCatalog from '@/components/ProductCatalog';
import PageHeader from '@/components/shared/PageHeader';
import { products, productCategories } from '@/lib/data';

export default function ProductsPage() {
  return (
    <div>
      <PageHeader
        title="Our Product Catalog"
        description="Explore our comprehensive range of laboratory, medical, and solar power equipment, designed for performance and reliability."
      />
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <ProductCatalog products={products} categories={productCategories} />
      </div>
    </div>
  );
}
