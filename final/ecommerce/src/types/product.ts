// Types for product data
export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  rating: number
  stock: number
  specifications?: Record<string, string>
}

// Category related types
export interface Category {
  id: string
  name: string
}

// Price range type
export interface PriceRange {
  min: number
  max: number
}

// Types for filtering and sorting
export type SortOption = 'price_asc' | 'price_desc' | 'rating'

export interface FilterState {
  category: string | null
  priceRange: PriceRange
  rating: number | null
  sortBy: SortOption
}

export interface ProductListFilters {
  category: string | null
  minPrice: number
  maxPrice: number
  rating: number | null
}

// Component Props Types
export interface ProductFilterProps {
  categories: Category[]
  initialFilters: FilterState
  onFilterChange: (filters: FilterState) => void
}

export interface ProductListProps {
  products: Product[]
  filters: ProductListFilters
  isLoading?: boolean
}

export interface ProductSearchProps {
  onSearch: (query: string) => void
  placeholder?: string
}

// Types for reviews
export interface Review {
  id: string
  user: string
  rating: number
  comment: string
  date: string
  helpful: number
  reported: boolean
}

// Review related props
export interface ReviewListProps {
  reviews: Review[]
  productId: string
  onAddReview?: (review: Omit<Review, 'id' | 'helpful' | 'reported'>) => void
  onHelpfulClick?: (reviewId: string) => void
  onReportReview?: (reviewId: string) => void
}