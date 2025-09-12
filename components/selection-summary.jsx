"use client"

import { ShoppingCart, Minus, Plus } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"

export function SelectionSummary({ summary, selectedDishes, onRemoveDish, onAddDish }) {
  const totalPrice = selectedDishes.reduce((sum, dish) => sum + dish.price * dish.quantity, 0)

  return (
    <Card className="sticky top-4 bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <ShoppingCart className="h-5 w-5" />
          Menu Selection
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Category Summary */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-card-foreground">Items by Category</h4>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(summary)
              .filter(([key]) => key !== "total")
              .map(([category, count]) => (
                <div key={category} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{category}:</span>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {count}
                  </Badge>
                </div>
              ))}
          </div>
          <Separator />
          <div className="flex justify-between items-center font-medium">
            <span className="text-card-foreground">Total Items:</span>
            <Badge className="bg-primary text-primary-foreground">{summary.total}</Badge>
          </div>
        </div>

        {/* Selected Dishes List */}
        {selectedDishes.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-sm text-card-foreground">Selected Dishes</h4>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {selectedDishes.map((dish) => (
                <div key={dish.id} className="flex items-center justify-between p-2 bg-muted rounded-md">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-card-foreground truncate">{dish.name}</p>
                    <p className="text-xs text-muted-foreground">₹{dish.price} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveDish(dish.id)}
                        className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium min-w-[1.5rem] text-center">{dish.quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onAddDish && onAddDish(dish)}
                        className="h-6 w-6 p-0 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Total Price */}
        {selectedDishes.length > 0 && (
          <>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-card-foreground">Total Price:</span>
                <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Finalize Menu Selection
              </Button>
            </div>
          </>
        )}

        {selectedDishes.length === 0 && (
          <div className="text-center py-8">
            <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">No dishes selected yet</p>
            <p className="text-muted-foreground text-xs">Start adding dishes to see your selection here</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
