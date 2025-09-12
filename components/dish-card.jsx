"use client"

import { Plus, Minus, Info, Leaf } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import Image from "next/image"

export function DishCard({ dish, selectedCount, onAdd, onRemove, onShowIngredients }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={dish.image || "/placeholder.svg"}
            alt={dish.name}
            width={400}
            height={250}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
          <div className="absolute top-3 left-3">
            <Badge variant="outline" className="bg-white/90 text-foreground border-border">
              {dish.category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-card-foreground text-balance">{dish.name}</h3>
          <span className="text-lg font-bold text-primary">₹{dish.price}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3 text-pretty">{dish.description}</p>

        <Button
          variant="ghost"
          size="sm"
          onClick={onShowIngredients}
          className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-normal"
        >
          <Info className="w-4 h-4 mr-1" />
          View Ingredients
        </Button>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          {selectedCount > 0 ? (
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={onRemove} className="h-8 w-8 p-0 bg-transparent">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-medium text-foreground min-w-[2rem] text-center">{selectedCount}</span>
              <Button variant="outline" size="sm" onClick={onAdd} className="h-8 w-8 p-0 bg-transparent">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button onClick={onAdd} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Add to Menu
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
