"use client"

/**
 * IngredientModal Component
 *
 * Displays detailed ingredient information for a selected dish in a modal overlay
 * Provides accessible modal functionality with backdrop click and close button
 * Shows dish image, details, and complete ingredient list with improved mobile design
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
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-1">{dish.name}</h2>
              <div className="flex items-center gap-2">
                <span className="text-blue-100 text-sm">{dish.category}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    dish.type === "Veg" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  }`}
                >
                  {dish.type}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-3xl leading-none p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200"
            >
              ×
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            {/* Dish image with improved styling */}
            <div className="mb-6">
              <img
                src={dish.image || "/placeholder.svg"}
                alt={dish.name}
                className="w-full h-56 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Price display with enhanced styling */}
            <div className="mb-6 text-center">
              <p className="text-3xl font-bold text-blue-600">₹{dish.price}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Ingredients</h3>
              <div className="grid grid-cols-1 gap-3">
                {dish.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IngredientModal
