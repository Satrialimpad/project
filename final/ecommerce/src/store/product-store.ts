import { create } from 'zustand'
import { type Product, type Category, type FilterState, type PriceRange } from '@/types/product'

interface ProductStore {
  // Data states
  products: Product[]
  categories: Category[]
  isLoading: boolean
  error: string | null

  // Search & filter states
  searchQuery: string
  filters: FilterState

  // Default price range
  defaultPriceRange: PriceRange

  // Actions
  setProducts: (products: Product[]) => void
  setCategories: (categories: Category[]) => void
  setIsLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  setSearchQuery: (query: string) => void
  setFilters: (filters: FilterState) => void
  resetFilters: () => void

  // Computed states
  filteredProducts: () => Product[]
}

const DEFAULT_PRICE_RANGE: PriceRange = {
  min: 0,
  max: 1000000
}

const DEFAULT_FILTERS: FilterState = {
  category: '',
  priceRange: DEFAULT_PRICE_RANGE,
  rating: null,
  sortBy: 'price_asc'
}

export const useProductStore = create<ProductStore>((set, get) => ({
  // Initial states
  products: [],
  categories: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  filters: { ...DEFAULT_FILTERS },
  defaultPriceRange: { ...DEFAULT_PRICE_RANGE },

  // Actions
  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setFilters: (filters) => set({ filters: { ...get().filters, ...filters } }),
  resetFilters: () => set({ filters: { ...DEFAULT_FILTERS } }),

  // Computed products with filters and search applied
  filteredProducts: () => {
    const { products, searchQuery, filters } = get()
    let filtered = [...products]

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(product => 
        product.category === filters.category
      )
    }

    // Apply price range filter
    filtered = filtered.filter(product =>
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max
    )

    // Apply rating filter
    if (filters.rating) {
      filtered = filtered.filter(product => 
        product.rating >= filters.rating!
      )
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price_asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
    }

    return filtered
  }
}))
