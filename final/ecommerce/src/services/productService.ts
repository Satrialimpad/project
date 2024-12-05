import { fetchAPI } from "./api";
import { Product, Category, ProductListFilters } from "@/types/product";

export const productService = {
  // Get all products with optional filters
  async getProducts(filters?: ProductListFilters): Promise<Product[]> {
    const queryParams = new URLSearchParams();

    if (filters) {
      if (filters.category) queryParams.set("category", filters.category);
      if (filters.minPrice)
        queryParams.set("minPrice", filters.minPrice.toString());
      if (filters.maxPrice)
        queryParams.set("maxPrice", filters.maxPrice.toString());
      if (filters.rating) queryParams.set("rating", filters.rating.toString());
    }

    const endpoint = `/products${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;
    return fetchAPI<Product[]>(endpoint);
  },

  // Get all categories
  async getCategories(): Promise<Category[]> {
    return fetchAPI<Category[]>("/categories");
  },

  // Get single product by ID
  async getProductById(id: string): Promise<Product> {
    return fetchAPI<Product>(`/products/${id}`);
  },

  // Search products
  async searchProducts(query: string): Promise<Product[]> {
    return fetchAPI<Product[]>(
      `/products/search?q=${encodeURIComponent(query)}`
    );
  },
};
