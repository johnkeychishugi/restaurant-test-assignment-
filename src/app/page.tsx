"use client";

import { useState } from "react";
import { Restaurant } from "@/components/Restaurant";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { trpc } from "@/utils/trpc";
import { Providers } from "@/components/Providers";
import type {
  Restaurant as RestaurantType,
  StoreCategory,
} from "../generated/prisma";

function RestaurantList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<StoreCategory | null>(null);
  const { data: restaurants, isLoading } =
    trpc.restaurant.getRestaurants.useQuery();

  const filteredRestaurants = restaurants?.filter((restaurant: RestaurantType) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || restaurant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <SearchBar onSearch={setSearchTerm} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants?.map(
            (
              restaurant: RestaurantType & {
                featured: { text: string; icon: string } | null;
              }
            ) => (
              <Restaurant key={restaurant.id} restaurant={restaurant} />
            )
          )}
        </div>

        {filteredRestaurants?.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-700">
              No restaurants found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Providers>
      <RestaurantList />
    </Providers>
  );
}
