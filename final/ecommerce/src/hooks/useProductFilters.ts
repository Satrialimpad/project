import { useCallback } from 'react'
import { useProductStore } from '@/store/product-store'
import type { FilterState, PriceRange } from '@/types/product'

export function useProductFilters() {
  const {
    filters,
    setFilters,
    resetFilters,
    defaultPriceRange
  } = useProductStore()

  const updateCategory = useCallback((category: string) => {
    setFilters({ ...filters, category })
  }, [filters, setFilters])

  const updatePriceRange = useCallback((priceRange: PriceRange) => {
    setFilters({ ...filters, priceRange })
  }, [filters, setFilters])

  const updateRating = useCallback((rating: number | null) => {
    setFilters({ ...filters, rating })
  }, [filters, setFilters])

  const updateSortBy = useCallback((sortBy: FilterState['sortBy']) => {
    setFilters({ ...filters, sortBy })
  }, [filters, setFilters])

  return {
    filters,
    defaultPriceRange,
    updateCategory,
    updatePriceRange,
    updateRating,
    updateSortBy,
    resetFilters
  }
}