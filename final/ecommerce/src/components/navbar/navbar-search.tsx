'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, X } from 'lucide-react';

interface NavbarSearchProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function NavbarSearch({ isOpen, onToggle }: NavbarSearchProps) {
  return (
    <>
      <div className={`${isOpen ? 'flex' : 'hidden lg:flex'} absolute lg:relative left-0 right-0 lg:left-auto lg:right-auto top-full lg:top-auto bg-white lg:bg-transparent p-4 lg:p-0`}>
        <input
          type="search"
          placeholder="Search..."
          className="w-full lg:w-[200px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Mobile Search Toggle */}
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={onToggle}>
        {isOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
      </Button>

      {/* Desktop Search */}
      <Button variant="ghost" size="icon" className="hidden lg:flex">
        <Search className="h-5 w-5" />
      </Button>
    </>
  );
}