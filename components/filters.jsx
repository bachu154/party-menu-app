"use client"

import { Search, Filter } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Filters({
  categories,
  dietaryTypes,
  selectedCategory,
  selectedDietaryType,
  searchTerm,
  categoryCounts,
  onCategoryChange,
  onDietaryTypeChange,
  onSearchChange,
}) {
  return (
    <div className="bg-card rounded-lg p-6 mb-8 shadow-sm border">
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search dishes by name..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-11 h-12 text-base bg-input border-border focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <label className="text-sm font-medium text-foreground flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4" />
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const count = categoryCounts[category] || 0
              const isActive = selectedCategory === category
              return (
                <Button
                  key={category}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(category)}
                  className={`relative h-10 px-4 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#176fff] hover:bg-[#176fff]/90 text-white border-[#176fff] shadow-md"
                      : "hover:bg-muted/50 border-border"
                  }`}
                >
                  {category}
                  {count > 0 && (
                    <span
                      className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />}
                </Button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-foreground">Dietary Preference</label>
          <div className="flex gap-2">
            {dietaryTypes.map((type) => {
              const isActive = selectedDietaryType === type
              return (
                <Button
                  key={type}
                  variant={isActive ? "default" : "outline"}
                  size="sm"
                  onClick={() => onDietaryTypeChange(type)}
                  className={`h-10 px-4 text-sm font-medium transition-all ${
                    type === "Veg" && isActive
                      ? "bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-md"
                      : type === "Non-Veg" && isActive
                        ? "bg-red-600 hover:bg-red-700 text-white border-red-600 shadow-md"
                        : type === "Veg"
                          ? "border-green-600 text-green-600 hover:bg-green-50 hover:border-green-700"
                          : type === "Non-Veg"
                            ? "border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700"
                            : "hover:bg-muted/50"
                  }`}
                >
                  {type}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
