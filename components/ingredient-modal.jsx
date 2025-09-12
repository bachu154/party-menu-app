"use client"

import { X, Leaf } from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import Image from "next/image"

export function IngredientModal({ dish, onClose }) {
  if (!dish) return null

  return (
    <Dialog open={!!dish} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-popover border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-popover-foreground">
            <span className="text-balance">{dish.name}</span>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Dish Image */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={dish.image || "/placeholder.svg"}
              alt={dish.name}
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="absolute top-3 right-3">
              <Badge
                variant={dish.type === "Veg" ? "secondary" : "destructive"}
                className={`${
                  dish.type === "Veg"
                    ? "bg-green-100 text-green-800 border-green-200"
                    : "bg-red-100 text-red-800 border-red-200"
                }`}
              >
                {dish.type === "Veg" && <Leaf className="w-3 h-3 mr-1" />}
                {dish.type}
              </Badge>
            </div>
          </div>

          {/* Dish Details */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Badge variant="outline" className="bg-background text-foreground border-border">
                {dish.category}
              </Badge>
              <span className="text-lg font-bold text-primary">₹{dish.price}</span>
            </div>

            <p className="text-sm text-muted-foreground text-pretty">{dish.description}</p>

            <Separator />

            {/* Ingredients List */}
            <div className="space-y-2">
              <h4 className="font-medium text-popover-foreground">Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="secondary" className="bg-muted text-muted-foreground">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Allergen Information */}
            <div className="bg-muted/50 p-3 rounded-md">
              <p className="text-xs text-muted-foreground">
                <strong>Note:</strong> Please inform your server of any allergies or dietary restrictions. This dish
                contains ingredients that may cause allergic reactions.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
