'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { Product, ProductCategory } from '@/lib/types';
import ProductCard from '@/components/ProductCard';
import { FlaskConical, HeartPulse, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ProductCatalogProps = {
  products: Product[];
  categories: Omit<ProductCategory, 'icon'>[];
};

const iconMap: Record<string, LucideIcon> = {
    FlaskConical,
    HeartPulse,
    Sun,
};


export default function ProductCatalog({ products, categories }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory['id']>('all');

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
            const Icon = category.iconName ? iconMap[category.iconName] : null;
            return (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category.id)}
            className="capitalize"
          >
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {category.name}
          </Button>
        )})}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
       {filteredProducts.length === 0 && (
        <div className="text-center col-span-full py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
        </div>
       )}
    </div>
  );
}
