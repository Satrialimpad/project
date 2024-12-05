import { categories } from "@/lib/constants/categories";
import CategoryCard from "./category-card";

export default function CategorySection() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Kategori</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}