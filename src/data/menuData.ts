const commonFilters = [
  "All",
  "Veg",
  "Non-Veg",
  "🥚 Eggetarian",
  "🌱 Vegan",
  "🍽️ All",
  "🌅 Breakfast",
  "🍛 Lunch",
  "🌙 Dinner",
  "🥨 Snacks",
  "🍮 Dessert",
];

export const menuData = {
 

  1: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Royal Mughlai Combo",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1200&auto=format&fit=crop",
        desc: "Butter Chicken + Butter Naan + Coke",
        price: 420,
      },

      {
        id: 2,
        name: "Family Feast",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        desc: "Chicken Curry + Rice + Kebabs",
        price: 799,
      },
    ],

    items: [
      {
        id: 1,
        name: "Butter Chicken",
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1200&auto=format&fit=crop",
        desc: "Creamy butter chicken curry",
        price: 280,
        veg: false,
      },

      {
        id: 2,
        name: "Paneer Tikka",
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop",
        desc: "Char grilled paneer cubes",
        price: 240,
        veg: true,
      },

      {
        id: 3,
        name: "Chicken Kebab",
        image:
          "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1200&auto=format&fit=crop",
        desc: "Juicy grilled kebabs",
        price: 320,
        veg: false,
      },

      {
        id: 4,
        name: "Garlic Naan",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc: "Soft naan with garlic butter",
        price: 70,
        veg: true,
      },

      {
        id: 5,
        name: "Jeera Rice",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
        desc: "Basmati rice with cumin",
        price: 140,
        veg: true,
      },
    ],
  },

  2: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Hyderabadi Feast",
        image:
          "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1200&auto=format&fit=crop",
        desc: "Chicken Biryani + Double Ka Meetha",
        price: 450,
      },
    ],

    items: [
      {
        id: 1,
        name: "Chicken Dum Biryani",
        image:
          "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1200&auto=format&fit=crop",
        desc: "Authentic Hyderabadi dum biryani",
        price: 320,
        veg: false,
      },

      {
        id: 2,
        name: "Mutton Biryani",
        image:
          "https://images.unsplash.com/photo-1563379091339-03246963d29c?q=80&w=1200&auto=format&fit=crop",
        desc: "Rich mutton biryani",
        price: 420,
        veg: false,
      },

      {
        id: 3,
        name: "Egg Biryani",
        image:
          "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=1200&auto=format&fit=crop",
        desc: "Spicy egg dum biryani",
        price: 240,
        veg: false,
      },

      {
        id: 4,
        name: "Double Ka Meetha",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
        desc: "Classic Hyderabadi dessert",
        price: 120,
        veg: true,
      },

      {
        id: 5,
        name: "Chicken 65",
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1200&auto=format&fit=crop",
        desc: "Spicy crispy chicken starter",
        price: 260,
        veg: false,
      },
    ],
  },

  3: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Chinese Combo",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
        desc: "Noodles + Manchurian + Coke",
        price: 399,
      },
    ],

    items: [
      {
        id: 1,
        name: "Hakka Noodles",
        image:
          "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop",
        desc: "Veg wok tossed noodles",
        price: 220,
        veg: true,
      },

      {
        id: 2,
        name: "Schezwan Fried Rice",
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200&auto=format&fit=crop",
        desc: "Spicy schezwan rice",
        price: 240,
        veg: true,
      },

      {
        id: 3,
        name: "Chicken Manchurian",
        image:
          "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=1200&auto=format&fit=crop",
        desc: "Crispy chicken in sauce",
        price: 280,
        veg: false,
      },

      {
        id: 4,
        name: "Spring Rolls",
        image:
          "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1200&auto=format&fit=crop",
        desc: "Crispy veg rolls",
        price: 180,
        veg: true,
      },

      {
        id: 5,
        name: "Veg Momos",
        image:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1200&auto=format&fit=crop",
        desc: "Steamed Himalayan dumplings",
        price: 160,
        veg: true,
      },
    ],
  },

 

  101: {
    filters: commonFilters,

    combos: [
      {
        id: 1,
        name: "Punjabi Special",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
        desc: "Butter Chicken + Naan + Lassi",
        price: 599,
      },
    ],

    items: [
      {
        id: 1,
        name: "Tandoori Chicken",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
        desc: "Smoky grilled chicken",
        price: 380,
        veg: false,
      },

      {
        id: 2,
        name: "Dal Makhani",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
        desc: "Creamy black dal",
        price: 240,
        veg: true,
      },

      {
        id: 3,
        name: "Paneer Butter Masala",
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop",
        desc: "Rich paneer curry",
        price: 280,
        veg: true,
      },

      {
        id: 4,
        name: "Butter Naan",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop",
        desc: "Soft buttery naan",
        price: 60,
        veg: true,
      },

      {
        id: 5,
        name: "Lassi",
        image:
          "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1200&auto=format&fit=crop",
        desc: "Traditional Punjabi sweet lassi",
        price: 90,
        veg: true,
      },
    ],
  },

  102: {
    filters: commonFilters,

    combos: [],

    items: [
      {
        id: 1,
        name: "Fish Curry",
        image:
          "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
        desc: "Traditional coastal fish curry",
        price: 420,
        veg: false,
      },

      {
        id: 2,
        name: "Prawn Fry",
        image:
          "https://images.unsplash.com/photo-1625943555419-56a2cb596640?q=80&w=1200&auto=format&fit=crop",
        desc: "Crispy fried prawns",
        price: 520,
        veg: false,
      },

      {
        id: 3,
        name: "Appam",
        image:
          "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1200&auto=format&fit=crop",
        desc: "Soft Kerala appam",
        price: 90,
        veg: true,
      },

      {
        id: 4,
        name: "Neer Dosa",
        image:
          "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1200&auto=format&fit=crop",
        desc: "Soft coastal rice dosa",
        price: 110,
        veg: true,
      },

      {
        id: 5,
        name: "Crab Masala",
        image:
          "https://images.unsplash.com/photo-1559847844-d721426d6edc?q=80&w=1200&auto=format&fit=crop",
        desc: "Spicy coastal crab curry",
        price: 620,
        veg: false,
      },
    ],
  },
};