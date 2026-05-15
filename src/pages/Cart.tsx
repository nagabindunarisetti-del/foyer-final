import { useState } from "react";

import {
    Box,
    Typography,
    Card,
    TextField,
    Button,
    Divider,
    IconButton,
    Dialog,
    useTheme,
} from "@mui/material";

import {
    ArrowBackIosNew,
    AccessTime,
    Add,
    Remove,
    DeleteOutline,
    Check,
} from "@mui/icons-material";

import {
    useNavigate,
    useLocation,
} from "react-router-dom";

function Cart() {

    const navigate = useNavigate();

    const location = useLocation();

    const theme = useTheme();

    const providerType = "restaurant";

    const [cartItems, setCartItems] =
        useState<any[]>(
            location.state?.cartItems || []
        );

    const [fullName, setFullName] =
        useState("");
    const [mobile, setMobile] =
        useState("");
    const [address, setAddress] =
        useState("");
    const [payment, setPayment] =
        useState("cod");
    const [showSchedule, setShowSchedule] =
        useState(false);
    const [scheduleDate, setScheduleDate] =
        useState("");
    const [scheduleTime, setScheduleTime] =
        useState("");
    const [orderSuccess, setOrderSuccess] =
        useState(false);
    const [errors, setErrors] =
        useState<any>({});
    const deliveryFee = 30;
    const tax = 8;
    const totalItems = cartItems.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );
    const subtotal = cartItems.reduce(
        (total, item) =>
            total +
            item.price * item.quantity,
        0
    );
    const total =
        subtotal + deliveryFee + tax;
    const validateForm = () => {
        let newErrors: any = {};
        if (!fullName.trim()) {
            newErrors.fullName =
                "Please enter your full name";
        }
        if (!mobile.trim()) {
            newErrors.mobile =
                "Please enter mobile number";
        } else if (!/^\d{10}$/.test(mobile)) {
            newErrors.mobile =
                "Mobile number must contain exactly 10 digits";
        }
        if (!address.trim()) {
            newErrors.address =
                "Please enter delivery address";
        }
        if (showSchedule) {

            if (
                providerType !== "homeChef" &&
                !scheduleDate
            ) {
                newErrors.scheduleDate =
                    "Please select pickup date";
            }

            if (!scheduleTime) {
                newErrors.scheduleTime =
                    "Please select time slot";
            }
        }

        setErrors(newErrors);

        return (
            Object.keys(newErrors).length === 0
        );
    };
    const handlePlaceOrder = () => {

        if (validateForm()) {
            setOrderSuccess(true);
        }
    };

    return (
        <Box
            sx={{
                background:
                    theme.palette.background.default,

                minHeight: "100vh",

                px: {
                    xs: 2,
                    sm: 3,
                    md: 5,
                    lg: 8,
                },

                py: {
                    xs: 2,
                    md: 4,
                },
            }}
        >
            <Box
                onClick={() => navigate(-1)}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    width: "fit-content",
                    mb: 3,
                }}
            >
                <ArrowBackIosNew
                    sx={{
                        fontSize: 13,
                        color:
                            theme.palette.grey[600],
                    }}
                />

                <Typography
                    sx={{
                        fontSize: "13px",
                        color:
                            theme.palette.grey[600],
                        fontWeight: 500,
                    }}
                >
                    Back to menu
                </Typography>
            </Box>

            <Typography
                sx={{
                    fontSize: {
                        xs: "28px",
                        md: "38px",
                    },

                    fontWeight: 700,

                    color:
                        theme.palette.grey[900],

                    mb: 3,
                }}
            >
                Checkout
            </Typography>

            <Box
                sx={{
                    display: "grid",

                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "2fr 1fr",
                    },

                    gap: 3,

                    alignItems: "start",
                }}
            >
                <Box
                    sx={{
                        height: "100vh",
                        overflowY: "auto",
                        pr: 1,

                        "&::-webkit-scrollbar": {
                            width: "5px",
                        },

                        "&::-webkit-scrollbar-thumb": {
                            background:
                                theme.palette.grey[300],
                            borderRadius: "10px",
                        },
                    }}
                >
                    <Card
                        sx={{
                            p: 3,
                            borderRadius: "16px",
                            mb: 3,
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: "22px",
                                fontWeight: 700,
                                mb: 3,
                                color:
                                    theme.palette.grey[900],
                            }}
                        >
                            Delivery Details
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <Box>

                                <Typography
                                    sx={{
                                        mb: 1,
                                        fontSize: "14px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Full Name
                                </Typography>

                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChange={(e) =>
                                        setFullName(
                                            e.target.value
                                        )
                                    }
                                    error={!!errors.fullName}
                                    helperText={
                                        errors.fullName
                                    }
                                />
                            </Box>
                            <Box>

                                <Typography
                                    sx={{
                                        mb: 1,
                                        fontSize: "14px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Mobile Number
                                </Typography>

                                <TextField
                                    fullWidth
                                    size="small"
                                    placeholder="Enter 10 digit mobile number"
                                    value={mobile}
                                    onChange={(e) => {

                                        const value =
                                            e.target.value.replace(
                                                /\D/g,
                                                ""
                                            );

                                        if (value.length <= 10) {
                                            setMobile(value);
                                        }
                                    }}
                                    error={!!errors.mobile}
                                    helperText={
                                        errors.mobile
                                    }
                                    inputProps={{
                                        maxLength: 10,
                                    }}
                                />
                            </Box>

                            <Box>

                                <Typography
                                    sx={{
                                        mb: 1,
                                        fontSize: "14px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Delivery Address
                                </Typography>

                                <TextField
                                    fullWidth
                                    multiline
                                    rows={3}
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) =>
                                        setAddress(
                                            e.target.value
                                        )
                                    }
                                    error={!!errors.address}
                                    helperText={
                                        errors.address
                                    }
                                />
                            </Box>
                        </Box>
                    </Card>

                    <Card
                        sx={{
                            p: 2.2,
                            borderRadius: "16px",
                            mb: 3,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent:
                                    "space-between",
                                alignItems: "center",
                                mb: 2,
                                gap: 1,
                                flexWrap: "wrap",
                            }}
                        >

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >

                                <AccessTime
                                    sx={{
                                        color:
                                            theme.palette.primary.main,
                                    }}
                                />

                                <Typography
                                    sx={{
                                        fontSize: "22px",
                                        fontWeight: 700,
                                        color:
                                            theme.palette.grey[900],
                                    }}
                                >
                                    Delivery Time
                                </Typography>
                            </Box>

                            <Button
                                onClick={() =>
                                    setShowSchedule(
                                        !showSchedule
                                    )
                                }
                                sx={{
                                    background:
                                        theme.palette.primary.main,

                                    color:
                                        theme.palette.primary
                                            .contrastText,

                                    borderRadius: "30px",

                                    px: 2.5,

                                    textTransform:
                                        "none",

                                    "&:hover": {
                                        background:
                                            theme.palette.primary.dark,
                                    },
                                }}
                            >
                                {showSchedule
                                    ? "Hide Schedule"
                                    : "Schedule"}
                            </Button>
                        </Box>

                        <Typography
                            sx={{
                                fontSize: "12px",
                                color:
                                    theme.palette.grey[600],
                                mb: 1.5,
                            }}
                        >
                            Scheduling is optional
                        </Typography>

                        {showSchedule && (
                            <>


                                {providerType !==
                                    "homeChef" && (
                                        <Box mb={2}>

                                            <Typography
                                                sx={{
                                                    fontSize: "13px",
                                                    mb: 1,
                                                    color:
                                                        theme.palette.grey[700],
                                                }}
                                            >
                                                📅 Pickup Date
                                            </Typography>

                                            <TextField
                                                type="date"
                                                fullWidth
                                                value={
                                                    scheduleDate
                                                }
                                                onChange={(e) =>
                                                    setScheduleDate(
                                                        e.target.value
                                                    )
                                                }
                                                error={
                                                    !!errors.scheduleDate
                                                }
                                                helperText={
                                                    errors.scheduleDate
                                                }
                                            />
                                        </Box>
                                    )}


                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        mb: 1,
                                        color:
                                            theme.palette.grey[700],
                                    }}
                                >
                                    Time Slot
                                </Typography>

                                {errors.scheduleTime && (
                                    <Typography
                                        sx={{
                                            color: "#dc2626",
                                            fontSize: "12px",
                                            mb: 1,
                                        }}
                                    >
                                        {
                                            errors.scheduleTime
                                        }
                                    </Typography>
                                )}

                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns:
                                            "1fr 1fr",
                                        gap: 1,
                                    }}
                                >
                                    {[
                                        "12:00 - 1:00 PM",
                                        "1:00 - 2:00 PM",
                                        "7:00 - 8:00 PM",
                                        "8:00 - 9:00 PM",
                                    ].map((time) => (

                                        <Button
                                            key={time}
                                            onClick={() =>
                                                setScheduleTime(
                                                    time
                                                )
                                            }
                                            sx={{
                                                height: "42px",

                                                borderRadius: "10px",

                                                border:
                                                    scheduleTime ===
                                                        time
                                                        ? `2px solid ${theme.palette.primary.main}`
                                                        : `1px solid ${theme.palette.grey[200]}`,

                                                background:
                                                    scheduleTime ===
                                                        time
                                                        ? `${theme.palette.primary.light}20`
                                                        : "#fff",

                                                color:
                                                    theme.palette.grey[900],

                                                fontSize: "11px",

                                                textTransform:
                                                    "none",

                                                "&:hover": {
                                                    background:
                                                        `${theme.palette.primary.light}20`,
                                                },
                                            }}
                                        >
                                            {time}
                                        </Button>
                                    ))}
                                </Box>
                            </>
                        )}
                    </Card>
                    <Card
                        sx={{
                            p: 3,
                            borderRadius: "16px",
                            mb: 3,
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: "22px",
                                fontWeight: 700,
                                mb: 3,
                            }}
                        >
                            Payment Method
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            {[
                                {
                                    key: "cod",
                                    label:
                                        "💵 Cash on Delivery",
                                },
                                {
                                    key: "upi",
                                    label:
                                        "📱 UPI / Wallet",
                                },
                                {
                                    key: "card",
                                    label:
                                        "💳 Credit / Debit Card",
                                },
                            ].map((item) => (

                                <Button
                                    key={item.key}
                                    onClick={() =>
                                        setPayment(item.key)
                                    }
                                    sx={{
                                        justifyContent:
                                            "flex-start",

                                        border:
                                            payment === item.key
                                                ? `2px solid ${theme.palette.primary.main}`
                                                : `1px solid ${theme.palette.grey[200]}`,

                                        background:
                                            payment === item.key
                                                ? `${theme.palette.primary.light}20`
                                                : "#fff",

                                        color:
                                            theme.palette.grey[900],

                                        height: "52px",

                                        textTransform:
                                            "none",

                                        fontWeight: 600,
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    </Card>

                    <Button
                        fullWidth
                        onClick={handlePlaceOrder}
                        sx={{
                            background:
                                theme.palette.primary.main,

                            color:
                                theme.palette.primary
                                    .contrastText,

                            height: "54px",

                            borderRadius: "12px",

                            fontWeight: 700,

                            textTransform: "none",

                            "&:hover": {
                                background:
                                    theme.palette.primary.dark,
                            },
                        }}
                    >
                        Place Order - ₹{total}
                    </Button>
                </Box>

                <Box
                    sx={{
                        position: "sticky",
                        top: 20,
                    }}
                >

                    <Card
                        sx={{
                            p: 3,
                            borderRadius: "16px",
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: "22px",
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Order Summary
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "13px",
                                color:
                                    theme.palette.grey[600],
                                mb: 2,
                            }}
                        >
                            {totalItems} Items in Cart
                        </Typography>

                        {cartItems.map((item) => (

                            <Box
                                key={item.id}
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    alignItems: "center",
                                    mb: 2,
                                }}
                            >

                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 1.5,
                                    }}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: 58,
                                            height: 58,
                                            borderRadius: 10,
                                            objectFit: "cover",
                                        }}
                                    />

                                    <Box>

                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: "14px",
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                color:
                                                    theme.palette.grey[600],
                                            }}
                                        >
                                            Qty: {item.quantity}
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: "13px",
                                            }}
                                        >
                                            ₹{item.price}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                    }}
                                >



                                    <IconButton
                                        onClick={() => {

                                            const updatedCart =
                                                cartItems
                                                    .map(
                                                        (
                                                            cartItem
                                                        ) =>
                                                            cartItem.id ===
                                                                item.id
                                                                ? {
                                                                    ...cartItem,
                                                                    quantity:
                                                                        cartItem.quantity -
                                                                        1,
                                                                }
                                                                : cartItem
                                                    )
                                                    .filter(
                                                        (
                                                            cartItem
                                                        ) =>
                                                            cartItem.quantity >
                                                            0
                                                    );

                                            setCartItems(
                                                updatedCart
                                            );

                                            

                                            localStorage.setItem(
                                                "cartItems",
                                                JSON.stringify(updatedCart)
                                            );

                                           

                                            window.dispatchEvent(
                                                new Event("cartUpdated")
                                            );
                                        }}
                                    >
                                        <Remove />
                                    </IconButton>

                                    <Typography>
                                        {item.quantity}
                                    </Typography>

                                   

                                    <IconButton
                                        onClick={() => {

                                            const updatedCart =
                                                cartItems.map(
                                                    (
                                                        cartItem
                                                    ) =>
                                                        cartItem.id ===
                                                            item.id
                                                            ? {
                                                                ...cartItem,
                                                                quantity:
                                                                    cartItem.quantity +
                                                                    1,
                                                            }
                                                            : cartItem
                                                );

                                            setCartItems(
                                                updatedCart
                                            );

                                            

                                            localStorage.setItem(
                                                "cartItems",
                                                JSON.stringify(updatedCart)
                                            );

                                            

                                            window.dispatchEvent(
                                                new Event("cartUpdated")
                                            );
                                        }}
                                    >
                                        <Add />
                                    </IconButton>
                                    <DeleteOutline
                                        onClick={() => {

                                            const updatedCart =
                                                cartItems.filter(
                                                    (
                                                        cartItem
                                                    ) =>
                                                        cartItem.id !==
                                                        item.id
                                                );

                                            setCartItems(
                                                updatedCart
                                            );
                                            localStorage.setItem(
                                                "cartItems",
                                                JSON.stringify(updatedCart)
                                            );
                                            window.dispatchEvent(
                                                new Event("cartUpdated")
                                            );
                                        }}
                                        sx={{
                                            color: "#dc2626",
                                            cursor: "pointer",
                                        }}
                                    />
                                </Box>
                            </Box>
                        ))}
                        {showSchedule &&
                            scheduleTime && (
                                <Box
                                    sx={{
                                        background:
                                            `${theme.palette.primary.light}15`,

                                        borderRadius:
                                            "12px",

                                        p: 2,

                                        mt: 2,

                                        mb: 2,
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            fontWeight: 700,
                                            color:
                                                theme.palette.primary.main,
                                            mb: 1,
                                        }}
                                    >
                                        Scheduled Order
                                    </Typography>

                                    {providerType ===
                                        "homeChef" ? (
                                        <Typography
                                            sx={{
                                                fontSize: "13px",
                                            }}
                                        >
                                            Time:
                                            {" "}
                                            {
                                                scheduleTime
                                            }
                                        </Typography>
                                    ) : (
                                        <>
                                            <Typography
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                Date:
                                                {" "}
                                                {
                                                    scheduleDate
                                                }
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                Time:
                                                {" "}
                                                {
                                                    scheduleTime
                                                }
                                            </Typography>
                                        </>
                                    )}
                                </Box>
                            )}

                        <Divider sx={{ my: 2 }} />

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent:
                                    "space-between",
                                mb: 1,
                            }}
                        >
                            <Typography>
                                Subtotal
                            </Typography>

                            <Typography>
                                ₹{subtotal}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent:
                                    "space-between",
                                mb: 1,
                            }}
                        >
                            <Typography>
                                Delivery Fee
                            </Typography>

                            <Typography>
                                ₹{deliveryFee}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent:
                                    "space-between",
                                mb: 2,
                            }}
                        >
                            <Typography>
                                Taxes
                            </Typography>

                            <Typography>
                                ₹{tax}
                            </Typography>
                        </Box>

                        <Divider sx={{ mb: 2 }} />

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent:
                                    "space-between",
                            }}
                        >
                            <Typography
                                fontWeight={700}
                            >
                                Total
                            </Typography>

                            <Typography
                                fontWeight={700}
                            >
                                ₹{total}
                            </Typography>
                        </Box>
                    </Card>
                </Box>
            </Box>

            <Dialog
                open={orderSuccess}
                onClose={() =>
                    setOrderSuccess(false)
                }
                maxWidth="sm"
                fullWidth
            >
                <Box
                    sx={{
                        p: 5,
                        textAlign: "center",
                    }}
                >

                    <Check
                        sx={{
                            fontSize: 60,
                            color:
                                theme.palette.secondary.main,
                            mb: 2,
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: "28px",
                            fontWeight: 700,
                            mb: 2,
                        }}
                    >
                        Order Placed!
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "16px",
                            color:
                                theme.palette.grey[600],
                            mb: 3,
                        }}
                    >
                        {showSchedule ? (
                            providerType ===
                                "homeChef" ? (
                                <>
                                    Your order is scheduled
                                    for
                                    {" "}
                                    <b>
                                        {
                                            scheduleTime
                                        }
                                    </b>
                                </>
                            ) : (
                                <>
                                    Your order is scheduled
                                    for
                                    {" "}
                                    <b>
                                        {
                                            scheduleDate
                                        }
                                    </b>
                                    {" "}
                                    at
                                    {" "}
                                    <b>
                                        {
                                            scheduleTime
                                        }
                                    </b>
                                </>
                            )
                        ) : (
                            "Your order has been placed successfully"
                        )}
                    </Typography>

                    
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,

                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },
                        }}
                    >

                        <Button
                            fullWidth
                            onClick={() =>
                                navigate("/")
                            }
                            sx={{
                                background:
                                    theme.palette.primary.main,

                                color:
                                    theme.palette.primary
                                        .contrastText,

                                height: "54px",

                                borderRadius: "14px",

                                textTransform:
                                    "none",

                                "&:hover": {
                                    background:
                                        theme.palette.primary.dark,
                                },
                            }}
                        >
                            Back to Home
                        </Button>

                        <Button
                            fullWidth
                            onClick={() =>
                                navigate("/vieworders")
                            }
                            sx={{
                                background:
                                    "#fff",

                                color:
                                    theme.palette.grey[900],

                                height: "54px",

                                borderRadius: "14px",

                                textTransform:
                                    "none",

                                border:
                                    `1px solid ${theme.palette.grey[200]}`,

                                "&:hover": {
                                    background:
                                        theme.palette.grey[100],
                                },
                            }}
                        >
                            View Orders
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    );
}

export default Cart;