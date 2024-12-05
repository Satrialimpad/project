"use client"

import { useEffect } from 'react'
import { useProducts } from '@/hooks/useProducts'
import { useProductFilters } from '@/hooks/useProductFilters'
import { useProductSearch } from '@/hooks/useProductSearch'
import ProductList from '@/components/product/ProductList'
import ProductFilter from '@/components/product/ProductFilter'
import ProductSearch from '@/components/product/ProductSearch'
import BannerCarousel from '@/components/carousel/BannerCarousel'
import { type Product, type Category, type FilterState, type ProductListFilters } from '@/types/product'

export default function ProductsPage() {
  const { 
    products, 
    filteredProducts,
    isLoading, 
    error,
    fetchProducts,
    fetchCategories 
  } = useProducts()

  const {
    filters,
    defaultPriceRange,
    updateCategory,
    updatePriceRange,
    updateRating,
    updateSortBy
  } = useProductFilters()

  const { searchQuery, setSearchQuery } = useProductSearch()

  // Fetch initial data
  useEffect(() => {
    const initData = async () => {
      await Promise.all([fetchProducts(), fetchCategories()])
    }
    initData()
  }, [fetchProducts, fetchCategories])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilterChange = (newFilters: FilterState) => {
    updateCategory(newFilters.category)
    updatePriceRange(newFilters.priceRange)
    updateRating(newFilters.rating)
    updateSortBy(newFilters.sortBy)
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>
  }

  const currentFilters: ProductListFilters = {
    category: filters.category,
    minPrice: filters.priceRange.min,
    maxPrice: filters.priceRange.max,
    rating: filters.rating
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <BannerCarousel />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Our Products</h1>
          <ProductSearch onSearch={handleSearch} />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64">
            {isLoading ? (
              <div>Loading filters...</div>
            ) : (
              <ProductFilter
                categories={categories}
                initialPriceRange={defaultPriceRange}
                onFilterChange={handleFilterChange}
              />
            )}
          </aside>
          
          <main className="flex-1">
            {isLoading ? (
              <div>Loading products...</div>
            ) : (
              <ProductList
                products={filteredProducts}
                filters={currentFilters}
              />
            )}
          </main>
        </div>
      </div>
    </main>
  )
}