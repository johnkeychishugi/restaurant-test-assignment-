import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search by restaurant name or description..."
          className="w-full px-12 py-4 rounded-xl border-2 border-gray-100 shadow-sm 
                   focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                   transition-all duration-300
                   text-gray-700 placeholder-gray-400"
          onChange={(e) => onSearch(e.target.value)}
        />
        <MagnifyingGlassIcon
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 
                                      text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
        />
      </div>
    </div>
  );
}
