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
  Button,
} from "@mui/material";

import {
  useNavigate,
  useLocation
} from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import MainCard from "../components/MainCard";
import Cartbar from "../components/Cartbar";

import { kitchenData } from "../data/kitchenData";
import { restaurantData } from "../data/restaurantData";
import { homeChefData } from "../data/homeChefData";

function HomeChefsSection() {
  return (
    <>
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
        Home Chefs
      </Typography>

      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat( 3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
          alignItems: "stretch",
        }}
      >
        {homeChefData.map((item) => (
          <Box
            key={`${item.type}-${item.id}`}
            sx={{
              width: "100%",
              minWidth: 0,
              overflow: "hidden",
              display: "flex",
            }}
          >
            <MainCard item={item} />
          </Box>
        ))}
      </Box>
    </>
  );
}

function CloudKitchenSection() {

  const cloudKitchens = kitchenData.filter(
    (item) => item.type === "cloudKitchen"
  );

  return (
    <>
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
        Cloud Kitchens
      </Typography>

      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
          alignItems: "stretch",
        }}
      >
        {cloudKitchens.map((item) => (
          <Box
            key={`${item.type}-${item.id}`}
            sx={{
              width: "100%",
              minWidth: 0,
              overflow: "hidden",
              display: "flex",
            }}
          >
            <MainCard item={item} />
          </Box>
        ))}
      </Box>
    </>
  );
}

function RestaurantSection() {
  return (
    <>
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
        Restaurants
      </Typography>

      <Box
        sx={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
          },
          alignItems: "stretch",
        }}
      >
        {restaurantData.map((item) => (
          <Box
            key={`${item.type}-${item.id}`}
            sx={{
              width: "100%",
              minWidth: 0,
              overflow: "hidden",
              display: "flex",
            }}
          >
            <MainCard item={item} />
          </Box>
        ))}
      </Box>
    </>
  );
}
function Ordernow() {

  const theme = useTheme();

  const navigate = useNavigate();

  const location = useLocation();

  const getInitialTab = () => {

    const path = location.pathname;

    if (
      path.includes("/home-chefs") ||
      path.includes("/homechef")
    ) {
      return "homeChef";
    }

    if (
      path.includes("/cloud-kitchens") ||
      path.includes("/cloudkitchen")
    ) {
      return "cloudKitchen";
    }

    if (
      path.includes("/restaurants") ||
      path.includes("/restaurant")
    ) {
      return "restaurant";
    }

    return "homeChef";
  };

  const [section, setSection] = useState<
    "homeChef" |
    "cloudKitchen" |
    "restaurant"
  >(getInitialTab());

  const [cartItems, setCartItems] = useState<any[]>(() => {

    const saved =
      localStorage.getItem("cartItems");

    return saved
      ? JSON.parse(saved)
      : [];
  });
  useEffect(() => {
    setSection(getInitialTab());
  }, [location.pathname]);

  useEffect(() => {

    if (section) {

      setCartItems([]);

      localStorage.removeItem("cartItems");

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      window.dispatchEvent(
        new Event("foodAdded")
      );
    }

  }, [section]);
  useEffect(() => {

    const syncCart = () => {

      const updatedCart =
        localStorage.getItem("cartItems");

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

  const handleTabChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {

    setSection(newValue as any);

    if (newValue === "homeChef") {
      navigate("/home-chefs");
    }

    else if (newValue === "cloudKitchen") {
      navigate("/cloud-kitchens");
    }

    else if (newValue === "restaurant") {
      navigate("/restaurants");
    }
  };

  const tabStyles = (value: string) => ({
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
        mt: 6,

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
      {section === "homeChef" && (
        <Box
          sx={{
            textAlign: "center",

            maxWidth: "900px",

            mx: "auto",

            mb: {
              xs: 3,
              md: 5,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "24px",
                sm: "32px",
                md: "38px",
              },

              fontWeight: 800,

              lineHeight: 1.2,

              color: "#1e293b",

              mb: 2,
            }}
          >
            Real food from real kitchens,
            made with love
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "16px",
              },

              lineHeight: 1.8,

              color: "#606771",

              px: {
                xs: 1,
                sm: 2,
              },
            }}
          >
            Foyer is the home of
            home-cooks — bringing
            wholesome, hygienic,
            mom-style meals to your
            door. Discover authentic
            flavors prepared in clean
            home kitchens — perfect
            for daily meals, weekly
            tiffins, or special
            occasions.
          </Typography>
        </Box>
      )}
      <Typography
        sx={{
          textAlign: "center",
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
          onChange={handleTabChange}
          variant="standard"

          sx={{
            minHeight: "44px",

            "& .MuiTabs-indicator": {
              display: "none",
            },

            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
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
            sx={tabStyles("cloudKitchen")}
          />

          <Tab
            value="restaurant"
            label="Restaurants"
            sx={tabStyles("restaurant")}
          />

        </Tabs>

      </Box>

      {section === "homeChef" && (
        <HomeChefsSection />
      )}

      {section === "cloudKitchen" && (
        <CloudKitchenSection />
      )}

      {section === "restaurant" && (
        <RestaurantSection />
      )}
      <Cartbar
        cartItems={cartItems}
        setCartItems={setCartItems}
      />

    </Box>
  );
}

export default Ordernow;