import {
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Cartbar({
  cartItems,
  storageKey,
}: {
  cartItems: any[];
  storageKey: string;
}) {
  const navigate = useNavigate();
  const theme = useTheme();

  const totalItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 0),
    0
  );

  if (totalItems === 0) {
    return null;
  }

  return (
    <Box
      onClick={() =>
        navigate("/cart", {
          state: {
            cartItems,
            storageKey, // pass storage key to Cart page
          },
        })
      }
      sx={{
        position: "fixed",
        bottom: 18,
        left: {
          xs: 12,
          sm: "50%",
        },
        transform: {
          xs: "none",
          sm: "translateX(-50%)",
        },
        right: {
          xs: 12,
          sm: "auto",
        },
        width: {
          xs: "calc(100% - 24px)",
          sm: "420px",
        },
        background:
          theme.palette.primary.main,
        color:
          theme.palette.primary.contrastText,
        borderRadius: "18px",
        px: 2,
        py: 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 999,
        cursor: "pointer",
        boxShadow: `0 10px 30px ${theme.palette.primary.main}40`,
        transition: "0.3s",
        "&:hover": {
          transform: {
            xs: "none",
            sm: "translateX(-50%) translateY(-3px)",
          },
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={1.5}
      >
        <Box
          sx={{
            width: 42,
            height: 42,
            borderRadius: "12px",
            background:
              "rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShoppingCartIcon />
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: "15px",
              lineHeight: 1,
            }}
          >
            {totalItems}{" "}
            {totalItems === 1
              ? "Item"
              : "Items"}{" "}
            Added
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              opacity: 0.9,
              mt: 0.5,
            }}
          >
            Total ₹{totalPrice}
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "14px",
            whiteSpace: "nowrap",
          }}
        >
          View Cart →
        </Typography>
      </Box>
    </Box>
  );
}

export default Cartbar;