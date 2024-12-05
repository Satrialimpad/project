// components/common/Navigation.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Electronics', href: '/category/electronics' },
  { name: 'Clothing', href: '/category/clothing' },
  { name: 'Books', href: '/category/books' },
  { name: 'Home & Garden', href: '/category/home-garden' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-muted py-2">
      <div className="container mx-auto px-4">
        <ul className="hidden md:flex items-center gap-8">
          {categories.map((category) => (
            <li key={category.name}>
              <Link 
                href={category.href}
                className="text-sm font-medium hover:text-primary"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>

        {isOpen && (
          <div 
            className="absolute left-0 w-full bg-background shadow-lg"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-4 gap-8">
                {categories.map((category) => (
                  <div key={category.name}>
                    <h3 className="font-bold mb-4">{category.name}</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Subcategory 1</Link></li>
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Subcategory 2</Link></li>
                      <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Subcategory 3</Link></li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;