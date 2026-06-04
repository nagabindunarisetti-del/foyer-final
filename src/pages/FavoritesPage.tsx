import {
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

const FavoritesPage = () => {

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
            item.name === food.name
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

  return (

    <Box
      sx={{
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },

        background: "#f5f7fb",

        minHeight: "100vh",
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
      {favorites.length === 0 ? (

        <Box
          sx={{
            display: "flex",

            justifyContent:
              "center",

            alignItems:
              "center",

            minHeight: "60vh",
          }}
        >

          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                sm: "18px",
              },

              color: "#6b7280",

              fontWeight: 500,
            }}
          >
            No favorite items added
          </Typography>

        </Box>

      ) : (

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "repeat(2,1fr)",
              sm: "repeat(3,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(5,1fr)",
            },

            gap: {
              xs: 1.5,
              sm: 2,
              md: 2.5,
            },
          }}
        >

          {favorites.map(
            (food) => (

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
                  }}
                >

                  <Box
                    component="img"

                    src={food.image}

                    alt={food.name}

                    sx={{
                      width:
                        "100%",

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
                      removeFavorite(
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

                        fontSize:
                          {
                            xs: 18,
                            sm: 20,
                          },
                      }}
                    />
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
                          fontSize:
                            {
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

                      WebkitLineClamp:
                        2,

                      WebkitBoxOrient:
                        "vertical",

                      overflow:
                        "hidden",
                    }}
                  >
                    {food.desc ||
                      food.description}
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
                      ₹{food.price}
                    </Typography>

                    <Button
                      variant="contained"

                      startIcon={
                        <DeleteIcon />
                      }

                      onClick={() =>
                        removeFavorite(
                          food
                        )
                      }

                      sx={{
                        minWidth:
                          "90px",

                        height:
                          "30px",

                        borderRadius:
                          "10px",

                        background:
                          "#ef4444",

                        textTransform:
                          "none",

                        fontWeight: 700,

                        fontSize: {
                          xs: "11px",
                          sm: "12px",
                        },

                        "&:hover":
                          {
                            background:
                              "#dc2626",
                          },
                      }}
                    >
                      Remove
                    </Button>
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