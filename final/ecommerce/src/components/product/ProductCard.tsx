import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";


interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export default function ProductCard({ id, name, price, image, category, rating }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-4">
        <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
            priority={false}
          />
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">{category}</p>
          <Link href={`/product/${id}`}>
            <h3 className="font-semibold hover:underline">{name}</h3>
          </Link>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">${price.toFixed(2)}</p>
            <div className="flex items-center">
              {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
              <span className="text-sm text-gray-500 ml-1">({rating})</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button className="w-full" onClick={() => console.log(`Add ${id} to cart`)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}