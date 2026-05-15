import {
  Box,
  Typography,
  Chip,
  Button,
} from "@mui/material";

import {
  useState,
  useEffect,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { kitchenData } from "../data/kitchenData";
import { restaurantData } from "../data/restaurantData";
import { menuData } from "../data/menuData";

import Cartbar from "../components/Cartbar";

const MenuPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  /* PROVIDER */

  const allProviders = [
    ...kitchenData,
    ...restaurantData,
  ];

  const provider = allProviders.find(
    (item) => item.id === Number(id)
  );

  const menu = menuData[Number(id)];

  /* UNIQUE STORAGE KEY */

  const storageKey = `cart_${id}`;

  /* CART */

  const [cartItems, setCartItems] =
    useState<any[]>(() => {
      const savedCart =
        localStorage.getItem(
          storageKey
        );

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  /* SYNC */

  useEffect(() => {
    const syncCart = () => {
      const updatedCart =
        localStorage.getItem(
          storageKey
        );

      setCartItems(
        updatedCart
          ? JSON.parse(updatedCart)
          : []
      );
    };

    window.addEventListener(
      "cartUpdated",
      syncCart as EventListener
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        syncCart as EventListener
      );
    };
  }, [storageKey]);

  /* FILTER */

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  /* ADD */

  const addToCart = (food: any) => {
    const existingItem =
      cartItems.find(
        (item) => item.id === food.id
      );

    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map(
        (item) =>
          item.id === food.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
      );
    } else {
      updatedCart = [
        ...cartItems,

        {
          ...food,
          quantity: 1,
        },
      ];
    }

    setCartItems(updatedCart);

    /* IMPORTANT */

    localStorage.setItem(
      storageKey,
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  /* DELETE */

  const handleDelete = (
    itemId: number
  ) => {
    const updatedCart =
      cartItems
        .map((item) =>
          item.id === itemId
            ? {
                ...item,

                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        );

    setCartItems(updatedCart);

    /* IMPORTANT */

    localStorage.setItem(
      storageKey,
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  /* FILTER ITEMS */

  const filteredItems =
    selectedFilter === "All"
      ? menu.items
      : menu.items.filter((food: any) => {
          if (
            selectedFilter === "Veg"
          ) {
            return food.veg === true;
          }

          if (
            selectedFilter ===
            "Non-Veg"
          ) {
            return food.veg === false;
          }

          if (
            selectedFilter ===
            "🥚 Eggetarian"
          ) {
            return (
              food.category === "egg"
            );
          }

          if (
            selectedFilter ===
            "🌱 Vegan"
          ) {
            return (
              food.category ===
              "vegan"
            );
          }

          if (
            selectedFilter ===
            "🌅 Breakfast"
          ) {
            return (
              food.mealType ===
              "breakfast"
            );
          }

          if (
            selectedFilter ===
            "🍛 Lunch"
          ) {
            return (
              food.mealType ===
              "lunch"
            );
          }

          if (
            selectedFilter ===
            "🌙 Dinner"
          ) {
            return (
              food.mealType ===
              "dinner"
            );
          }

          if (
            selectedFilter ===
            "🥨 Snacks"
          ) {
            return (
              food.mealType ===
              "snacks"
            );
          }

          if (
            selectedFilter ===
            "🍮 Dessert"
          ) {
            return (
              food.mealType ===
              "dessert"
            );
          }

          return true;
        });

  if (!provider || !menu) {
    return (
      <Typography p={4}>
        Data not found
      </Typography>
    );
  }

  return (
    <Box p={4}>
      {/* BACK */}

      <Button
        startIcon={<ArrowBackIcon />}
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{
          mb: 3,

          borderRadius: 3,

          textTransform: "none",

          fontWeight: 700,

          px: 2.5,

          py: 1,
        }}
      >
        Back
      </Button>

      {/* HEADER */}

      <Box mb={4}>
        <img
          src={provider.image}
          alt={provider.name}
          style={{
            width: "100%",

            height: "320px",

            objectFit: "cover",

            borderRadius: "20px",
          }}
        />

        <Typography
          variant="h3"
          fontWeight={800}
          mt={2}
        >
          {provider.name}
        </Typography>

        <Typography mt={1}>
          {provider.cuisine}
        </Typography>

        <Typography mt={1}>
          ⭐ {provider.rating}
          {" • "}
          {provider.deliveryTime}
        </Typography>
      </Box>

      {/* FILTERS */}

      <Box
        display="flex"
        gap={1}
        flexWrap="wrap"
        mb={4}
      >
        {menu.filters
          .filter(
            (filter) =>
              filter !== "🍽️ All"
          )
          .map((filter) => (
            <Chip
              key={filter}
              label={filter}
              clickable
              color={
                selectedFilter === filter
                  ? "primary"
                  : "default"
              }
              onClick={() =>
                setSelectedFilter(filter)
              }
            />
          ))}
      </Box>

      {/* MENU */}

      <Typography
        variant="h5"
        fontWeight={700}
        mb={2}
      >
        Menu
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="
          repeat(auto-fit,minmax(280px,1fr))
        "
        gap={3}
      >
        {filteredItems.map((food) => {
          const existingItem =
            cartItems.find(
              (item) =>
                item.id === food.id
            );

          return (
            <Box
              key={food.id}
              sx={{
                border:
                  "1px solid #eee",

                borderRadius: 4,

                overflow: "hidden",

                background: "#fff",
              }}
            >
              <img
                src={food.image}
                alt={food.name}
                style={{
                  width: "100%",

                  height: "220px",

                  objectFit: "cover",
                }}
              />

              <Box p={2}>
                <Typography
                  fontWeight={700}
                  fontSize={20}
                >
                  {food.name}
                </Typography>

                <Typography
                  color="text.secondary"
                  mb={1}
                >
                  {food.desc}
                </Typography>

                <Typography fontWeight={700}>
                  ₹ {food.price}
                </Typography>

                {!existingItem ? (
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      borderRadius: 3,
                    }}
                    onClick={() =>
                      addToCart(food)
                    }
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Button
                    color="error"
                    variant="outlined"
                    sx={{
                      mt: 2,
                      borderRadius: 3,
                    }}
                    onClick={() =>
                      handleDelete(food.id)
                    }
                  >
                    Delete
                  </Button>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* CARTBAR */}

      <Cartbar
        cartItems={cartItems}
        setCartItems={
          setCartItems
        }
        storageKey={storageKey}
      />
    </Box>
  );
};

export default MenuPage;