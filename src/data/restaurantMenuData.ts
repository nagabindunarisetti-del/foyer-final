const commonFilters = [
  "All",
];

export const restaurantMenuData = {
  1: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Tandoori Feast",
        image:
          "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Butter Chicken + Garlic Naan + Gulab Jamun + Coke",
        price: 599,
      },
      {
        id: 2,
        name: "Veg Delight",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Paneer Tikka + Dal Makhani + Tandoori Roti + Drink",
        price: 449,
      },
    ],

    items: [
      {
        id: 1,
        name: "Butter Chicken",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Creamy tomato-based chicken curry with butter and cream",
        price: 320,
        veg: false,
        rating: 4.8,
        type: "Non-Veg",
        mealType: "Dinner",
      },
      {
        id: 2,
        name: "Dal Makhani",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Slow cooked black lentils with butter and cream",
        price: 250,
        veg: true,
        rating: 4.7,
        type: "Veg",
        mealType: "Dinner",
      },
      {
        id: 3,
        name: "Paneer Tikka",
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Char-grilled paneer cubes marinated in spices",
        price: 280,
        veg: true,
        rating: 4.6,
        type: "Veg",
        mealType: "Appetizer",
      },
      {
        id: 4,
        name: "Garlic Naan",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Soft naan bread topped with fresh garlic and butter",
        price: 45,
        veg: true,
        rating: 4.5,
        type: "Veg",
        mealType: "Bread",
      },
      {
        id: 5,
        name: "Chicken Biryani",
        image:
          "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Fragrant basmati rice cooked with spiced chicken",
        price: 310,
        veg: false,
        rating: 4.7,
        type: "Non-Veg",
        mealType: "Lunch",
      },
    ],
  },

  2: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Seafood Special",
        image:
          "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1773695441-min-750x750.jpg",
        desc:
          "Fish Curry + Prawn Masala + Appam + Rice",
        price: 699,
      },
      {
        id: 2,
        name: "Coastal Combo",
        image:
          "https://images.unsplash.com/photo-1626505023678-5e8986a1d5dc?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Fish Fry + Malabar Parotta + Coconut Rice",
        price: 549,
      },
    ],

    items: [
      {
        id: 1,
        name: "Fish Curry",
        image:
          "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1773695441-min-750x750.jpg",
        desc:
          "Tangy and spicy coastal fish curry with coconut milk",
        price: 350,
        veg: false,
        rating: 4.7,
        type: "Non-Veg",
        mealType: "Dinner",
      },
      {
        id: 2,
        name: "Prawn Masala",
        image:
          "https://images.unsplash.com/photo-1626505023678-5e8986a1d5dc?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Juicy prawns cooked in rich onion-tomato masala",
        price: 420,
        veg: false,
        rating: 4.6,
        type: "Non-Veg",
        mealType: "Dinner",
      },
      {
        id: 3,
        name: "Appam",
        image:
          "https://images.unsplash.com/photo-1589301760014-6c8d7e047d09?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Soft and fluffy fermented rice pancake",
        price: 40,
        veg: true,
        rating: 4.4,
        type: "Veg",
        mealType: "Bread",
      },
      {
        id: 4,
        name: "Fish Fry",
        image:
          "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Crispy pan-fried fish with coastal spices",
        price: 250,
        veg: false,
        rating: 4.5,
        type: "Non-Veg",
        mealType: "Appetizer",
      },
    ],
  },

  3: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Street Food Platter",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Pav Bhaji + Pani Puri + Vada Pav + Masala Chai",
        price: 299,
      },
    ],

    items: [
      {
        id: 1,
        name: "Pav Bhaji",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Spiced mixed vegetable mash served with buttered bread",
        price: 120,
        veg: true,
        rating: 4.6,
        type: "Veg",
        mealType: "Snacks",
      },
      {
        id: 2,
        name: "Pani Puri",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Crispy hollow puris filled with spicy tangy water",
        price: 60,
        veg: true,
        rating: 4.8,
        type: "Veg",
        mealType: "Snacks",
      },
      {
        id: 3,
        name: "Vada Pav",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Mumbai-style spicy potato fritter in a bun",
        price: 40,
        veg: true,
        rating: 4.5,
        type: "Veg",
        mealType: "Snacks",
      },
      {
        id: 4,
        name: "Samosa",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Crispy pastry filled with spiced potato and peas",
        price: 25,
        veg: true,
        rating: 4.4,
        type: "Veg",
        mealType: "Snacks",
      },
    ],
  },

  4: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Grill Master Combo",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Chicken Tikka + Mutton Seekh + Grilled Paneer + Coke",
        price: 799,
      },
      {
        id: 2,
        name: "Veg Grill Platter",
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Tandoori Veg Platter + Grilled Corn + Drink",
        price: 499,
      },
    ],

    items: [
      {
        id: 1,
        name: "Chicken Tikka",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Boneless chicken chunks marinated in yogurt and spices",
        price: 290,
        veg: false,
        rating: 4.8,
        type: "Non-Veg",
        mealType: "Appetizer",
      },
      {
        id: 2,
        name: "Mutton Seekh Kebab",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Minced mutton kebabs with aromatic spices",
        price: 340,
        veg: false,
        rating: 4.7,
        type: "Non-Veg",
        mealType: "Appetizer",
      },
      {
        id: 3,
        name: "Grilled Paneer",
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Paneer cubes grilled with bell peppers and spices",
        price: 260,
        veg: true,
        rating: 4.5,
        type: "Veg",
        mealType: "Appetizer",
      },
      {
        id: 4,
        name: "BBQ Chicken Wings",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Crispy chicken wings in smoky BBQ sauce",
        price: 310,
        veg: false,
        rating: 4.6,
        type: "Non-Veg",
        mealType: "Appetizer",
      },
    ],
  },

  5: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Coffee Lover's Combo",
        image:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Cappuccino + Red Velvet Pastry",
        price: 249,
      },
      {
        id: 2,
        name: "Breakfast Delight",
        image:
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Veg Club Sandwich + Cold Brew + Fries",
        price: 349,
      },
    ],

    items: [
      {
        id: 1,
        name: "Cappuccino",
        image:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Classic Italian coffee with frothy milk",
        price: 150,
        veg: true,
        rating: 4.7,
        type: "Veg",
        mealType: "Beverages",
      },
      {
        id: 2,
        name: "Veg Club Sandwich",
        image:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Triple-layer sandwich with fresh veggies and cheese",
        price: 190,
        veg: true,
        rating: 4.5,
        type: "Veg",
        mealType: "Snacks",
      },
      {
        id: 3,
        name: "Red Velvet Pastry",
        image:
          "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Soft red velvet cake with cream cheese frosting",
        price: 120,
        veg: true,
        rating: 4.8,
        type: "Veg",
        mealType: "Dessert",
      },
      {
        id: 4,
        name: "Cold Brew",
        image:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Smooth slow-brewed iced coffee",
        price: 180,
        veg: true,
        rating: 4.6,
        type: "Veg",
        mealType: "Beverages",
      },
    ],
  },

  6: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Nawabi Feast",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Galouti Kebab + Murg Musallam + Dum Biryani + Shahi Tukda",
        price: 1099,
      },
    ],

    items: [
      {
        id: 1,
        name: "Galouti Kebab",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Melt-in-mouth minced meat kebabs with aromatic spices",
        price: 420,
        veg: false,
        rating: 4.9,
        type: "Non-Veg",
        mealType: "Appetizer",
      },
      {
        id: 2,
        name: "Murg Musallam",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Whole chicken cooked in rich Mughlai gravy",
        price: 550,
        veg: false,
        rating: 4.8,
        type: "Non-Veg",
        mealType: "Dinner",
      },
      {
        id: 3,
        name: "Dum Biryani",
        image:
          "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Slow-cooked biryani with aromatic spices",
        price: 390,
        veg: false,
        rating: 4.7,
        type: "Non-Veg",
        mealType: "Lunch",
      },
      {
        id: 4,
        name: "Shahi Paneer",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Rich creamy paneer curry with royal touch",
        price: 340,
        veg: true,
        rating: 4.6,
        type: "Veg",
        mealType: "Dinner",
      },
    ],
  },

  7: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Pizza Party",
        image:
          "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Pepperoni Pizza + Garlic Bread + Coke",
        price: 599,
      },
      {
        id: 2,
        name: "Cheese Lovers",
        image:
          "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Cheese Burst Pizza + Pasta Alfredo + Drink",
        price: 749,
      },
    ],

    items: [
      {
        id: 1,
        name: "Pepperoni Pizza",
        image:
          "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Spicy pepperoni with mozzarella on thin crust (Medium)",
        price: 380,
        veg: false,
        rating: 4.7,
        type: "Non-Veg",
        mealType: "Dinner",
      },
      {
        id: 2,
        name: "Margherita Pizza",
        image:
          "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Classic tomato sauce and mozzarella pizza (Medium)",
        price: 250,
        veg: true,
        rating: 4.5,
        type: "Veg",
        mealType: "Dinner",
      },
      {
        id: 3,
        name: "Garlic Bread",
        image:
          "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Toasted bread with garlic butter and herbs",
        price: 110,
        veg: true,
        rating: 4.4,
        type: "Veg",
        mealType: "Snacks",
      },
      {
        id: 4,
        name: "Pasta Alfredo",
        image:
          "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Creamy white sauce pasta with herbs",
        price: 260,
        veg: true,
        rating: 4.6,
        type: "Veg",
        mealType: "Dinner",
      },
    ],
  },

  8: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Royal Rajasthani",
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Laal Maas + Dal Baati Churma + Bajra Roti",
        price: 899,
      },
    ],

    items: [
      {
        id: 1,
        name: "Laal Maas",
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Spicy Rajasthani mutton curry with red chilies",
        price: 620,
        veg: false,
        rating: 4.9,
        type: "Non-Veg",
        mealType: "Dinner",
      },
      {
        id: 2,
        name: "Dal Baati Churma",
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Traditional Rajasthani dal with baked wheat balls",
        price: 320,
        veg: true,
        rating: 4.7,
        type: "Veg",
        mealType: "Lunch",
      },
      {
        id: 3,
        name: "Kadhai Paneer",
        image:
          "https://www.cubesnjuliennes.com/wp-content/uploads/2023/12/Tawa-Paneer-Masala-Recipe.jpg",
        desc:
          "Paneer cooked in kadhai with bell peppers and spices",
        price: 370,
        veg: true,
        rating: 4.6,
        type: "Veg",
        mealType: "Dinner",
      },
      {
        id: 4,
        name: "Bajra Roti",
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Traditional pearl millet flatbread",
        price: 35,
        veg: true,
        rating: 4.4,
        type: "Veg",
        mealType: "Bread",
      },
    ],
  },

  9: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Asian Feast",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Chicken Pad Thai + Veg Dumplings + Spring Rolls",
        price: 499,
      },
    ],

    items: [
      {
        id: 1,
        name: "Chicken Pad Thai",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Stir-fried rice noodles with chicken and peanuts",
        price: 290,
        veg: false,
        rating: 4.7,
        type: "Non-Veg",
        mealType: "Dinner",
      },
      {
        id: 2,
        name: "Veg Hakka Noodles",
        image:
          "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Wok-tossed noodles with fresh vegetables",
        price: 180,
        veg: true,
        rating: 4.5,
        type: "Veg",
        mealType: "Dinner",
      },
      {
        id: 3,
        name: "Chicken Manchurian",
        image:
          "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Crispy chicken balls in spicy manchurian sauce",
        price: 280,
        veg: false,
        rating: 4.6,
        type: "Non-Veg",
        mealType: "Appetizer",
      },
      {
        id: 4,
        name: "Veg Dumplings",
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Steamed dumplings filled with mixed vegetables",
        price: 160,
        veg: true,
        rating: 4.5,
        type: "Veg",
        mealType: "Appetizer",
      },
    ],
  },

  10: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Breakfast Combo",
        image:
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Aloo Paratha + Masala Omelette + Fresh Juice",
        price: 299,
      },
      {
        id: 2,
        name: "Sweet Morning",
        image:
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Pancakes + French Toast + Fresh Orange Juice",
        price: 349,
      },
    ],

    items: [
      {
        id: 1,
        name: "Aloo Paratha",
        image:
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Stuffed whole wheat flatbread with spiced potato",
        price: 110,
        veg: true,
        rating: 4.7,
        type: "Veg",
        mealType: "Breakfast",
      },
      {
        id: 2,
        name: "Masala Omelette",
        image:
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Fluffy omelette with onions, tomatoes and spices",
        price: 120,
        veg: false,
        rating: 4.6,
        type: "Non-Veg",
        mealType: "Breakfast",
      },
      {
        id: 3,
        name: "Pancakes",
        image:
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Fluffy pancakes served with maple syrup",
        price: 180,
        veg: true,
        rating: 4.8,
        type: "Veg",
        mealType: "Breakfast",
      },
      {
        id: 4,
        name: "French Toast",
        image:
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1200&auto=format&fit=crop",
        desc:
          "Bread slices dipped in egg and fried golden",
        price: 150,
        veg: false,
        rating: 4.5,
        type: "Non-Veg",
        mealType: "Breakfast",
      },
    ],
  },
};