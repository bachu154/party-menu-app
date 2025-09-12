"use client"

import { useState, useMemo } from "react"
import { mockDishes, categories, dietaryTypes } from "./src/data/mockDishes"
import Filters from "./src/components/Filters"
import DishList from "./src/components/DishList"
import IngredientModal from "./src/components/IngredientModal"
import "./App.css"

/**
 * Main App Component - Party Menu Selection Application
 *
 * This is the root component that manages the entire party menu selection system.
 * It handles state management for dish filtering, selection, and modal display.
 *
 * Key Features:
 * - Filter dishes by category, dietary type, and search term
 * - Add/remove dishes from selection with quantity tracking
 * - Display selection summary with category breakdown
 * - Show detailed ingredient information in modal
 * - Responsive design for mobile and desktop
 *
 * State Management:
 * - selectedCategory: Current category filter (All, Starter, Main Course, etc.)
 * - selectedDietaryType: Current dietary filter (All, Veg, Non-Veg)
 * - searchTerm: Current search query for dish names
 * - selectedDishes: Array of selected dishes with quantities
 * - modalDish: Currently displayed dish in ingredient modal
 */
function App() {
  // Filter state management
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDietaryType, setSelectedDietaryType] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  // Selection and modal state management
  const [selectedDishes, setSelectedDishes] = useState([])
  const [modalDish, setModalDish] = useState(null)

  // Filter dishes based on category, dietary type, and search term
  // Uses useMemo for performance optimization to prevent unnecessary re-filtering
  const filteredDishes = useMemo(() => {
    return mockDishes.filter((dish) => {
      const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory
      const matchesDietaryType = selectedDietaryType === "All" || dish.type === selectedDietaryType
      const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase())

      return matchesCategory && matchesDietaryType && matchesSearch
    })
  }, [selectedCategory, selectedDietaryType, searchTerm])

  // Add dish to selection - handles both new additions and quantity increases
  const addDish = (dish) => {
    setSelectedDishes((prev) => {
      const existing = prev.find((item) => item.id === dish.id)
      if (existing) {
        // Increase quantity if dish already selected
        return prev.map((item) => (item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      // Add new dish with quantity 1
      return [...prev, { ...dish, quantity: 1 }]
    })
  }

  // Remove dish from selection - handles quantity decrease and complete removal
  const removeDish = (dishId) => {
    setSelectedDishes((prev) => {
      const existing = prev.find((item) => item.id === dishId)
      if (existing && existing.quantity > 1) {
        // Decrease quantity if more than 1
        return prev.map((item) => (item.id === dishId ? { ...item, quantity: item.quantity - 1 } : item))
      }
      // Remove dish completely if quantity is 1
      return prev.filter((item) => item.id !== dishId)
    })
  }

  // Get selected dish count for a specific dish ID
  const getSelectedCount = (dishId) => {
    const selected = selectedDishes.find((item) => item.id === dishId)
    return selected ? selected.quantity : 0
  }

  // Calculate selection summary by category for sidebar display
  // Uses useMemo for performance optimization
  const selectionSummary = useMemo(() => {
    const summary = {
      Starter: 0,
      "Main Course": 0,
      Dessert: 0,
      Sides: 0,
      total: 0,
    }

    selectedDishes.forEach((item) => {
      summary[item.category] += item.quantity
      summary.total += item.quantity
    })

    return summary
  }, [selectedDishes])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Application Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Party Menu Selection</h1>
          <p className="text-gray-600 text-lg">Choose your perfect party menu from our delicious selection</p>
        </div>

        {/* Filter Controls */}
        <Filters
          categories={categories}
          dietaryTypes={dietaryTypes}
          selectedCategory={selectedCategory}
          selectedDietaryType={selectedDietaryType}
          searchTerm={searchTerm}
          onCategoryChange={setSelectedCategory}
          onDietaryTypeChange={setSelectedDietaryType}
          onSearchChange={setSearchTerm}
        />

        {/* Main Content Layout - Responsive flex layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Dish List - Main content area */}
          <div className="flex-1">
            <DishList
              dishes={filteredDishes}
              onAddDish={addDish}
              onRemoveDish={removeDish}
              onShowIngredients={setModalDish}
              getSelectedCount={getSelectedCount}
            />
          </div>

          {/* Selection Summary Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Selection Summary</h2>

              {/* Empty state when no dishes selected */}
              {selectionSummary.total === 0 ? (
                <p className="text-gray-500 text-center py-4">No dishes selected yet</p>
              ) : (
                <div className="space-y-3">
                  {/* Category breakdown */}
                  {Object.entries(selectionSummary).map(([category, count]) => {
                    if (category === "total" || count === 0) return null
                    return (
                      <div key={category} className="flex justify-between items-center">
                        <span className="text-gray-700">{category}:</span>
                        <span className="font-semibold text-cyan-600">{count}</span>
                      </div>
                    )
                  })}

                  {/* Total count */}
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-gray-800">Total:</span>
                      <span className="text-cyan-600">{selectionSummary.total}</span>
                    </div>
                  </div>

                  {/* Detailed selected items list with quantity controls */}
                  {selectedDishes.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                      <h3 className="font-semibold text-gray-800 mb-2">Selected Items:</h3>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {selectedDishes.map((item) => (
                          <div key={item.id} className="flex justify-between items-center text-sm">
                            <span className="text-gray-700 truncate">{item.name}</span>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => removeDish(item.id)}
                                className="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
                              >
                                -
                              </button>
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs min-w-[24px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => addDish(item)}
                                className="px-2 py-1 bg-cyan-500 text-white rounded text-xs hover:bg-cyan-600"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Ingredient Modal - Conditionally rendered when modalDish is set */}
        {modalDish && <IngredientModal dish={modalDish} onClose={() => setModalDish(null)} />}
      </div>
    </div>
  )
}

export default App
