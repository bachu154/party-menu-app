"use client"

import { useState } from "react"

/**
 * DishCard Component
 *
 * Displays individual dish information with interactive controls
 * Handles adding/removing dishes from selection with visual feedback
 * Shows dish details including name, category, price, and type (Veg/Non-Veg)
 *
 * @param {Object} dish - The dish object containing all dish information
 * @param {Function} onAddDish - Callback function to add dish to selection
 * @param {Function} onRemoveDish - Callback function to remove dish from selection
 * @param {Function} onShowIngredients - Callback function to show ingredient modal
 * @param {number} selectedCount - Current count of this dish in selection
 */
const DishCard = ({ dish, onAddDish, onRemoveDish, onShowIngredients, selectedCount }) => {
  const [added, setAdded] = useState(false)

  // Handle adding dish to menu with visual feedback
  const handleAddDish = () => {
    onAddDish(dish)
    setAdded(true)
    setTimeout(() => setAdded(false), 1000) // Reset visual cue after 1 second
  }

  // Handle removing dish from selection
  const handleRemoveDish = () => {
    onRemoveDish(dish.id)
  }

  // Handle showing ingredient details in modal
  const handleShowIngredients = () => {
    onShowIngredients(dish)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Dish image with type badge */}
      <div className="relative">
        <img src={dish.image || "/placeholder.svg"} alt={dish.name} className="w-full h-48 object-cover" />
        <div
          className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
            dish.type === "Veg" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {dish.type}
        </div>
      </div>

      {/* Dish information and controls */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{dish.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{dish.category}</p>
        <p className="text-lg font-bold text-cyan-600 mb-4">₹{dish.price}</p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          {/* Ingredients button */}
          <button
            onClick={handleShowIngredients}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors"
          >
            Ingredients
          </button>

          {/* Quantity controls when dish is selected */}
          {selectedCount > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleRemoveDish}
                className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                {selectedCount}
              </span>
              <button
                onClick={handleAddDish}
                className={`add-button px-3 py-1 bg-cyan-500 text-white rounded-md text-sm hover:bg-cyan-600 transition-colors ${added ? "added" : ""}`}
              >
                {added ? "Added!" : "+"}
              </button>
            </div>
          )}

          {/* Initial add button when dish not selected */}
          {selectedCount === 0 && (
            <button
              onClick={handleAddDish}
              className={`add-button px-4 py-2 bg-cyan-500 text-white rounded-md text-sm hover:bg-cyan-600 transition-colors ${added ? "added" : ""}`}
            >
              {added ? "Added!" : "Add to Selection"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default DishCard
