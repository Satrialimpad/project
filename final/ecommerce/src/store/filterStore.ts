import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface Category {
  id: string
  name: string
}

interface FilterState {
  minPrice: number
  maxPrice: number
  selectedCategories: string[]
  searchQuery: string
  sortBy: string
  categories: Category[]
  isFilterVisible: boolean
}

interface FilterActions {
  setMinPrice: (price: number) => void
  setMaxPrice: (price: number) => void
  toggleCategory: (category: string) => void
  setSearchQuery: (query: string) => void
  setSortBy: (sort: string) => void
  setCategories: (categories: Category[]) => void
  toggleFilterVisibility: () => void
  resetFilters: () => void
}

type FilterStore = FilterState & FilterActions

const initialState: FilterState = {
  minPrice: 0,
  maxPrice: 1000000,
  selectedCategories: [],
  searchQuery: '',
  sortBy: 'default',
  categories: [],
  isFilterVisible: false,
}

export const useFilterStore = create<FilterStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        setMinPrice: (price) => 
          set((state) => ({ minPrice: price }), false, 'setMinPrice'),

        setMaxPrice: (price) => 
          set((state) => ({ maxPrice: price }), false, 'setMaxPrice'),

        toggleCategory: (category) =>
          set(
            (state) => {
              const isSelected = state.selectedCategories.includes(category)
              return {
                selectedCategories: isSelected
                  ? state.selectedCategories.filter((id) => id !== category)
                  : [...state.selectedCategories, category],
              }
            },
            false,
            'toggleCategory'
          ),

        setSearchQuery: (query) =>
          set((state) => ({ searchQuery: query }), false, 'setSearchQuery'),

        setSortBy: (sort) => 
          set((state) => ({ sortBy: sort }), false, 'setSortBy'),

        setCategories: (categories) =>
          set((state) => ({ categories }), false, 'setCategories'),

        toggleFilterVisibility: () =>
          set(
            (state) => ({ isFilterVisible: !state.isFilterVisible }),
            false,
            'toggleFilterVisibility'
          ),

        resetFilters: () =>
          set(
            (state) => ({
              ...initialState,
              categories: state.categories,
              isFilterVisible: state.isFilterVisible,
            }),
            false,
            'resetFilters'
          ),
      }),
      {
        name: 'filter-store',
        skipHydration: true,
      }
    )
  )
)

// Selector hooks for better performance
export const useMinPrice = () => useFilterStore((state) => state.minPrice)
export const useMaxPrice = () => useFilterStore((state) => state.maxPrice)
export const useSelectedCategories = () => useFilterStore((state) => state.selectedCategories)
export const useSearchQuery = () => useFilterStore((state) => state.searchQuery)
export const useSortBy = () => useFilterStore((state) => state.sortBy)
export const useCategories = () => useFilterStore((state) => state.categories)
export const useIsFilterVisible = () => useFilterStore((state) => state.isFilterVisible)