import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link 
      href={`/category/${category.slug}`}
      className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="w-12 h-12 relative mb-2">
        <Image
          src={category.imageUrl}
          alt={category.name}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-sm text-center text-gray-700">{category.name}</span>
    </Link>
  );
};

export default CategoryCard;