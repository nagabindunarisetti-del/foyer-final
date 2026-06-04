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

import { useNavigate } from "react-router-dom";

interface Item {
  id: number;
  type: "cloudKitchen" | "restaurant" | "homeChef";
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

const CloudKitchenCard = ({ item }: Props) => {

  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {

    if (item.type === "restaurant") {
      console.log(
        "Navigating to restaurant:",
        item.id
      );
      navigate(
        `/restaurant-menu/${item.id}`,
        {
          state: {
            from: "/restaurants",
          },
        }
      );

      return;
    }

    if (item.type === "cloudKitchen") {

      console.log(
        "Navigating to cloud kitchen:",
        item.id
      );

      navigate(
        `/cloud-menu/${item.id}`,
        {
          state: {
            from: "/cloud-kitchens",
          },
        }
      );

      return;
    }
    if (item.type === "homeChef") {

      console.log(
        "Navigating to home chef:",
        item.id
      );

      navigate(
        `/home-chef/${item.id}`,
        {
          state: {
            from: "/home-chefs",
          },
        }
      );

      return;
    }
  };

  return (

    <Card
      onClick={handleClick}

      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor:
          theme.palette.background.paper,
        boxShadow:
          "0 8px 24px rgba(0,0,0,0.08)",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform:
            "translateY(-4px)",
          boxShadow:
            `0 18px 40px ${theme.palette.primary.main}25`,
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 220,
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt={item.name}

          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

      </Box>
      <CardContent
        sx={{
          p: 3,

          flexGrow: 1,

          display: "flex",
          flexDirection: "column",
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
              theme.palette.secondary.main,
            fontSize: {
              xs: "12px",
              md: "13px",
            },
            lineHeight: 1.3,
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          “{item.tagline}”
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
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
                  theme.palette.secondary.main,
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
              {item.deliveryTime}
            </Typography>

          </Box>

        </Box>

      </CardContent>

    </Card>
  );
};

export default CloudKitchenCard;