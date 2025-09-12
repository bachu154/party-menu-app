"use client"

import { DishCard } from "./dish-card"

export function DishList({ dishes, onAddDish, onRemoveDish, onShowIngredients, getSelectedCount }) {
  if (dishes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground text-lg mb-2">No dishes found</div>
        <p className="text-sm text-muted-foreground">Try adjusting your filters or search term</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          selectedCount={getSelectedCount(dish.id)}
          onAdd={() => onAddDish(dish)}
          onRemove={() => onRemoveDish(dish.id)}
          onShowIngredients={() => onShowIngredients(dish)}
        />
      ))}
    </div>
  )
}
