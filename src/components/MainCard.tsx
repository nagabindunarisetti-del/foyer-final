import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  useTheme,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import {
  useNavigate,
} from "react-router-dom";

import {
  useState,
  useEffect,
} from "react";

interface Item {
  id: number;
  type:
  | "cloudKitchen"
  | "restaurant"
  | "homeChef";
  name: string;
  image: string;
  cuisine: string;
  tagline: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: number;
}

interface Props {
  item: Item;
}

const MainCard = ({
  item,
}: Props) => {
  const theme = useTheme();
  const navigate =
    useNavigate();

 const [favorites, setFavorites] =
  useState<any[]>([]);

useEffect(() => {
  const loadFavorites = () => {
    const saved =
      localStorage.getItem(
        "cloud_favorites"
      );

    setFavorites(
      saved
        ? JSON.parse(saved)
        : []
    );
  };

  loadFavorites();

  window.addEventListener(
    "favoritesUpdated",
    loadFavorites
  );

  return () => {
    window.removeEventListener(
      "favoritesUpdated",
      loadFavorites
    );
  };
}, []);

  const toggleFavorite = (
  e: React.MouseEvent,
  item: any
) => {
  e.stopPropagation();

  const currentFavorites =
    JSON.parse(
      localStorage.getItem(
        "cloud_favorites"
      ) || "[]"
    );

  const exists =
    currentFavorites.some(
      (fav: any) =>
        fav.id === item.id &&
        fav.type === item.type
    );

  let updatedFavorites;

  if (exists) {
    updatedFavorites =
      currentFavorites.filter(
        (fav: any) =>
          !(
            fav.id === item.id &&
            fav.type === item.type
          )
      );
  } else {
    updatedFavorites = [
      ...currentFavorites,
      item,
    ];
  }

  localStorage.setItem(
    "cloud_favorites",
    JSON.stringify(
      updatedFavorites
    )
  );

  setFavorites(
    updatedFavorites
  );

  window.dispatchEvent(
    new Event(
      "favoritesUpdated"
    )
  );
};

  const handleClick = () => {
    if (
      item.type ===
      "restaurant"
    ) {
      navigate(
        `/restaurant-menu/${item.id}`,
        {
          state: {
            from:
              "/restaurants",
          },
        }
      );
      return;
    }

    if (
      item.type ===
      "cloudKitchen"
    ) {
      navigate(
        `/cloud-menu/${item.id}`,
        {
          state: {
            from:
              "/cloud-kitchens",
          },
        }
      );
      return;
    }

    if (
      item.type ===
      "homeChef"
    ) {
      navigate(
        `/home-chef/${item.id}`,
        {
          state: {
            from:
              "/home-chefs",
          },
        }
      );
      return;
    }
  };

  return (
    <Card
      onClick={
        handleClick
      }
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection:
          "column",
        borderRadius: 3,
        overflow:
          "hidden",
        cursor:
          "pointer",
        backgroundColor:
          theme.palette
            .background
            .paper,
        boxShadow: "none",

        border: "1px solid #ececec",

        transition: "0.3s ease",

        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Box
        sx={{
          position:
            "relative",
          width: "100%",
          height: 220,
          overflow:
            "hidden",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.name}
          sx={{
            width: "100%",
            height:
              "100%",
            objectFit:
              "cover",
          }}
        />

        <IconButton
          onClick={(e) =>
            toggleFavorite(
              e,
              item
            )
          }
          sx={{
            position:
              "absolute",
            top: 10,
            right: 10,
            background:
              "#fff",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.08)",

            "&:hover": {
              background:
                "#fff",
            },
          }}
        >
          {favorites.some(
            (
              fav: any
            ) =>
              fav.id ===
              item.id &&
              fav.type ===
              item.type
          ) ? (
            <FavoriteIcon
              sx={{
                color:
                  "#ef4444",
              }}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{
                color:
                  "#374151",
              }}
            />
          )}
        </IconButton>
      </Box>

      <CardContent
        sx={{
          p: 3,
          flexGrow: 1,
          display: "flex",
          flexDirection:
            "column",
        }}
      >
        <Typography
          fontSize={{
            xs: 10,
            md: 18,
          }}
          fontWeight={800}
          gutterBottom
        >
          {item.name}
        </Typography>

        <Typography
          fontSize={{
            xs: 14,
            md: 16,
          }}
          color="text.secondary"
          gutterBottom
        >
          {item.cuisine}
        </Typography>

        <Typography
          fontStyle="italic"
          sx={{
            color:
              theme.palette
                .secondary
                .main,
            fontSize: {
              xs: "12px",
              md: "13px",
            },
            lineHeight: 1.3,
            mb: 1,
            display:
              "-webkit-box",
            WebkitLineClamp:
              2,
            WebkitBoxOrient:
              "vertical",
            overflow:
              "hidden",
          }}
        >
          “{item.tagline}”
        </Typography>

        <Divider
          sx={{ mb: 2 }}
        />

        <Box
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={0.5}
          >
            <StarIcon
              sx={{
                fontSize: 18,
                color:
                  theme
                    .palette
                    .secondary
                    .main,
              }}
            />

            <Typography fontWeight={700}>
              {item.rating}
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={0.5}
          >
            <AccessTimeIcon
              sx={{
                fontSize: 18,
              }}
            />

            <Typography>
              {
                item.deliveryTime
              }
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainCard;