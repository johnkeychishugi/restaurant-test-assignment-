import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for the name of the restaurant"
          className="w-full px-12 py-3 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={(e) => onSearch(e.target.value)}
        />
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
} 