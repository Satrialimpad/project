import { useCallback } from 'react'
import { useProductStore } from '@/store/product-store'
import { productService } from '@/services/productService'
import { type Product, type ProductListFilters } from '../types/product'

export function useProducts() {
  const {
    products,
    isLoading,
    error,
    setProducts,
    setIsLoading,
    setError,
    filteredProducts
  } = useProductStore()

  const fetchProducts = useCallback(async (filters?: ProductListFilters) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const data = await productService.getProducts(filters)
      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products')
    } finally {
      setIsLoading(false)
    }
  }, [setProducts, setIsLoading, setError])

  const fetchCategories = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const categories = await productService.getCategories()
      useProductStore.getState().setCategories(categories)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories')
    } finally {
      setIsLoading(false)
    }
  }, [setIsLoading, setError])

  return {
    products,
    filteredProducts: filteredProducts(),
    isLoading,
    error,
    fetchProducts,
    fetchCategories
  }
}