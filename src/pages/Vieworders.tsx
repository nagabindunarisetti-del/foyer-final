import React, {
  useState,
  useEffect,
} from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Card,
  CardContent,
  Grid,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

const Vieworder = () => {

  const theme = useTheme();

  const navigate = useNavigate();

  const { section } =
    useParams();

  const [active, setActive] =
    useState(
      section || "orders"
    );

  useEffect(() => {

    if (section) {

      setActive(section);
    }

  }, [section]);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      mobile: "",
    });

  const [orders, setOrders] =
    useState<any[]>([]);

  useEffect(() => {

    const savedOrders =
      localStorage.getItem(
        "orders"
      );

    if (savedOrders) {

      setOrders(
        JSON.parse(savedOrders)
      );
    }

  }, []);

  const [addresses, setAddresses] =
    useState([
      "Hyderabad, Telangana",
      "Gachibowli, Hyderabad",
    ]);

  const [newAddress, setNewAddress] =
    useState("");

  const [openSnackbar, setOpenSnackbar] =
    useState(false);

  const handleChange = (e: any) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSave = () => {

    if (
      formData.mobile.length !== 10
    ) {

      alert(
        "Mobile number must be exactly 10 digits"
      );

      return;
    }

    setOpenSnackbar(true);
  };

  const addAddress = () => {

    if (newAddress.trim()) {

      setAddresses([
        ...addresses,
        newAddress,
      ]);

      setNewAddress("");
    }
  };

  const deleteAddress = (
    index: number
  ) => {

    setAddresses(
      addresses.filter(
        (_, i) => i !== index
      )
    );
  };

  return (

    <Box
      sx={{
        minHeight: "100vh",

        backgroundColor:
          theme.palette.background.default,

        display: "flex",

        justifyContent: "center",

        px: 2,

        py: 10,
      }}
    >

      <Box
        sx={{
          width: "100%",

          maxWidth: 900,

          backgroundColor:
            theme.palette.background.paper,

          borderRadius: 4,

          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },

          boxShadow:
            "0 8px 30px rgba(0,0,0,0.06)",
        }}
      >

        <Box
          sx={{
            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            flexWrap: "wrap",

            gap: 2,

            mb: 3,
          }}
        >

          <Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,

                color:
                  theme.palette.grey[900],
              }}
            >
              My Account
            </Typography>

            <Typography
              sx={{
                color:
                  theme.palette.grey[600],

                mt: 0.5,
              }}
            >
              Manage your profile,
              orders, and addresses.
            </Typography>

          </Box>

          <Button
            startIcon={<HomeIcon />}
            variant="contained"
            onClick={() =>
              navigate("/")
            }
            sx={{
              borderRadius: 3,

              textTransform: "none",
            }}
          >
            Back To Home
          </Button>

        </Box>

        <Box
          sx={{
            display: "flex",

            gap: 1,

            mb: 3,

            backgroundColor:
              theme.palette.grey[100],

            p:0.7,

            borderRadius: 3,
          }}
        >

          {[
            "profile",
            "orders",
            "addresses",
          ].map((item) => (

            <Button
              key={item}
              fullWidth
              onClick={() =>
                setActive(item)
              }
              sx={{
                backgroundColor:
                  active === item
                    ? theme.palette
                        .primary.main
                    : "transparent",

                color:
                  active === item
                    ? theme.palette
                        .primary
                        .contrastText
                    : theme.palette
                        .grey[700],

                textTransform:
                  "capitalize",

                borderRadius: 2,

                py: 1,

                fontWeight: 600,

                "&:hover": {
                  backgroundColor:
                    active === item
                      ? theme.palette
                          .primary.dark
                      : theme.palette
                          .grey[200],
                },
              }}
            >
              {item}
            </Button>

          ))}

        </Box>

        {active === "profile" && (

          <Paper
            elevation={0}
            sx={{
              p: 3,

              borderRadius: 3,

              border:
                `1px solid ${theme.palette.grey[200]}`,
            }}
          >

            <Typography
              sx={{
                mb: 3,

                fontWeight: 700,
              }}
            >
              Personal Details
            </Typography>

            <Typography sx={{ mb: 1 }}>
              Full Name
            </Typography>

            <TextField
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <Typography sx={{ mb: 1 }}>
              Email
            </Typography>

            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <Typography sx={{ mb: 1 }}>
              Mobile Number
            </Typography>

            <TextField
              fullWidth
              value={formData.mobile}
              onChange={(e) => {

                const value =
                  e.target.value;

                if (
                  /^\d{0,10}$/.test(
                    value
                  )
                ) {

                  setFormData({
                    ...formData,
                    mobile: value,
                  });
                }
              }}
              sx={{ mb: 3 }}
            />

            <Button
              variant="contained"
              onClick={handleSave}
            >
              Save Changes
            </Button>

          </Paper>
        )}

        {active === "orders" && (

          <Paper
            elevation={0}
            sx={{
              p: 3,

              borderRadius: 3,

              border:
                `1px solid ${theme.palette.grey[200]}`,
            }}
          >

            <Typography
              sx={{
                fontWeight: 700,

                mb: 3,

                color:
                  theme.palette.grey[900],

                fontSize: "22px",
              }}
            >
              Past Orders
            </Typography>

            {orders.length > 0 ? (

              [...orders]
                .reverse()
                .map(
                  (
                    order,
                    index
                  ) => (

                    <Box
                      key={index}
                      sx={{
                        py: 2,

                        borderBottom:
                          index !==
                          orders.length - 1
                            ? `1px solid ${theme.palette.grey[200]}`
                            : "none",

                        display: "flex",

                        justifyContent:
                          "space-between",

                        alignItems:
                          "center",

                        gap: 2,
                      }}
                    >

                      <Box>

                        <Typography
                          sx={{
                            fontWeight: 700,

                            fontSize:
                              "18px",

                            color:
                              theme.palette
                                .grey[900],
                          }}
                        >
                          {order.name}
                          {" "}
                          ×
                          {order.quantity || 1}
                        </Typography>

                        <Typography
                          sx={{
                            mt: 0.5,

                            fontSize:
                              "13px",

                            color:
                              theme.palette
                                .grey[600],
                          }}
                        >
                          {order.orderDate}
                          {" "}
                          at
                          {" "}
                          {order.orderTime}
                        </Typography>

                      </Box>

                      <Typography
                        sx={{
                          fontWeight: 700,

                          color:
                            theme.palette
                              .error.main,

                          fontSize:
                            "18px",
                        }}
                      >
                        ₹
                        {order.price *
                          (order.quantity || 1)}
                      </Typography>

                    </Box>

                  )
                )

            ) : (

              <Typography
                sx={{
                  color:
                    theme.palette
                      .grey[600],
                }}
              >
                No Orders Found
              </Typography>

            )}

          </Paper>
        )}

        {active === "addresses" && (

          <Paper
            elevation={0}
            sx={{
              p: 3,

              borderRadius: 3,

              border:
                `1px solid ${theme.palette.grey[200]}`,
            }}
          >

            <Typography
              sx={{
                mb: 3,

                fontWeight: 700,
              }}
            >
              Saved Addresses
            </Typography>

            <Box
              sx={{
                display: "flex",

                gap: 1,

                mb: 3,

                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >

              <TextField
                fullWidth
                size="small"
                placeholder="Enter new address"
                value={newAddress}
                onChange={(e) =>
                  setNewAddress(
                    e.target.value
                  )
                }
              />

              <Button
                variant="contained"
                onClick={addAddress}
              >
                Add
              </Button>

            </Box>

            <Grid container spacing={2}>

              {addresses.map(
                (
                  addr,
                  index
                ) => (

                  <Grid
                    item
                    xs={12}
                    key={index}
                  >

                    <Card
                      sx={{
                        borderRadius: 3,

                        border:
                          `1px solid ${theme.palette.grey[200]}`,

                        boxShadow:
                          "none",
                      }}
                    >

                      <CardContent
                        sx={{
                          display: "flex",

                          alignItems:
                            "center",

                          gap: 2,
                        }}
                      >

                        <LocationOnIcon
                          sx={{
                            color:
                              theme.palette
                                .primary
                                .main,
                          }}
                        />

                        <Box sx={{ flex: 1 }}>

                          <Typography
                            sx={{
                              fontWeight: 700,
                            }}
                          >
                            Home
                          </Typography>

                          <Typography
                            sx={{
                              color:
                                theme.palette
                                  .grey[600],

                              fontSize:
                                "14px",
                            }}
                          >
                            {addr}
                          </Typography>

                        </Box>

                        <IconButton
                          onClick={() =>
                            deleteAddress(
                              index
                            )
                          }
                        >

                          <DeleteIcon />

                        </IconButton>

                      </CardContent>

                    </Card>

                  </Grid>
                )
              )}

            </Grid>

          </Paper>
        )}

      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() =>
          setOpenSnackbar(false)
        }
      >

        <Alert severity="success">
          Changes Saved Successfully
        </Alert>

      </Snackbar>

    </Box>
  );
};

export default Vieworder;