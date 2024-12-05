"use client"

import ProductList from '@/components/product/ProductList'
import ProductFilter from '@/components/product/ProductFilter'
import ProductSearch from '@/components/product/ProductSearch'
import BannerCarousel from '@/components/carousel/BannerCarousel'
import { FilterState, ProductListFilters } from '@/types/product'
import { products, categories } from '@/lib/data/product'
import Newsletter from '@/components/newsletter'


// Initial filter state
const initialFilters: FilterState = {
  category: null,
  priceRange: { min: 0, max: 20000000 }, // Set range sesuai harga produk
  rating: null,
  sortBy: 'rating'
}

export default function ProductsPage() {
  const handleSearch = (query: string) => {
    console.log('Mencari:', query);
  };

  const handleFilterChange = (filters: FilterState) => {
    console.log('Filter berubah:', filters);
  };

  const getProductListFilters = (filters: FilterState): ProductListFilters => ({
    category: filters.category,
    minPrice: filters.priceRange.min,
    maxPrice: filters.priceRange.max,
    rating: filters.rating
  });

  return (
    <div className="min-h-screen">
      <BannerCarousel />

      <div className="container mx-auto px-4 py-8">
        <ProductSearch 
          onSearch={handleSearch}
          placeholder="Cari produk..."
        />
        <div className="flex gap-8 mt-8">
          <ProductFilter
            categories={categories}
            initialFilters={initialFilters}
            onFilterChange={handleFilterChange}
          />
          <ProductList
            products={products}
            filters={getProductListFilters(initialFilters)}
          />
        </div>
      </div>
    </div>
  );
}