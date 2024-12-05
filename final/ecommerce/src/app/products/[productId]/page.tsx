"use client"

import ProductDetails from '@/components/product/ProductDetails'
import ProductReviews from '@/components/product/ProductReviews'

export default function ProductPage({ params }: { params: { productId: string } }) {
  // Data dummy untuk contoh
  const product = {
    id: params.productId,
    name: 'Example Product',
    price: 99.99,
    description: 'This is a sample product',
    images: ['/product1.jpg', '/product2.jpg'],
    category: 'Electronics',
    rating: 4.5,
    stock: 10,
    specifications: {
      Brand: 'Example Brand',
      Model: 'X123',
      Color: 'Black'
    }
  }

  const reviews = [
    {
      id: '1',
      user: 'John Doe',
      rating: 5,
      comment: 'Great product!',
      date: '2024-01-01',
      helpful: 10,
      reported: false
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
      <div className="mt-12">
        <ProductReviews
          productId={params.productId}
          reviews={reviews}
          averageRating={4.5}
          totalReviews={1}
        />
      </div>
    </div>
  )
}