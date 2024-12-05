import { Button } from "@/components/ui/button"
import { ShoppingCart, ArrowRight } from "lucide-react"
import { Badge } from '@/components/badge'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Floating badges */}
      <div className="absolute top-32 right-20 animate-bounce">
        <Badge className="bg-green-500">New Arrival</Badge>
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse">
        <Badge className="bg-blue-500">50% OFF</Badge>
      </div>

      <div className="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-lg">
              Best Deals 2024
            </Badge>
            <h1 className="text-6xl font-bold tracking-tight">
              Discover Your
              <span className="text-primary block mt-2">
                Perfect Style
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 max-w-lg">
            Explore our curated collection of premium fashion items. 
            Get up to 50% off on new arrivals.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" className="group">
              Shop Now
              <ShoppingCart className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            {[
              { value: "20k+", label: "Products" },
              { value: "50k+", label: "Customers" },
              { value: "95%", label: "Satisfaction" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 relative">
          <div className="aspect-square relative z-10">
            {/* <img 
              src="/api/placeholder/600/600" 
              alt="Hero product"
              className="rounded-2xl shadow-2xl"
            /> */}
          </div>
          {/* Decorative background */}
          <div className="absolute inset-0 -translate-x-4 -translate-y-4 bg-primary/10 rounded-2xl" />
        </div>
      </div>
    </div>
  )
}