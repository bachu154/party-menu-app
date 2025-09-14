"use client"

/**
 * Filters Component
 *
 * Provides filtering controls for the dish list with modern UI design
 * Features category tabs with selection counts, toggle-style dietary filters, and search
 * Maintains responsive layout for different screen sizes
 *
 * @param {Array} categories - Available dish categories for filtering
 * @param {Array} dietaryTypes - Available dietary types (Veg/Non-Veg/All)
 * @param {string} selectedCategory - Currently selected category filter
 * @param {string} selectedDietaryType - Currently selected dietary type filter
 * @param {string} searchTerm - Current search term for dish name filtering
 * @param {Object} categoryCounts - Count of selected dishes per category
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
  categoryCounts = {},
  onCategoryChange,
  onDietaryTypeChange,
  onSearchChange,
}) => {
  return (
    <div className="filters bg-white rounded-lg shadow-md mb-8 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search dishes by name..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-3 pl-10 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {categories.map((category) => {
            const count = categoryCounts[category] || 0
            const isActive = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200 ${
                  isActive
                    ? "border-blue-500 text-blue-600 bg-blue-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {category}
                {count > 0 && (
                  <span
                    className={`ml-2 px-2 py-1 text-xs rounded-full ${
                      isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-center">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
            {dietaryTypes.map((type) => {
              const isActive = selectedDietaryType === type
              return (
                <button
                  key={type}
                  onClick={() => onDietaryTypeChange(type)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {type === "Veg" && "🟢 "}
                  {type === "Non-Veg" && "🔴 "}
                  {type}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters
