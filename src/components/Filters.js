"use client"

/**
 * Filters Component
 *
 * Provides filtering controls for the dish list
 * Handles user input for search, category selection, and dietary type filtering
 * Maintains responsive layout for different screen sizes
 *
 * @param {Array} categories - Available dish categories for filtering
 * @param {Array} dietaryTypes - Available dietary types (Veg/Non-Veg/All)
 * @param {string} selectedCategory - Currently selected category filter
 * @param {string} selectedDietaryType - Currently selected dietary type filter
 * @param {string} searchTerm - Current search term for dish name filtering
 * @param {Function} onCategoryChange - Callback for category filter changes
 * @param {Function} onDietaryTypeChange - Callback for dietary type filter changes
 * @param {Function} onSearchChange - Callback for search term changes
 */
const Filters = ({
  categories,
  dietaryTypes,
  selectedCategory,
  selectedDietaryType,
  searchTerm,
  onCategoryChange,
  onDietaryTypeChange,
  onSearchChange,
}) => {
  return (
    <div className="filters bg-white p-6 rounded-lg shadow-md mb-8">
      {/* Responsive grid layout for filter controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input - allows filtering by dish name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Search Dishes</label>
          <input
            type="text"
            placeholder="Search by dish name..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter - filters dishes by category (Starter, Main Course, etc.) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Dietary Type Filter - filters dishes by Veg/Non-Veg preference */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Dietary Type</label>
          <select
            value={selectedDietaryType}
            onChange={(e) => onDietaryTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          >
            {dietaryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filters
