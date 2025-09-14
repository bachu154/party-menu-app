import DishCard from "./DishCard"

/**
 * DishList Component
 *
 * Renders a list of dishes grouped by category with responsive grid layout
 * Handles empty states when no dishes match the current filters
 * Organizes dishes into category sections with proper headings
 *
 * @param {Array} dishes - Array of dish objects to display
 * @param {Function} onAddDish - Callback function to add dish to selection
 * @param {Function} onRemoveDish - Callback function to remove dish from selection
 * @param {Function} onShowIngredients - Callback function to show ingredient modal
 * @param {Function} getSelectedCount - Function to get current selection count for a dish
 */
const DishList = ({ dishes, onAddDish, onRemoveDish, onShowIngredients, getSelectedCount }) => {
  // Handle empty state when no dishes match filters
  if (dishes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No dishes found matching your criteria.</div>
        <div className="text-gray-400 text-sm mt-2">Try adjusting your filters or search term.</div>
      </div>
    )
  }

  // Group dishes by category for organized display
  const groupedDishes = dishes.reduce((acc, dish) => {
    if (!acc[dish.category]) {
      acc[dish.category] = []
    }
    acc[dish.category].push(dish)
    return acc
  }, {})

  return (
    <div className="space-y-8">
      {/* Render each category section */}
      {Object.entries(groupedDishes).map(([category, categoryDishes]) => (
        <div key={category}>
          {/* Category heading with styled border */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryDishes.map((dish) => (
              <DishCard
                key={dish.id}
                dish={dish}
                onAddDish={onAddDish}
                onRemoveDish={onRemoveDish}
                onShowIngredients={onShowIngredients}
                selectedCount={getSelectedCount(dish.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default DishList
