'use client'
import React, { useState } from 'react';
import { NavbarMenu } from './navbar-menu';
import { NavbarSearch } from './navbar-search';
import { NavbarAuthActions as NavbarActions } from './navbar-actions'

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="border-b">
      {/* Top Announcement Bar */}
      <div className="bg-black text-white py-2 text-center text-sm">
        <p>Free shipping on orders over $50 | Shop Now</p>
      </div>

      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Mobile Menu */}
          <NavbarMenu />

          {/* Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <a href="/" className="text-xl font-bold">BRAND</a>
          </div>

          {/* Search */}
          <NavbarSearch 
            isOpen={isSearchOpen} 
            onToggle={() => setIsSearchOpen(!isSearchOpen)} 
          />

          {/* Actions (Cart, Account, etc) */}
          <NavbarActions />
        </nav>
      </div>
    </header>
  );
}