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
  Chip,
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

  /* GET SECTION FROM URL */

  const { section } =
    useParams();

  /* ACTIVE TAB */

  const [active, setActive] =
    useState(
      section || "profile"
    );

  /* UPDATE ACTIVE TAB */

  useEffect(() => {

    if (section) {

      setActive(section);
    }

  }, [section]);

  /* PROFILE FORM */

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      mobile: "",
    });

  /* ORDERS */

  const [orders, setOrders] =
    useState<any[]>([]);

  useEffect(() => {

    const savedOrders =
      localStorage.getItem(
        "cartItems"
      );

    if (savedOrders) {

      const parsedOrders =
        JSON.parse(savedOrders);

      setOrders(parsedOrders);
    }

  }, []);

  /* ADDRESSES */

  const [addresses, setAddresses] =
    useState([
      "Hyderabad, Telangana",
      "Gachibowli, Hyderabad",
    ]);

  const [newAddress, setNewAddress] =
    useState("");

  /* SNACKBAR */

  const [openSnackbar, setOpenSnackbar] =
    useState(false);

  /* HANDLE INPUT */

  const handleChange = (e: any) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  /* SAVE PROFILE */

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

  /* ADD ADDRESS */

  const addAddress = () => {

    if (newAddress.trim()) {

      setAddresses([
        ...addresses,
        newAddress,
      ]);

      setNewAddress("");
    }
  };

  /* DELETE ADDRESS */

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
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 4,
      }}
    >

      <Box
        sx={{
          width: "100%",
          maxWidth: 850,
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

        {/* HEADER */}

        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            mb: 2,
            flexWrap: "wrap",
            gap: 2,
          }}
        >

          <Box>

            <Typography
              variant="h5"
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
                fontSize: "13px",
                color:
                  theme.palette.grey[600],
              }}
            >
              Manage your details and orders
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
              fontWeight: 600,
            }}
          >
            Back to Home
          </Button>

        </Box>

        {/* TABS */}

        <Box
          sx={{
            display: "flex",
            gap: 1,
            mb: 3,
            backgroundColor:
              theme.palette.grey[100],
            p: 0.7,
            borderRadius: 3,
            flexWrap: "wrap",
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
                flex: 1,
                minWidth: "100px",

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

                "&:hover": {
                  backgroundColor:
                    active === item
                      ? theme.palette
                          .primary.dark
                      : theme.palette
                          .grey[200],
                },

                fontSize: "13px",
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                textTransform:
                  "capitalize",
              }}
            >
              {item}
            </Button>

          ))}

        </Box>

        {/* PROFILE */}

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
                fontWeight: 600,
                color:
                  theme.palette.grey[800],
              }}
            >
              Personal Details
            </Typography>

            <Typography
              sx={{
                mb: 1,
                fontSize: "14px",
              }}
            >
              Full Name
            </Typography>

            <TextField
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              sx={{ mb: 2 }}
            />

            <Typography
              sx={{
                mb: 1,
                fontSize: "14px",
              }}
            >
              Email
            </Typography>

            <TextField
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              sx={{ mb: 2 }}
            />

            <Typography
              sx={{
                mb: 1,
                fontSize: "14px",
              }}
            >
              Mobile Number
            </Typography>

            <TextField
              fullWidth
              value={formData.mobile}
              placeholder="Enter mobile number"
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
              sx={{
                px: 3,
                py: 1,
              }}
            >
              Save Changes
            </Button>

          </Paper>
        )}

        {/* ORDERS */}

        {active === "orders" && (

          <Grid container spacing={2}>

            {orders.length > 0 ? (

              orders.map((order, index) => (

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
                      boxShadow: "none",
                    }}
                  >

                    <CardContent>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          alignItems:
                            "center",
                          flexWrap: "wrap",
                        }}
                      >

                        {/* IMAGE */}

                        <Box
                          component="img"
                          src={
                            order.image ||
                            "https://via.placeholder.com/100"
                          }
                          alt={order.name}
                          sx={{
                            width: 100,
                            height: 100,
                            borderRadius: 3,
                            objectFit:
                              "cover",
                          }}
                        />

                        {/* DETAILS */}

                        <Box sx={{ flex: 1 }}>

                          <Typography
                            sx={{
                              fontWeight: 700,
                              color:
                                theme.palette
                                  .grey[900],
                            }}
                          >
                            {order.name}
                          </Typography>

                          <Typography
                            sx={{
                              mt: 1,
                              color:
                                theme.palette
                                  .grey[600],
                            }}
                          >
                            Quantity:
                            {" "}
                            {order.quantity}
                          </Typography>

                          <Typography
                            sx={{
                              mt: 1,
                              fontWeight: 700,
                              color:
                                theme.palette
                                  .primary.main,
                            }}
                          >
                            ₹
                            {" "}
                            {order.price}
                          </Typography>

                          <Chip
                            label="Order Placed"
                            size="small"
                            sx={{
                              mt: 2,
                              backgroundColor:
                                theme.palette
                                  .secondary
                                  .light,
                              color:
                                theme.palette
                                  .secondary
                                  .contrastText,
                              fontWeight: 600,
                            }}
                          />

                        </Box>

                      </Box>

                    </CardContent>

                  </Card>

                </Grid>
              ))

            ) : (

              <Typography
                sx={{
                  ml: 2,
                  mt: 2,
                }}
              >
                No Orders Found
              </Typography>

            )}

          </Grid>
        )}

        {/* ADDRESSES */}

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
                fontWeight: 600,
                color:
                  theme.palette.grey[800],
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
                sx={{
                  minWidth: 100,
                }}
              >
                Add
              </Button>

            </Box>

            <Grid container spacing={2}>

              {addresses.map(
                (addr, index) => (

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
                                .primary.main,
                          }}
                        />

                        <Box sx={{ flex: 1 }}>

                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize:
                                "14px",
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
                                "13px",
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

      {/* SNACKBAR */}

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