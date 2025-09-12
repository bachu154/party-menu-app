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
  onCategoryChange,
  onDietaryTypeChange,
  onSearchChange,
}) {
  return (
    <div className="bg-card rounded-lg p-6 mb-8 shadow-sm border">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search Bar */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-input border-border"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Dietary Type Filter */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Dietary</label>
            <div className="flex gap-2">
              {dietaryTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedDietaryType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => onDietaryTypeChange(type)}
                  className={`text-xs ${
                    type === "Veg" && selectedDietaryType === type
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : type === "Non-Veg" && selectedDietaryType === type
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : type === "Veg"
                          ? "border-green-600 text-green-600 hover:bg-green-50"
                          : type === "Non-Veg"
                            ? "border-red-600 text-red-600 hover:bg-red-50"
                            : ""
                  }`}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
