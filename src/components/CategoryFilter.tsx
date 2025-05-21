import { StoreCategory } from '../generated/prisma';

const categories = [
  { id: 'entire', label: 'Entire', value: null },
  { id: 'ramen', label: 'Ramen & Tsukemen', value: StoreCategory.RAMEN },
  { id: 'sushi', label: 'Sushi', value: StoreCategory.SUSHI },
  { id: 'tonkatsu', label: 'Tonkatsu', value: StoreCategory.TONKATSU },
  { id: 'soba', label: 'Soba & Udon', value: StoreCategory.SOBA },
  { id: 'okonomiyaki', label: 'Okonomiyaki', value: StoreCategory.OKONOMIYAKI },
  { id: 'sukiyaki', label: 'Sukiyaki', value: StoreCategory.SUKIYAKI },
  { id: 'tempura', label: 'Tempura', value: StoreCategory.TEMPURA },
  { id: 'unagi', label: 'Unagi', value: StoreCategory.UNAGI },
  { id: 'yakitori', label: 'Yakitori', value: StoreCategory.YAKITORI },
  { id: 'yakiniku', label: 'Yakiniku', value: StoreCategory.YAKINIKU },
];

interface CategoryFilterProps {
  selectedCategory: StoreCategory | null;
  onSelectCategory: (category: StoreCategory | null) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
              ${selectedCategory === category.value
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
} 