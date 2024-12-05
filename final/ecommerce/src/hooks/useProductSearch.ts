import { useCallback, useEffect, useState } from 'react'
import { useProductStore } from '@/store/product-store'
import { productService } from '@/services/productService'

// Improved debounce with proper typing
function debounce<T extends (...args: any[]) => Promise<void>>(
  func: T,
  wait: number
) {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>): void => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

export function useProductSearch() {
  const { searchQuery, setSearchQuery, setIsLoading, setError } = useProductStore()
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery)

  const searchProducts = async (query: string) => {
    if (!query) return
    
    setIsLoading(true)
    try {
      const results = await productService.searchProducts(query)
      useProductStore.getState().setProducts(results)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Search failed')
    } finally {
      setIsLoading(false)
    }
  }

  // Create stable debounced function
  const debouncedSearch = useCallback(
    debounce(searchProducts, 300),
    [setIsLoading, setError]
  )

  // Effect for handling search updates
  useEffect(() => {
    setDebouncedQuery(searchQuery)
    if (searchQuery) {
      debouncedSearch(searchQuery)
    }
  }, [searchQuery, debouncedSearch])

  return {
    searchQuery,
    setSearchQuery,
    debouncedQuery
  }
}