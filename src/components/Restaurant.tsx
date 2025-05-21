import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { trpc } from '@/utils/trpc';
import type { Restaurant as RestaurantType } from '../generated/prisma';

interface RestaurantProps {
  restaurant: RestaurantType & {
    featured: {
      text: string;
      icon: string;
    } | null;
  };
}

export function Restaurant({ restaurant }: RestaurantProps) {
  const utils = trpc.useContext();
  const toggleFavorite = trpc.restaurant.addFavorite.useMutation({
    onSuccess: () => {
      utils.restaurant.getRestaurants.invalidate();
    },
  });

  const handleFavoriteClick = () => {
    toggleFavorite.mutate({
      restaurantId: restaurant.id,
      isFavorite: !restaurant.isFavorite,
    });
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-[4/3]">
        <Image
          src={restaurant.images[0]}
          alt={restaurant.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md z-10 hover:scale-110 transition-transform duration-200"
          aria-label={restaurant.isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {restaurant.isFavorite ? (
            <HeartIcon className="w-6 h-6 text-red-500" />
          ) : (
            <HeartOutlineIcon className="w-6 h-6 text-gray-500" />
          )}
        </button>
        {restaurant.featured && (
          <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
            <span>⭐</span>
            <span>{restaurant.featured.text}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 font-semibold text-yellow-700">{restaurant.rating}</span>
          </div>
          <span className="text-gray-500">({restaurant.ratingCount} reviews)</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-1 text-gray-900">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{restaurant.description}</p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 uppercase text-xs font-medium">
              {restaurant.city}
            </span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-xs font-medium">
              {restaurant.category}
            </span>
          </div>
          <span className="text-gray-900 font-medium">{formatPriceRange(restaurant.priceRange)} won</span>
        </div>
      </div>
    </div>
  );
}

function formatPriceRange(range: string): string {
  const [min, max] = range.split('~');
  return `${min}0,000~${max}0,000`;
} 