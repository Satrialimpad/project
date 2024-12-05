import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"


export default function Newsletter() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <Mail className="mx-auto h-12 w-12 mb-4" />
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8 max-w-md mx-auto">
          Get updates about new products and special offers
        </p>
        
        <form className="flex gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-white text-black"
          />
          <Button variant="secondary">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}