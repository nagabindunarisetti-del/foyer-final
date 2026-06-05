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
  useLocation,
} from "react-router-dom";


import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { homeChefData } from "../data/homeChefData";
import { homeChefMenuData } from "../data/homeChefMenuData";

import Cartbar from "../components/Cartbar";

const HomeChefMenuPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const from =
    location.state?.from ||
    "/home-chefs";

  const chefId = Number(id);

  const chef = homeChefData.find(
    (c) => c.id === chefId
  );

  const menu =
    homeChefMenuData[
      chefId as keyof typeof homeChefMenuData
    ];

  const [cartItems, setCartItems] =
    useState<any[]>(() => {

      const savedCart =
        localStorage.getItem(
          `homechef_cart_${chefId}`
        );

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  useEffect(() => {

    const syncCart = () => {

      const updatedCart =
        localStorage.getItem(
          `homechef_cart_${chefId}`
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

  }, [chefId]);

  if (!chef || !menu) {

    return (

      <Box p={4}>

        <Typography
          variant="h6"
          gutterBottom
        >
          Data not found
        </Typography>

        <Button
          variant="contained"
          onClick={() =>
            navigate(from)
          }
        >
          Go Back
        </Button>

      </Box>
    );
  }

  const filteredItems =
    selectedFilter === "All"
      ? menu.items
      : menu.items.filter(
          (item: any) =>
            item.type ===
            selectedFilter
        );


  const addToCart = (
    item: any
  ) => {

    const existingItem =
      cartItems.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.name === item.name
      );

    let updatedCart;

    if (existingItem) {

      updatedCart = cartItems.map(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }
            : cartItem
      );

    } else {

      updatedCart = [
        ...cartItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    }

    setCartItems(updatedCart);

    localStorage.setItem(
      `homechef_cart_${chefId}`,
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
      `homechef_cart_${chefId}`,
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  const handleBack = () => {
    navigate(from);
  };

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

            src={chef.image}

            alt={chef.name}

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
              {chef.name}
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
              {chef.cuisine}
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
              ⭐ {chef.rating} •{" "}
              {chef.deliveryTime}
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
          (item: any) => {

            const existingItem =
              cartItems.find(
                (cartItem) =>
                  cartItem.id ===
                    item.id &&
                  cartItem.name ===
                    item.name
              );

            return (

              <Box
                key={item.id}

                sx={{
                  borderRadius: "20px",

                  overflow: "hidden",

                  background: "#fff",

                  border:
                    "1px solid #ececec",

                  transition:
                    "0.3s ease",

                  display: "flex",

                  flexDirection:
                    "column",

                  height: "100%",

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

                    src={item.image}

                    alt={item.name}

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

                </Box>

                <Box
                  p={{
                    xs: 1.5,
                    sm: 2,
                  }}

                  sx={{
                    display: "flex",

                    flexDirection:
                      "column",

                    flex: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "space-between",

                      mb: 1,
                    }}
                  >

                    <Box
                      sx={{
                        display: "flex",

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
                            item.type ===
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
                              item.type ===
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
                            item.type ===
                            "Veg"
                              ? "#16a34a"
                              : "#dc2626",
                        }}
                      >
                        {item.type}
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
                      ★ {item.rating}
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
                    {item.name}
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
                    {item.desc}
                  </Typography>

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
                      ₹{item.price}
                    </Typography>

                    {!existingItem ? (

                      <Button
                        variant="contained"

                        onClick={() =>
                          addToCart(
                            item
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

                          width: "68px",

                          height:
                            "24px",

                          borderRadius:
                            "6px",

                          background:
                            "#1565c0",

                          px: 0.3,
                        }}
                      >

                        <Button
                          onClick={() =>
                            handleDelete(
                              item.id,
                              item.name
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
                              xs: "12px",
                              sm: "13px",
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
                              item
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
        storageKey={`homechef_cart_${chefId}`}
      />
    </Box>
  );
};

export default HomeChefMenuPage;