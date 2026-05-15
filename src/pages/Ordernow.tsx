import {
  useState,
  useEffect
} from "react";

import {
  Box,
  Typography,
  Tabs,
  Tab,
  useTheme,
} from "@mui/material";

import CardComponent from "../components/Card";
import CloudKitchenCard from "../components/CloudKitchenCard";
import Cartbar from "../components/Cartbar";

import { housewives } from "../data/housewives";
import { kitchenData } from "../data/kitchenData";
import { restaurantData } from "../data/restaurantData";

function Ordernow() {

  const theme = useTheme();

  const [section, setSection] = useState<
    "homeChef" |
    "cloudKitchen" |
    "restaurant"
  >("homeChef");
  const [cartItems, setCartItems] =
    useState<any[]>(() => {

      const saved =
        localStorage.getItem(
          "cartItems"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });
  useEffect(() => {

    const syncCart = () => {

      const updatedCart =
        localStorage.getItem(
          "cartItems"
        );

      setCartItems(
        updatedCart
          ? JSON.parse(updatedCart)
          : []
      );
    };
    window.addEventListener(
      "storage",
      syncCart
    );
    window.addEventListener(
      "cartUpdated",
      syncCart as EventListener
    );

    syncCart();

    return () => {

      window.removeEventListener(
        "storage",
        syncCart
      );

      window.removeEventListener(
        "cartUpdated",
        syncCart as EventListener
      );
    };

  }, []);
  const addToCart = (item: any) => {

    let updatedCart = [...cartItems];
    if (section === "homeChef") {
      const existingItem =
        updatedCart.find(
          (cartItem) =>
            cartItem.id === item.id
        );
      if (existingItem) {

        updatedCart = updatedCart.map(
          (cartItem) =>

            cartItem.id === item.id

              ? {
                  ...cartItem,

                  quantity:
                    cartItem.quantity + 1,
                }

              : cartItem
        );
      }
      else {

        updatedCart = [
          {
            ...item,

            quantity: 1,
          },
        ];
      }
    }
    else {

      const existingItem =
        updatedCart.find(
          (cartItem) =>

            cartItem.id === item.id &&

            cartItem.type === item.type
        );
      if (existingItem) {

        updatedCart = updatedCart.map(
          (cartItem) =>

            cartItem.id === item.id &&

            cartItem.type === item.type

              ? {
                  ...cartItem,

                  quantity:
                    cartItem.quantity + 1,
                }

              : cartItem
        );
      }
      else {

        updatedCart = [
          ...updatedCart,

          {
            ...item,

            quantity: 1,
          },
        ];
      }
    }

    setCartItems(updatedCart);

    localStorage.setItem(
      "cartItems",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };
  const displayData =
    section === "homeChef"
      ? housewives
      : section === "cloudKitchen"
      ? kitchenData
      : restaurantData;
  const tabStyles = (
    value: string
  ) => ({
    minHeight: "42px",

    minWidth:
      value === "cloudKitchen"
        ? "150px"
        : "130px",

    px: 2.5,

    mr: 1,

    mb: 1,

    borderRadius: "14px",

    textTransform: "none",

    fontWeight: 700,

    fontSize: {
      xs: "12px",
      sm: "13px",
    },

    backgroundColor: "#fff",

    color: "#666",

    border: "none !important",

    outline: "none !important",

    boxShadow: "none !important",

    "&.Mui-selected": {
      backgroundColor:
        theme.palette.primary.main,

      color: "#fff",

      boxShadow:
        `0 6px 18px ${theme.palette.primary.main}35`,
    },

    "&:hover": {
      backgroundColor:
        value === section
          ? theme.palette.primary.main
          : "#fafafa",

      color:
        value === section
          ? "#fff"
          : "#666",
    },

    "& .MuiTouchRipple-root": {
      display: "none",
    },
  });

  return (

    <Box
      sx={{
        width: "100%",

        minHeight: "100vh",

        backgroundColor:
          theme.palette.background.default,

        px: {
          xs: 2,
          md: 6,
        },

        py: {
          xs: 2,
          md: 3,
        },

        pb: 12,

        overflowX: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "26px",
            md: "38px",
          },

          fontWeight: 800,

          mb: 3,
        }}
      >
        Order Fresh Food
      </Typography>

      <Box
        sx={{
          mb: 4,

          width: "100%",
        }}
      >

        <Tabs
          value={section}

          onChange={(_, v) =>
            setSection(v)
          }

          variant="standard"

          sx={{
            minHeight: "44px",

            "& .MuiTabs-indicator": {
              display: "none",
            },

            "& .MuiTabs-flexContainer":
              {
                flexWrap: "wrap",

                alignItems: "center",
              },

            "& .MuiTab-root": {
              outline: "none",

              border: "none",
            },
          }}
        >

          <Tab
            value="homeChef"
            label="Home Chefs"
            sx={tabStyles("homeChef")}
          />

          <Tab
            value="cloudKitchen"
            label="Cloud Kitchens"
            sx={tabStyles(
              "cloudKitchen"
            )}
          />

          <Tab
            value="restaurant"
            label="Restaurants"
            sx={tabStyles(
              "restaurant"
            )}
          />

        </Tabs>

      </Box>

      <Typography
        sx={{
          fontSize: {
            xs: "20px",
            md: "28px",
          },

          fontWeight: 700,

          mb: 3,
        }}
      >

        {section === "homeChef" &&
          "Home Chefs"}

        {section === "cloudKitchen" &&
          "Cloud Kitchens"}

        {section === "restaurant" &&
          "Restaurants"}

      </Typography>

      <Box
        sx={{
          display: "grid",

          width: "100%",

          gridTemplateColumns:
            section === "homeChef"
              ? {
                  xs: "repeat(2, 1fr)",

                  sm: "repeat(3, 1fr)",

                  md: "repeat(5, 1fr)",
                }
              : {
                  xs: "repeat(1, 1fr)",

                  sm: "repeat(2, 1fr)",

                  md: "repeat(3, 1fr)",
                },

          gap: {
            xs: 1.5,
            sm: 2,
            md: 3,
          },

          alignItems: "stretch",

          overflow: "hidden",
        }}
      >

        {displayData.map((item) => (

          <Box
            key={`${item.type}-${item.id}`}

            sx={{
              width: "100%",

              minWidth: 0,

              overflow: "hidden",

              display: "flex",
            }}
          >

            {section ===
            "homeChef" ? (

              <CardComponent
                item={item}
                onAdd={addToCart}
              />

            ) : (

              <CloudKitchenCard
                item={item}
              />

            )}

          </Box>

        ))}

      </Box>


      <Cartbar
        cartItems={cartItems}
        setCartItems={
          setCartItems
        }
      />

    </Box>
  );
}

export default Ordernow;