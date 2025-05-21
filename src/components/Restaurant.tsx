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
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={restaurant.images[0]}
          alt={restaurant.name}
          fill
          className="object-cover"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md z-10"
        >
          {restaurant.isFavorite ? (
            <HeartIcon className="w-6 h-6 text-red-500" />
          ) : (
            <HeartOutlineIcon className="w-6 h-6 text-gray-500" />
          )}
        </button>
        {restaurant.featured && (
          <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <span>⭐</span>
            <span>{restaurant.featured.text}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 font-semibold">{restaurant.rating}</span>
          </div>
          <span className="text-gray-500">({restaurant.ratingCount})</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{restaurant.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="uppercase">{restaurant.city}</span>
            <span>•</span>
            <span>{restaurant.category}</span>
          </div>
          <span>{formatPriceRange(restaurant.priceRange)} won</span>
        </div>
      </div>
    </div>
  );
}

function formatPriceRange(range: string): string {
  const [min, max] = range.split('~');
  return `${min}0,000~${max}0,000`;
} 