import { Card } from "@/components/ui/card"

const categories = [
  { id: 1, name: "Fashion", count: 120, image: "/api/placeholder/400/400" },
  { id: 2, name: "Electronics", count: 85, image: "/api/placeholder/400/400" },
  { id: 3, name: "Home", count: 95, image: "/api/placeholder/400/400" },
  { id: 4, name: "Beauty", count: 75, image: "/api/placeholder/400/400" }
]

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer overflow-hidden">
              <div className="relative h-48">
                {/* <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                /> */}
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p>{category.count} items</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}