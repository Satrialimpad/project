import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product, StoreState } from './types'

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Fashion Sneakers",
    price: 99.99,
    image: "/images/products/sneakers.jpg",
    category: "shoes",
    rating: 4.5,
    reviews: 123,
    isNew: true
  },
  {
    id: 2,
    name: "Classic Watch",
    price: 199.99,
    image: "/images/products/watch.jpg",
    category: "accessories",
    rating: 4.8,
    reviews: 89,
    discount: 15
  }
]

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      products: initialProducts,
      cart: [],
      addToCart: (product) => 
        set((state) => ({ 
          cart: [...state.cart, product] 
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter(item => item.id !== productId)
        })),
      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'ecommerce-storage'
    }
  )
)