"use client"

/**
 * IngredientModal Component
 *
 * Displays detailed ingredient information for a selected dish in a modal overlay
 * Provides accessible modal functionality with backdrop click and close button
 * Shows dish image, details, and complete ingredient list
 *
 * @param {Object} dish - The dish object containing ingredient and detail information
 * @param {Function} onClose - Callback function to close the modal
 */
const IngredientModal = ({ dish, onClose }) => {
  // Handle clicking on modal backdrop to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="ingredient-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      {/* Modal content container with responsive sizing */}
      <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal header with dish name and close button */}
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">{dish.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">
              ×
            </button>
          </div>

          {/* Dish image */}
          <div className="mb-4">
            <img
              src={dish.image || "/placeholder.svg"}
              alt={dish.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Dish details - category, type, and price */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">{dish.category}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  dish.type === "Veg" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {dish.type}
              </span>
            </div>
            <p className="text-lg font-bold text-cyan-600">₹{dish.price}</p>
          </div>

          {/* Ingredients list with styled bullet points */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredients:</h3>
            <ul className="space-y-2">
              {dish.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IngredientModal
