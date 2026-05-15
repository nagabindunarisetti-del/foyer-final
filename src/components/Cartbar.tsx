

import {
  Box,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { useNavigate } from "react-router-dom";

function Cartbar({
  cartItems,
  setCartItems,
}: {
  cartItems: any[];

  setCartItems: React.Dispatch<
    React.SetStateAction<any[]>
  >;
}) {

  const navigate = useNavigate();

  const theme = useTheme();

 

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

 

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  

  const handleDelete = (
    e: React.MouseEvent
  ) => {

    e.preventDefault();

    e.stopPropagation();

    setCartItems((prev: any[]) => {

      if (prev.length === 0)
        return prev;

      let updatedCart = [...prev];

      const lastItem =
        updatedCart[
          updatedCart.length - 1
        ];

    

      if (lastItem.quantity > 1) {

        updatedCart[
          updatedCart.length - 1
        ] = {

          ...lastItem,

          quantity:
            lastItem.quantity - 1,
        };

      }

     

      else {

        updatedCart.pop();
      }

    

      localStorage.setItem(
        "cartItems",
        JSON.stringify(updatedCart)
      );

      return updatedCart;
    });
  };

 

  if (cartItems.length === 0)
    return null;

  return (

    <Box
      onClick={() =>
        navigate("/cart", {
          state: {
            cartItems,
          },
        })
      }

      sx={{
        position: "fixed",

        bottom: 20,

        left: {
          xs: 10,
          sm: "auto",
        },

        right: {
          xs: 10,
          sm: 20,
        },

        width: {
          xs: "calc(100% - 20px)",
          sm: "340px",
        },

        maxWidth: "340px",

        overflow: "hidden",

        background: `linear-gradient(
          90deg,
          ${theme.palette.primary.main},
          ${theme.palette.primary.light}
        )`,

        color:
          theme.palette.primary
            .contrastText,

        borderRadius: "16px",

        px: 1.8,

        py: 1,

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        zIndex: 999,

        boxShadow:
          `0 8px 24px ${theme.palette.primary.main}40`,

        cursor: "pointer",

        transition: "0.3s",

        border:
          `1px solid ${theme.palette.primary.light}`,

        "&:hover": {
          transform:
            "translateY(-3px)",

          boxShadow:
            `0 12px 28px ${theme.palette.primary.main}55`,
        },
      }}
    >

     

      <Box
        display="flex"
        alignItems="center"
        gap={1}
      >

       

        <Box
          sx={{
            width: 34,

            height: 34,

            borderRadius: "10px",

            background:
              "rgba(255,255,255,0.18)",

            display: "flex",

            alignItems: "center",

            justifyContent:
              "center",

            flexShrink: 0,
          }}
        >

          <ShoppingCartIcon
            sx={{
              fontSize: 18,
            }}
          />

        </Box>

       

        <Box
          sx={{
            overflow: "hidden",
          }}
        >

          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "14px",
              },

              fontWeight: 700,

              lineHeight: 1.1,

              whiteSpace: "nowrap",

              overflow: "hidden",

              textOverflow: "ellipsis",
            }}
          >
            {totalItems} Items Added
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "11px",
                sm: "12px",
              },

              opacity: 0.9,

              mt: 0.2,

              lineHeight: 1,
            }}
          >
            ₹{totalPrice}
          </Typography>

        </Box>

      </Box>

     

      <Box
        display="flex"
        alignItems="center"
        gap={1}
        flexShrink={0}
      >

        <Typography
          sx={{
            fontSize: {
              xs: "12px",
              sm: "13px",
            },

            fontWeight: 700,

            lineHeight: 1,

            whiteSpace: "nowrap",
          }}
        >
          View Cart →
        </Typography>

       

        <IconButton
          onClick={handleDelete}

          sx={{
            width: 30,

            height: 30,

            color: "#fff",

            background:
              "rgba(255,255,255,0.15)",

            flexShrink: 0,

            "&:hover": {
              background:
                "rgba(255,255,255,0.25)",
            },
          }}
        >

          <DeleteOutlineIcon
            sx={{
              fontSize: 17,
            }}
          />

        </IconButton>

      </Box>

    </Box>
  );
}

export default Cartbar;