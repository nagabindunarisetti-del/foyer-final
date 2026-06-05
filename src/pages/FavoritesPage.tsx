import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const navigate = useNavigate();

  const [favorites, setFavorites] =
    useState<any[]>(
      JSON.parse(
        localStorage.getItem(
          "cloud_favorites"
        ) || "[]"
      )
    );

  const removeFavorite = (
    food: any
  ) => {
    const updatedFavorites =
      favorites.filter(
        (item) =>
          !(
            item.id === food.id &&
            item.type === food.type
          )
      );

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

  const handleCardClick = (
    food: any
  ) => {
    if (
      food.type ===
      "restaurant"
    ) {
      navigate(
        `/restaurant-menu/${food.id}`,
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
      food.type ===
      "cloudKitchen"
    ) {
      navigate(
        `/cloud-menu/${food.id}`,
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
      food.type ===
      "homeChef"
    ) {
      navigate(
        `/home-chef/${food.id}`,
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
    <Box
      sx={{
        p: {
          xs: 2,
          sm: 3,
          md: 10,
        },
        background:
          "#f5f7fb",
        minHeight:
          "100vh",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "26px",
            sm: "30px",
            md: "34px",
          },
          fontWeight: 800,
          mb: 4,
          color: "#111827",
        }}
      >
        Favorites
      </Typography>

      {favorites.length ===
        0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent:
              "center",
            alignItems:
              "center",
            minHeight:
              "60vh",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                sm: "18px",
              },
              color:
                "#6b7280",
              fontWeight: 500,
            }}
          >
            No favorite items
            added
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns:
            {
              xs: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            },

            gap: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          {favorites.map(
            (food) => (
              <Box
                key={`${food.id}-${food.type}`}
                onClick={() =>
                  handleCardClick(
                    food
                  )
                }
                sx={{
                  background:
                    "#fff",

                  borderRadius:
                    "24px",

                  overflow:
                    "hidden",

                  cursor:
                    "pointer",

                  border:
                    "1px solid #ececec",

                  transition:
                    "0.3s ease",

                  "&:hover":
                  {
                    transform:
                      "translateY(-5px)",
                  },
                }}
              >
                <Box
                  sx={{
                    position:
                      "relative",
                    height: {
                      xs: 150,
                      sm: 180,
                      md: 200,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={
                      food.image
                    }
                    alt={
                      food.name
                    }
                    sx={{
                      width:
                        "100%",
                      height:
                        "100%",
                      objectFit:
                        "cover",
                    }}
                  />

                  <IconButton
                    onClick={(
                      e
                    ) => {
                      e.stopPropagation();

                      removeFavorite(
                        food
                      );
                    }}
                    sx={{
                      position:
                        "absolute",

                      top: 8,
                      right: 8,

                      width: 40,
                      height: 40,

                      background:
                        "#fff",

                      boxShadow:
                        "0 2px 12px rgba(0,0,0,0.1)",

                      "&:hover":
                      {
                        background:
                          "#fff",
                      },
                    }}
                  >
                    <FavoriteIcon
                      sx={{
                        color:
                          "#ef4444",
                      }}
                    />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                      {
                        xs: "20px",
                        md: "22px",
                      },

                      fontWeight: 800,

                      color:
                        "#111827",

                      mb: 1,
                    }}
                  >
                    {food.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize:
                      {
                        xs: "15px",
                        md: "16px",
                      },

                      color:
                        "#6b7280",

                      mb: 1,
                    }}
                  >
                    {food.cuisine}
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#10b981",

                      fontSize:
                      {
                        xs: "13px",
                        md: "14px",
                      },

                      fontStyle:
                        "italic",

                      mb: 2,
                    }}
                  >
                    "
                    {food.tagline}
                    "
                  </Typography>

                  <Box
                    sx={{
                      borderTop:
                        "1px solid #e5e7eb",

                      pt: 2,

                      display:
                        "flex",

                      justifyContent:
                        "space-between",

                      alignItems:
                        "center",
                    }}
                  >
                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 0.5,
                      }}
                    >
                      <StarIcon
                        sx={{
                          color:
                            "#10b981",
                        }}
                      />

                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize:
                            "18px",
                        }}
                      >
                        {
                          food.rating
                        }
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: 0.5,
                      }}
                    >
                      <AccessTimeIcon />

                      <Typography>
                        {
                          food.deliveryTime
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default FavoritesPage;