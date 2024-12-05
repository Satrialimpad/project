import { useState } from 'react';
import ProductCard from './ProductCard';
import { Button } from "@/components/ui/button";
import { Product, ProductListFilters } from '@/types/product';

interface ProductListProps {
  products: Product[];
  filters: ProductListFilters;
}

export default function ProductList({ products, filters }: ProductListProps) {
  const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc' | 'rating'>('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const filteredProducts = products.filter(product => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.minPrice && product.price < filters.minPrice) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    if (filters.rating != null && product.rating < filters.rating) return false;
    return true;
  });

  // Apply sorting dengan type safety yang lebih baik
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleSortChange = (value: string) => {
    if (value === 'price_asc' || value === 'price_desc' || value === 'rating') {
      setSortBy(value);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {currentProducts.length} of {sortedProducts.length} products
        </p>
        <select
          className="border rounded-md p-2"
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="rating">Sort by Rating</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}