import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart, Share2 } from "lucide-react";

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    category: string;
    rating: number;
    stock: number;
    specifications: Record<string, string>;
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
                <button
                key={index}
                aria-label={`View image ${index + 1}`}
                className={`aspect-square relative overflow-hidden rounded-lg border-2 
                    ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setSelectedImage(index)}
                >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-500">{product.category}</p>
            <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
            <div className="flex items-center mt-2">
              {'★'.repeat(product.rating)}{'☆'.repeat(5-product.rating)}
              <span className="text-gray-500 ml-2">({product.rating} ratings)</span>
            </div>
          </div>

          <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>

          <p className="text-gray-700">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="border rounded-md flex items-center">
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                >
                  +
                </button>
              </div>
              <span className="text-gray-500">
                {product.stock} items available
              </span>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card className="p-4">
            <h3 className="font-semibold mb-2">Specifications</h3>
            <div className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 gap-4">
                  <span className="text-gray-500">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}