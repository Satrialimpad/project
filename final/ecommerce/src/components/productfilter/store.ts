import { create } from 'zustand'

type FilterStore = {
  minPrice: number
  maxPrice: number
  selectedCategories: string[]
  searchQuery: string
  sortBy: string
  setMinPrice: (price: number) => void
  setMaxPrice: (price: number) => void
  toggleCategory: (category: string) => void
  setSearchQuery: (query: string) => void
  setSortBy: (sort: string) => void
  resetFilters: () => void
}

export const useFilterStore = create<FilterStore>((set) => ({
  minPrice: 0,
  maxPrice: 1000000,
  selectedCategories: [],
  searchQuery: '',
  sortBy: 'default',

  setMinPrice: (price) => set({ minPrice: price }),

  setMaxPrice: (price) => set({ maxPrice: price }),

  toggleCategory: (category) => set((state) => {
    const index = state.selectedCategories.indexOf(category)
    if (index === -1) {
      return { selectedCategories: [...state.selectedCategories, category] }
    } else {
      return { 
        selectedCategories: state.selectedCategories.filter(cat => cat !== category)
      }
    }
  }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  setSortBy: (sort) => set({ sortBy: sort }),

  resetFilters: () => set({
    minPrice: 0,
    maxPrice: 1000000,
    selectedCategories: [],
    searchQuery: '',
    sortBy: 'default'
  })
}))