export const mockDishes = [
  // Starters
  {
    id: 1,
    name: "Bruschetta Trio",
    category: "Starter",
    type: "Veg",
    description: "Three varieties of toasted bread with fresh toppings",
    ingredients: ["Bread", "Tomatoes", "Basil", "Mozzarella", "Olive Oil", "Garlic"],
    image: "/tomato-basil-bruschetta.png",
    price: 1078, // 12.99 * 83
  },
  {
    id: 2,
    name: "Buffalo Wings",
    category: "Starter",
    type: "Non-Veg",
    description: "Spicy chicken wings with blue cheese dip",
    ingredients: ["Chicken Wings", "Buffalo Sauce", "Blue Cheese", "Celery", "Carrots"],
    image: "/buffalo-chicken-wings-with-sauce.jpg",
    price: 1244, // 14.99 * 83
  },
  {
    id: 3,
    name: "Spinach Artichoke Dip",
    category: "Starter",
    type: "Veg",
    description: "Creamy dip served with tortilla chips",
    ingredients: ["Spinach", "Artichokes", "Cream Cheese", "Parmesan", "Tortilla Chips"],
    image: "/spinach-artichoke-dip-with-chips.jpg",
    price: 912, // 10.99 * 83
  },
  {
    id: 4,
    name: "Shrimp Cocktail",
    category: "Starter",
    type: "Non-Veg",
    description: "Fresh shrimp with cocktail sauce",
    ingredients: ["Shrimp", "Cocktail Sauce", "Lemon", "Lettuce"],
    image: "/shrimp-cocktail-with-sauce.jpg",
    price: 1410, // 16.99 * 83
  },

  // Main Course
  {
    id: 5,
    name: "Grilled Salmon",
    category: "Main Course",
    type: "Non-Veg",
    description: "Atlantic salmon with lemon herb butter",
    ingredients: ["Salmon", "Lemon", "Herbs", "Butter", "Asparagus", "Rice"],
    image: "/grilled-salmon-with-vegetables.jpg",
    price: 2074, // 24.99 * 83
  },
  {
    id: 6,
    name: "Vegetable Lasagna",
    category: "Main Course",
    type: "Veg",
    description: "Layers of pasta with roasted vegetables and cheese",
    ingredients: ["Pasta", "Zucchini", "Eggplant", "Ricotta", "Mozzarella", "Tomato Sauce"],
    image: "/vegetable-lasagna.png",
    price: 1576, // 18.99 * 83
  },
  {
    id: 7,
    name: "BBQ Ribs",
    category: "Main Course",
    type: "Non-Veg",
    description: "Slow-cooked pork ribs with BBQ sauce",
    ingredients: ["Pork Ribs", "BBQ Sauce", "Coleslaw", "Corn", "Potatoes"],
    image: "/bbq-pork-ribs-with-sides.jpg",
    price: 1908, // 22.99 * 83
  },
  {
    id: 8,
    name: "Mushroom Risotto",
    category: "Main Course",
    type: "Veg",
    description: "Creamy arborio rice with wild mushrooms",
    ingredients: ["Arborio Rice", "Wild Mushrooms", "Parmesan", "White Wine", "Onions", "Garlic"],
    image: "/creamy-mushroom-risotto.jpg",
    price: 1659, // 19.99 * 83
  },

  // Desserts
  {
    id: 9,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    type: "Veg",
    description: "Warm chocolate cake with molten center",
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Sugar", "Flour", "Vanilla Ice Cream"],
    image: "/chocolate-lava-cake.png",
    price: 746, // 8.99 * 83
  },
  {
    id: 10,
    name: "Tiramisu",
    category: "Dessert",
    type: "Veg",
    description: "Classic Italian coffee-flavored dessert",
    ingredients: ["Mascarpone", "Ladyfingers", "Coffee", "Cocoa", "Eggs", "Sugar"],
    image: "/tiramisu-dessert-with-cocoa.jpg",
    price: 663, // 7.99 * 83
  },
  {
    id: 11,
    name: "Cheesecake",
    category: "Dessert",
    type: "Veg",
    description: "New York style cheesecake with berry compote",
    ingredients: ["Cream Cheese", "Graham Crackers", "Berries", "Sugar", "Eggs", "Vanilla"],
    image: "/new-york-cheesecake-with-berries.jpg",
    price: 580, // 6.99 * 83
  },

  // Sides
  {
    id: 12,
    name: "Garlic Bread",
    category: "Sides",
    type: "Veg",
    description: "Toasted bread with garlic butter and herbs",
    ingredients: ["Bread", "Garlic", "Butter", "Parsley", "Parmesan"],
    image: "/herbed-garlic-bread.png",
    price: 497, // 5.99 * 83
  },
  {
    id: 13,
    name: "Caesar Salad",
    category: "Sides",
    type: "Veg",
    description: "Crisp romaine with Caesar dressing and croutons",
    ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan", "Lemon"],
    image: "/caesar-salad-croutons.png",
    price: 746, // 8.99 * 83
  },
  {
    id: 14,
    name: "Sweet Potato Fries",
    category: "Sides",
    type: "Veg",
    description: "Crispy sweet potato fries with aioli",
    ingredients: ["Sweet Potatoes", "Aioli", "Paprika", "Salt", "Pepper"],
    image: "/sweet-potato-fries-with-aioli.jpg",
    price: 580, // 6.99 * 83
  },
  {
    id: 15,
    name: "Bacon Mac & Cheese",
    category: "Sides",
    type: "Non-Veg",
    description: "Creamy mac and cheese with crispy bacon",
    ingredients: ["Macaroni", "Cheddar Cheese", "Bacon", "Milk", "Butter", "Breadcrumbs"],
    image: "/bacon-mac-and-cheese.jpg",
    price: 829, // 9.99 * 83
  },
]

export const categories = ["All", "Starter", "Main Course", "Dessert", "Sides"]
export const dietaryTypes = ["All", "Veg", "Non-Veg"]
