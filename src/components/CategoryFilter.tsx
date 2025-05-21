import { StoreCategory } from '../generated/prisma';

const categories = [
  { id: 'entire', label: 'entire', value: null },
  { id: 'ramen', label: 'Ramen/Tsukemen', value: StoreCategory.RAMEN },
  { id: 'tonkatsu', label: 'Tonkatsu/Kushikatsu', value: StoreCategory.TONKATSU },
  { id: 'soba', label: 'Soba/Udon', value: StoreCategory.SOBA },
  { id: 'okonomiyaki', label: 'Okonomiyaki/Takoyaki', value: StoreCategory.OKONOMIYAKI },
  { id: 'sukiyaki', label: 'Sukiyaki/Shabu Shabu', value: StoreCategory.SUKIYAKI },
  { id: 'tempura', label: 'Tempura', value: StoreCategory.TEMPURA },
  { id: 'eel', label: 'Eel', value: StoreCategory.UNAGI },
  { id: 'yakitori', label: 'Yakitori/Skewer', value: StoreCategory.YAKITORI },
];

interface CategoryFilterProps {
  selectedCategory: StoreCategory | null;
  onSelectCategory: (category: StoreCategory | null) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.value)}
          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
            selectedCategory === category.value
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
} 