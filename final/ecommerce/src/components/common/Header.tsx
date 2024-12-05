// components/common/Header.tsx
"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">Store</Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <Link href="/categories" className="hover:text-primary">Categories</Link>
            <Link href="/deals" className="hover:text-primary">Deals</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Search className="h-5 w-5 cursor-pointer" />
            <ShoppingCart className="h-5 w-5 cursor-pointer" />
            <Button variant="outline" className="hidden md:flex">Login</Button>
            <Button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-t">
          <nav className="flex flex-col gap-4">
            <Link href="/products" className="hover:text-primary">Products</Link>
            <Link href="/categories" className="hover:text-primary">Categories</Link>
            <Link href="/deals" className="hover:text-primary">Deals</Link>
            <Button className="w-full">Login</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;