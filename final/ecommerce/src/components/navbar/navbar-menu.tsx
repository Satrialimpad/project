import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function NavbarMenu() {
  return (
    <>
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <nav className="flex flex-col gap-4">
              <a href="#" className="block px-2 py-1 hover:text-blue-600">New Arrivals</a>
              <a href="#" className="block px-2 py-1 hover:text-blue-600">Women</a>
              <a href="#" className="block px-2 py-1 hover:text-blue-600">Men</a>
              <a href="#" className="block px-2 py-1 hover:text-blue-600">Accessories</a>
              <a href="#" className="block px-2 py-1 hover:text-blue-600">Sale</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
        <a href="#" className="text-sm hover:text-blue-600 transition-colors">New Arrivals</a>
        <a href="#" className="text-sm hover:text-blue-600 transition-colors">Women</a>
        <a href="#" className="text-sm hover:text-blue-600 transition-colors">Men</a>
        <a href="#" className="text-sm hover:text-blue-600 transition-colors">Accessories</a>
        <a href="#" className="text-sm hover:text-blue-600 transition-colors">Sale</a>
      </div>
    </>
  );
}