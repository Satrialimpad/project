// components/FeaturedProducts.tsx
"use client"
import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  isNew?: boolean
  discount?: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 29.99,
    oldPrice: 39.99,
    image: "/images/products/tshirt.jpg",
    category: "Clothing",
    rating: 4.5,
    reviews: 123,
    isNew: true,
    discount: 25
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 89.99,
    image: "/images/products/backpack.jpg",
    category: "Accessories",
    rating: 4.8,
    reviews: 89
  },
  // Add more products as needed
]

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("all")
  const categories = ["all", "clothing", "accessories", "shoes"]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Featured Collection</Badge>
          <h2 className="text-3xl font-bold mb-4">Trending Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group">
              <CardContent className="p-4">
                <div className="relative overflow-hidden">
                  {/* <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform"
                  /> */}

                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white" aria-label="Add to favorites">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4">New</Badge>
                  )}
                  {product.discount && (
                    <Badge variant="destructive" className="absolute top-14 left-4">
                      -{product.discount}%
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="text-right">
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                    <span className="ml-2 font-bold text-lg">
                      ${product.price}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.reviews})
                  </span>
                </div>

                <Button className="w-full mt-2">
                  Add to Cart
                  <ShoppingCart className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}