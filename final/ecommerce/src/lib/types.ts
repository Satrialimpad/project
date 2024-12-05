export interface Product {
    id: number
    name: string
    price: number
    image: string
    category?: string
    rating?: number
    reviews?: number
    isNew?: boolean
    discount?: number
  }
  
  export interface StoreState {
    products: Product[]
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (productId: number) => void
    clearCart: () => void
  }