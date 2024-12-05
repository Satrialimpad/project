// app/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight } from "lucide-react";
import { create } from "zustand";


interface HeroStore {
  ctaClicks: number;
  incrementClicks: () => void;
}

const useHeroStore = create<HeroStore>((set) => ({
  ctaClicks: 0,
  incrementClicks: () => set((state) => ({ ctaClicks: state.ctaClicks + 1 })),
}));

const HeroSection = () => {
  const { ctaClicks, incrementClicks } = useHeroStore();

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
            <Plus className="h-4 w-4" />
            New Features Available
          </span>
          
          <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Build something amazing with our platform
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Experience the next generation of web development. Fast, reliable, and scalable solutions for modern applications.
          </p>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={incrementClicks}>
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          
          {ctaClicks > 0 && (
            <p className="mt-4 text-sm text-muted-foreground">
              Clicked {ctaClicks} times
            </p>
          )}
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-background via-muted/50 to-background" />
    </section>
  );
};

export default HeroSection;