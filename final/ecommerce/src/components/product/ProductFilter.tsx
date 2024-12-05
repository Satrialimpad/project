import { useState, useEffect } from 'react';
import { useFilterStore } from '@/store/filterStore'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

interface Category {
  id: string;
  name: string;
}

interface ProductFilterProps {
  categories: Category[];
}

export default function ProductFilter({ categories }: ProductFilterProps) {
  const {
    minPrice,
    maxPrice,
    selectedCategories,
    sortBy,
    setMinPrice,
    setMaxPrice,
    toggleCategory,
    setSortBy,
    resetFilters
  } = useFilterStore();

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numValue = parseInt(value) || 0;
    if (type === 'min') {
      setMinPrice(numValue);
    } else {
      setMaxPrice(numValue);
    }
  };

  return (
    <Card className="w-full max-w-xs">
      <CardContent className="p-6">
        {/* Sort Options */}
        <div className="mb-6">
          <Label htmlFor="sort" className="text-sm font-medium mb-2 block">
            Sort By
          </Label>
          <Select
            value={sortBy}
            onValueChange={setSortBy}
          >
            <SelectTrigger id="sort">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Featured</SelectItem>
              <SelectItem value="price_low">Price: Low to High</SelectItem>
              <SelectItem value="price_high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest Arrivals</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator className="my-4" />

        <Accordion type="multiple" className="w-full">
          {/* Categories */}
          <AccordionItem value="categories">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => toggleCategory(category.id)}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label
                      htmlFor={category.id}
                      className="ml-2 text-sm text-gray-600"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Price Range */}
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="min-price">Min Price</Label>
                  <input
                    type="number"
                    id="min-price"
                    value={minPrice}
                    onChange={(e) => handlePriceChange('min', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="max-price">Max Price</Label>
                  <input
                    type="number"
                    id="max-price"
                    value={maxPrice}
                    onChange={(e) => handlePriceChange('max', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator className="my-4" />

        {/* Reset Button */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  );
}