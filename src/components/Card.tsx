

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  useTheme
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";

import { useNavigate } from "react-router-dom";

function FoodCard({
  item,
  onAdd
}) {

  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Card
      onClick={() =>
        navigate(`/menu/${item.id}`, {
          state: { item },
        })
      }
      sx={{
        width: 208,

        borderRadius: 3,

        overflow: "hidden",

        transition: "0.3s",

        cursor: "pointer",

        background:
          theme.palette.background.paper,

        border:
          `1px solid ${theme.palette.grey[200]}`,

        boxShadow:
          "0 4px 12px rgba(0,0,0,0.06)",

        "&:hover": {
          transform: "translateY(-4px)",

          boxShadow:
            `0 10px 24px ${theme.palette.primary.main}20`,

          border:
            `1px solid ${theme.palette.primary.light}`,
        }
      }}
    >

      

      <Box
        sx={{
          position: "relative",
        }}
      >

        <CardMedia
          component="img"
          height="145"
          image={item.image}
          alt={item.name}
        />

        

        <Box
          sx={{
            position: "absolute",

            bottom: 10,
            right: 10,

            background:
              theme.palette.background.paper,

            px: 1,
            py: 0.3,

            borderRadius: 2,

            display: "flex",

            alignItems: "center",

            gap: 0.4,

            boxShadow:
              "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >

          <StarIcon
            sx={{
              fontSize: 13,

              color:
                theme.palette.primary.main,
            }}
          />

          <Typography
            fontSize={11}
            fontWeight={600}
            color={
              theme.palette.grey[800]
            }
          >
            {item.rating}
          </Typography>

        </Box>
      </Box>

      

      <CardContent
        sx={{
          p: 1.2,

          "&:last-child": {
            pb: 1.2,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",

            fontWeight: 700,

            color:
              theme.palette.grey[900],

            lineHeight: 1.1,

            mb: 0.2,
          }}
        >
          {item.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "10px",

            color:
              theme.palette.grey[600],

            lineHeight: 1.1,

            mb: 0.3,
          }}
        >
          {item.cookName}
        </Typography>

          <Typography
          sx={{
            fontSize: "10px",

            color:
              theme.palette.grey[700],

            display: "-webkit-box",

            WebkitLineClamp: 1,

            WebkitBoxOrient:
              "vertical",

            overflow: "hidden",

            lineHeight: 1.2,
          }}
        >
          {item.description}
        </Typography>
        <Box
          mt={0.7}
          sx={{
            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",

              fontWeight: 700,

              color:
                theme.palette.primary.dark,

              lineHeight: 1,
            }}
          >
            ₹{item.price}
          </Typography>
          <Button
            size="small"
            variant="contained"

            onClick={(e) => {
              e.stopPropagation();
              onAdd?.(item);
            }}

            sx={{
              fontSize: "10px",

              px: 1.4,

              py: 0.2,

              minHeight: "26px",

              backgroundColor:
                theme.palette.primary.main,

              color:
                theme.palette.primary
                  .contrastText,

              borderRadius: 2,

              boxShadow: "none",

              textTransform: "none",

              "&:hover": {
                backgroundColor:
                  theme.palette.primary.dark,

                boxShadow:
                  `0 4px 10px ${theme.palette.primary.main}40`,
              },
            }}
          >
            Add
          </Button>

        </Box>
      </CardContent>
    </Card>
  );
}

export default FoodCard;