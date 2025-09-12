"use client"

import { useState, useMemo } from "react"
import { mockDishes, categories, dietaryTypes } from "../data/mock-dishes"
import { Filters } from "../components/filters"
import { DishList } from "../components/dish-list"
import { IngredientModal } from "../components/ingredient-modal"
import { SelectionSummary } from "../components/selection-summary"

export default function PartyMenuApp() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDietaryType, setSelectedDietaryType] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDishes, setSelectedDishes] = useState([])
  const [modalDish, setModalDish] = useState(null)

  // Filter dishes based on category, dietary type, and search term
  const filteredDishes = useMemo(() => {
    return mockDishes.filter((dish) => {
      const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory
      const matchesDietaryType = selectedDietaryType === "All" || dish.type === selectedDietaryType
      const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase())

      return matchesCategory && matchesDietaryType && matchesSearch
    })
  }, [selectedCategory, selectedDietaryType, searchTerm])

  // Add dish to selection
  const addDish = (dish) => {
    setSelectedDishes((prev) => {
      const existing = prev.find((item) => item.id === dish.id)
      if (existing) {
        return prev.map((item) => (item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...dish, quantity: 1 }]
    })
  }

  // Remove dish from selection
  const removeDish = (dishId) => {
    setSelectedDishes((prev) => {
      const existing = prev.find((item) => item.id === dishId)
      if (existing && existing.quantity > 1) {
        return prev.map((item) => (item.id === dishId ? { ...item, quantity: item.quantity - 1 } : item))
      }
      return prev.filter((item) => item.id !== dishId)
    })
  }

  // Get selected dish count for a specific dish
  const getSelectedCount = (dishId) => {
    const selected = selectedDishes.find((item) => item.id === dishId)
    return selected ? selected.quantity : 0
  }

  // Calculate selection summary by category
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Party Menu Selection</h1>
          <p className="text-muted-foreground text-lg">Choose your perfect party menu from our delicious selection</p>
        </div>

        {/* Filters */}
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

        <div className="flex gap-8">
          {/* Main Content */}
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
          <div className="w-80">
            <SelectionSummary
              summary={selectionSummary}
              selectedDishes={selectedDishes}
              onRemoveDish={removeDish}
              onAddDish={addDish}
            />
          </div>
        </div>

        {/* Ingredient Modal */}
        {modalDish && <IngredientModal dish={modalDish} onClose={() => setModalDish(null)} />}
      </div>
    </div>
  )
}
