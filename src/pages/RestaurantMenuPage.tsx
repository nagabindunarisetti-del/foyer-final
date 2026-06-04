import {
  Box,
  Typography,
  Chip,
  Button,
  IconButton,
} from "@mui/material";

import {
  useState,
  useEffect,
} from "react";

import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { restaurantMenuData } from "../data/restaurantMenuData";
import { restaurantData } from "../data/restaurantData";

import Cartbar from "../components/Cartbar";

const RestaurantMenuPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const from =
    location.state?.from ||
    "/restaurants";

  const provider =
    restaurantData.find(
      (item) =>
        item.id === Number(id)
    );

  const menu =
    restaurantMenuData[
      Number(id)
    ];

  const [cartItems, setCartItems] =
    useState<any[]>(() => {

      const savedCart =
        localStorage.getItem(
          `restaurant_cart_${id}`
        );

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [favorites, setFavorites] =
    useState<any[]>(() => {

      const saved =
        localStorage.getItem(
          "cloud_favorites"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  const toggleFavorite = (
    food: any
  ) => {

    let updatedFavorites = [];

    const existingFavorite =
      favorites.find(
        (item: any) =>
          item.id === food.id
      );

    if (existingFavorite) {

      updatedFavorites =
        favorites.filter(
          (item: any) =>
            item.id !== food.id
        );

    } else {

      updatedFavorites = [
        ...favorites,
        food,
      ];
    }

    setFavorites(
      updatedFavorites
    );

    localStorage.setItem(
      "cloud_favorites",

      JSON.stringify(
        updatedFavorites
      )
    );
  };

  useEffect(() => {

    const syncCart = () => {

      const updatedCart =
        localStorage.getItem(
          `restaurant_cart_${id}`
        );

      setCartItems(
        updatedCart
          ? JSON.parse(updatedCart)
          : []
      );
    };

    syncCart();

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

  }, [id]);

  const uniqueFilters = menu?.filters
    ? [
        ...new Set(
          menu.filters.filter(
            (filter: string) =>
              filter !== "All"
          )
        ),
      ]
    : [];

  const filteredItems =
    selectedFilter === "All"
      ? menu?.items || []
      : menu?.items.filter(
          (food: any) =>
            food.type ===
            selectedFilter
        ) || [];

  const addToCart = (
    food: any
  ) => {

    const existingItem =
      cartItems.find(
        (item) =>
          item.id === food.id &&
          item.name === food.name
      );

    let updatedCart;

    if (existingItem) {

      updatedCart = cartItems.map(
        (item) =>
          item.id === food.id &&
          item.name === food.name
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

    localStorage.setItem(
      `restaurant_cart_${id}`,
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  const handleDelete = (
    itemId: number,
    itemName: string
  ) => {

    let updatedCart =
      cartItems.map(
        (item) =>
          item.id === itemId &&
          item.name === itemName
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
      );

    updatedCart =
      updatedCart.filter(
        (item) => item.quantity > 0
      );

    setCartItems(updatedCart);

    localStorage.setItem(
      `restaurant_cart_${id}`,
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  const handleBack = () => {
    navigate(from);
  };

  if (!provider || !menu) {

    return (

      <Box p={4}>

        <Typography
          variant="h6"
          gutterBottom
        >
          Data not found
        </Typography>

        <Button
          onClick={handleBack}
          startIcon={
            <ArrowBackIcon />
          }
          variant="contained"
        >
          Go Back
        </Button>

      </Box>
    );
  }

  return (

    <Box
      sx={{
        pt: {
          xs: 3,
          sm: 4,
          md: 10,
        },

        px: {
          xs: 1.5,
          sm: 2,
          md: 4,
        },

        background: "#f5f7fb",

        minHeight: "100vh",

        pb: {
          xs: "70px",
          sm: "70px",
          md: "80px",
        },
      }}
    >

      <Button
        startIcon={
          <ArrowBackIcon />
        }

        variant="outlined"

        onClick={handleBack}

        sx={{
          mb: {
            xs: 2,
            sm: 3,
          },

          borderRadius: "12px",

          textTransform: "none",

          fontWeight: 700,

          px: 2.5,
        }}
      >
        Back
      </Button>

      <Box
        mb={{
          xs: 2,
          sm: 3,
          md: 4,
        }}
      >

        <Box
          sx={{
            position: "relative",

            borderRadius: "30px",

            overflow: "hidden",

            height: {
              xs: "180px",
              sm: "220px",
              md: "280px",
            },
          }}
        >

          <Box
            component="img"

            src={provider.image}

            alt={provider.name}

            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",

              inset: 0,

              background:
                "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
            }}
          />

          <Box
            sx={{
              position: "absolute",

              bottom: {
                xs: 16,
                sm: 20,
                md: 24,
              },

              left: {
                xs: 16,
                sm: 20,
                md: 24,
              },

              color: "#fff",
            }}
          >

            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "28px",
                  md: "36px",
                },

                fontWeight: 800,
              }}
            >
              {provider.name}
            </Typography>

            <Typography
              sx={{
                mt: 0.5,

                fontSize: {
                  xs: "12px",
                  sm: "14px",
                },
              }}
            >
              {provider.cuisine}
            </Typography>

            <Typography
              sx={{
                mt: 0.5,

                fontSize: {
                  xs: "11px",
                  sm: "13px",
                },
              }}
            >
              ⭐ {provider.rating} •{" "}
              {provider.deliveryTime}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        gap={1}
        flexWrap="wrap"
        mb={{
          xs: 2,
          sm: 3,
        }}
      >

        <Chip
          label="All"
          clickable
          size={
            window.innerWidth < 600
              ? "small"
              : "medium"
          }
          color={
            selectedFilter === "All"
              ? "primary"
              : "default"
          }
          onClick={() =>
            setSelectedFilter("All")
          }
        />

        <Chip
          label="Veg"
          clickable
          size={
            window.innerWidth < 600
              ? "small"
              : "medium"
          }
          color={
            selectedFilter === "Veg"
              ? "primary"
              : "default"
          }
          onClick={() =>
            setSelectedFilter("Veg")
          }
        />

        <Chip
          label="Non-Veg"
          clickable
          size={
            window.innerWidth < 600
              ? "small"
              : "medium"
          }
          color={
            selectedFilter ===
            "Non-Veg"
              ? "primary"
              : "default"
          }
          onClick={() =>
            setSelectedFilter(
              "Non-Veg"
            )
          }
        />

        {uniqueFilters.map(
          (filter) => (

            <Chip
              key={filter}

              label={filter}

              clickable

              size={
                window.innerWidth <
                600
                  ? "small"
                  : "medium"
              }

              color={
                selectedFilter ===
                filter
                  ? "primary"
                  : "default"
              }

              onClick={() =>
                setSelectedFilter(
                  filter
                )
              }
            />
          )
        )}
      </Box>

      <Typography
        sx={{
          fontSize: {
            xs: "24px",
            sm: "28px",
            md: "30px",
          },

          fontWeight: 800,

          mb: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          color: "#1e293b",
        }}
      >
        Menu
      </Typography>

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(5, 1fr)",
          },

          gap: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
        }}
      >

        {filteredItems.map(
          (food: any) => {

            const existingItem =
              cartItems.find(
                (item) =>
                  item.id ===
                    food.id &&
                  item.name ===
                    food.name
              );

            return (

              <Box
                key={food.id}

                sx={{
                  borderRadius:
                    "20px",

                  overflow:
                    "hidden",

                  background:
                    "#fff",

                  border:
                    "1px solid #ececec",

                  transition:
                    "0.3s ease",

                  display:
                    "flex",

                  flexDirection:
                    "column",

                  height:
                    "100%",

                  "&:hover": {
                    transform:
                      "translateY(-5px)",
                  },
                }}
              >

                <Box
                  sx={{
                    position:
                      "relative",
                  }}
                >

                  <Box
                    component="img"

                    src={food.image}

                    alt={food.name}

                    sx={{
                      width: "100%",

                      height: {
                        xs: 120,
                        sm: 140,
                        md: 150,
                      },

                      objectFit:
                        "cover",
                    }}
                  />

                  <IconButton
                    onClick={() =>
                      toggleFavorite(
                        food
                      )
                    }

                    sx={{
                      position:
                        "absolute",

                      top: 8,
                      right: 8,

                      background:
                        "#fff",

                      boxShadow:
                        "0 2px 10px rgba(0,0,0,0.08)",

                      width: {
                        xs: 30,
                        sm: 34,
                      },

                      height: {
                        xs: 30,
                        sm: 34,
                      },

                      "&:hover": {
                        background:
                          "#fff",
                      },
                    }}
                  >

                    {favorites.some(
                      (item: any) =>
                        item.id ===
                        food.id
                    ) ? (

                      <FavoriteIcon
                        sx={{
                          color:
                            "#ef4444",

                          fontSize: {
                            xs: 18,
                            sm: 20,
                          },
                        }}
                      />

                    ) : (

                      <FavoriteBorderIcon
                        sx={{
                          color:
                            "#374151",

                          fontSize: {
                            xs: 18,
                            sm: 20,
                          },
                        }}
                      />
                    )}
                  </IconButton>
                </Box>

                <Box
                  p={{
                    xs: 1.5,
                    sm: 2,
                  }}

                  sx={{
                    display:
                      "flex",

                    flexDirection:
                      "column",

                    flex: 1,
                  }}
                >

                  <Box
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "space-between",

                      mb: 1,
                    }}
                  >

                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 0.8,
                      }}
                    >

                      <Box
                        sx={{
                          width: {
                            xs: 12,
                            sm: 14,
                          },

                          height: {
                            xs: 12,
                            sm: 14,
                          },

                          border:
                            food.type ===
                            "Veg"
                              ? "2px solid #16a34a"
                              : "2px solid #dc2626",

                          borderRadius:
                            "3px",

                          display:
                            "flex",

                          alignItems:
                            "center",

                          justifyContent:
                            "center",
                        }}
                      >

                        <Box
                          sx={{
                            width: {
                              xs: 5,
                              sm: 6,
                            },

                            height: {
                              xs: 5,
                              sm: 6,
                            },

                            borderRadius:
                              "50%",

                            background:
                              food.type ===
                              "Veg"
                                ? "#16a34a"
                                : "#dc2626",
                          }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                          },

                          fontWeight: 700,

                          color:
                            food.type ===
                            "Veg"
                              ? "#16a34a"
                              : "#dc2626",
                        }}
                      >
                        {food.type}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: 700,

                        fontSize: {
                          xs: "11px",
                          sm: "13px",
                        },

                        color:
                          "#f59e0b",
                      }}
                    >
                      ★ {food.rating}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,

                      fontSize: {
                        xs: "13px",
                        sm: "15px",
                      },

                      color:
                        "#1e293b",

                      mb: 0.5,
                    }}
                  >
                    {food.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: {
                        xs: "10px",
                        sm: "12px",
                      },

                      color:
                        "#4b5563",

                      mb: 1,

                      display:
                        "-webkit-box",

                      WebkitLineClamp: 2,

                      WebkitBoxOrient:
                        "vertical",

                      overflow:
                        "hidden",
                    }}
                  >
                    {food.desc ||
                      food.description}
                  </Typography>

                  {food.preparationTime && (

                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 0.5,

                        mb: 1,
                      }}
                    >

                      <AccessTimeIcon
                        sx={{
                          fontSize: 12,

                          color:
                            "#6b7280",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize:
                            "10px",

                          color:
                            "#6b7280",
                        }}
                      >
                        Prep:{" "}
                        {
                          food.preparationTime
                        }
                      </Typography>
                    </Box>
                  )}

                  <Box
                    sx={{
                      display:
                        "flex",

                      justifyContent:
                        "space-between",

                      alignItems:
                        "center",

                      mt: "auto",
                    }}
                  >

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "15px",
                          sm: "17px",
                        },

                        fontWeight: 800,

                        color:
                          "#0057b8",
                      }}
                    >
                      ₹{food.price}
                    </Typography>

                    {!existingItem ? (

                      <Button
                        variant="contained"

                        onClick={() =>
                          addToCart(
                            food
                          )
                        }

                        sx={{
                          minWidth:
                            "55px",

                          height:
                            "28px",

                          borderRadius:
                            "8px",

                          background:
                            "#1565c0",

                          textTransform:
                            "none",

                          fontWeight: 700,

                          fontSize: {
                            xs: "11px",
                            sm: "12px",
                          },
                        }}
                      >
                        Add
                      </Button>

                    ) : (

                      <Box
                        sx={{
                          display:
                            "flex",

                          alignItems:
                            "center",

                          justifyContent:
                            "space-between",

                          width:
                            "75px",

                          height:
                            "28px",

                          borderRadius:
                            "8px",

                          background:
                            "#1565c0",

                          px: 0.5,
                        }}
                      >

                        <Button
                          onClick={() =>
                            handleDelete(
                              food.id,
                              food.name
                            )
                          }

                          sx={{
                            minWidth:
                              "22px",

                            width:
                              "22px",

                            height:
                              "22px",

                            color:
                              "#fff",

                            fontSize: {
                              xs: "14px",
                              sm: "16px",
                            },

                            p: 0,

                            borderRadius:
                              "6px",
                          }}
                        >
                          -
                        </Button>

                        <Typography
                          sx={{
                            color:
                              "#fff",

                            fontWeight: 700,

                            fontSize: {
                              xs: "14px",
                              sm: "16px",
                            },
                          }}
                        >
                          {
                            existingItem.quantity
                          }
                        </Typography>

                        <Button
                          onClick={() =>
                            addToCart(
                              food
                            )
                          }

                          sx={{
                            minWidth:
                              "22px",

                            width:
                              "22px",

                            height:
                              "22px",

                            color:
                              "#fff",

                            fontSize: {
                              xs: "14px",
                              sm: "16px",
                            },

                            p: 0,

                            borderRadius:
                              "6px",
                          }}
                        >
                          +
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            );
          }
        )}
      </Box>

      <Cartbar
        cartItems={cartItems}
        setCartItems={
          setCartItems
        }
        storageKey={`restaurant_cart_${id}`}
      />
    </Box>
  );
};

export default RestaurantMenuPage;