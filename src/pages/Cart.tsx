import { useState, useEffect, useRef } from "react";

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

    const storageKey =
        location.state?.storageKey ||
        "cartItems";

    const theme = useTheme();

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
    const [orderSuccess, setOrderSuccess] =
        useState(false);

    const [paidAmount, setPaidAmount] =
        useState(0);

    const [orderedItems, setOrderedItems] =
        useState<any[]>([]);
    const [errors, setErrors] =
        useState<any>({});

    const leftSectionRef = useRef<HTMLDivElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const calculateHeight = () => {
            const header = document.querySelector('.checkout-header');
            if (header) {
                setHeaderHeight(header.clientHeight);
            }
        };

        calculateHeight();
        window.addEventListener('resize', calculateHeight);

        return () => window.removeEventListener('resize', calculateHeight);
    }, []);

    if (cartItems.length === 0 && !orderSuccess) {
        return (
            <Box
                sx={{
                    minHeight: "100vh",
                    background:
                        theme.palette.background.default,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 3,
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        maxWidth: "400px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "24px",
                                md: "32px",
                            },
                            fontWeight: 700,
                            color:
                                theme.palette.grey[900],
                            mb: 1,
                        }}
                    >
                        Your cart is empty
                    </Typography>

                    <Typography
                        sx={{
                            color:
                                theme.palette.grey[600],
                            fontSize: {
                                xs: "13px",
                                md: "14px",
                            },
                            mb: 3,
                            lineHeight: 1.5,
                        }}
                    >
                        Add some delicious items to get
                        started.
                    </Typography>

                    <Button
                        onClick={() => navigate("/Ordernow")}
                        sx={{
                            background:
                                theme.palette.primary.main,

                            color:
                                theme.palette.primary
                                    .contrastText,

                            textTransform: "none",

                            borderRadius: "10px",

                            px: 4,

                            py: 1,

                            fontWeight: 600,

                            fontSize: "14px",

                            "&:hover": {
                                background:
                                    theme.palette.primary.dark,
                            },
                        }}
                    >
                        Order
                    </Button>
                </Box>
            </Box>
        );
    }
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

        setErrors(newErrors);

        return (
            Object.keys(newErrors).length === 0
        );
    };
    const handlePlaceOrder = () => {

        if (validateForm()) {
            const existingOrders =
                JSON.parse(
                    localStorage.getItem(
                        "orders"
                    ) || "[]"
                );

            const newOrders =
                cartItems.map((item) => ({
                    ...item,
                    quantity: item.quantity || 1,
                    orderDate: new Date().toLocaleDateString(),
                    orderTime: new Date().toLocaleTimeString(),
                }));
            const updatedOrders = [
                ...existingOrders,
                ...newOrders,
            ];

            localStorage.setItem(
                "orders",
                JSON.stringify(updatedOrders)
            );
            setPaidAmount(total);

            setOrderedItems(cartItems);
            localStorage.removeItem(
                storageKey
            );
            setCartItems([]);
            window.dispatchEvent(
                new Event("cartUpdated")
            );
            setOrderSuccess(true);
        }
    };

    return (
        <Box
            sx={{
                background:
                    theme.palette.background.default,

                minHeight: "100vh",

                height: "100vh",

                display: "flex",
                flexDirection: "column",

                overflow: "hidden",
            }}
        >
            <Box
                className="checkout-header"
                sx={{
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 6,
                        lg: 10,
                    },
                    pt: {
                        xs: 1.5,
                        md: 2,
                    },
                    flexShrink: 0,
                }}
            >
                <Box
                    onClick={() => navigate(-1)}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        cursor: "pointer",
                        width: "fit-content",
                        mb: 2,
                        '&:hover': {
                            opacity: 0.7,
                        },
                    }}
                >
                    <ArrowBackIosNew
                        sx={{
                            fontSize: 11,
                            color:
                                theme.palette.grey[600],
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: "12px",
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
                            xs: "22px",
                            md: "28px",
                        },
                        fontWeight: 700,
                        color: theme.palette.grey[900],
                        mb: 2,
                    }}
                >
                    Checkout
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    overflow: "auto",
                    px: {
                        xs: 2,
                        sm: 3,
                        md: 6,
                        lg: 35,
                    },
                    pb: 2,
                    "&::-webkit-scrollbar": {
                        width: "6px",
                        height: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background: theme.palette.grey[100],
                        borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: theme.palette.grey[400],
                        borderRadius: "10px",
                        "&:hover": {
                            background: theme.palette.grey[500],
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "2fr 1fr",
                        },
                        gap: 2,
                        alignItems: "start",
                    }}
                >
                    <Box
                        sx={{
                            order: { xs: 1, md: 2 },
                            position: { xs: "static", md: "sticky" },
                            top: { md: 0 },
                            alignSelf: "start",
                            mb: { xs: 2, md: 0 },
                        }}
                    >
                        <Card
                            sx={{
                                p: 2,
                                borderRadius: "12px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    mb: 1.5,
                                }}
                            >
                                Order Summary
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color:
                                        theme.palette.grey[600],
                                    mb: 1.5,
                                }}
                            >
                                {totalItems} Items in Cart
                            </Typography>

                            <Box
                                sx={{
                                    maxHeight: "400px",
                                    overflowY: "auto",
                                    mb: 2,
                                    pr: 1,
                                    "&::-webkit-scrollbar": {
                                        width: "4px",
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: theme.palette.grey[300],
                                        borderRadius: "10px",
                                    },
                                }}
                            >
                                {cartItems.map((item) => (
                                    <Box
                                        key={item.id}
                                        sx={{
                                            display: "flex",
                                            justifyContent:
                                                "space-between",
                                            alignItems: "center",
                                            mb: 1.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 1,
                                            }}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                style={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 8,
                                                    objectFit: "cover",
                                                }}
                                            />

                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                        fontSize: "13px",
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontSize: "11px",
                                                        color:
                                                            theme.palette.grey[600],
                                                    }}
                                                >
                                                    Qty: {item.quantity}
                                                </Typography>

                                                <Typography
                                                    sx={{
                                                        fontSize: "12px",
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
                                                gap: 0.5,
                                            }}
                                        >
                                            <IconButton
                                                size="small"
                                                onClick={() => {
                                                    const updatedCart =
                                                        cartItems
                                                            .map(
                                                                (
                                                                    cartItem
                                                                ) =>
                                                                    cartItem.id === item.id &&
                                                                        cartItem.name === item.name
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

                                                    if (updatedCart.length === 0) {
                                                        localStorage.removeItem(storageKey);
                                                    } else {
                                                        localStorage.setItem(
                                                            storageKey,
                                                            JSON.stringify(updatedCart)
                                                        );
                                                    }

                                                    window.dispatchEvent(
                                                        new Event("cartUpdated")
                                                    );
                                                }}
                                            >
                                                <Remove sx={{ fontSize: 16 }} />
                                            </IconButton>

                                            <Typography fontSize="13px">
                                                {item.quantity}
                                            </Typography>

                                            <IconButton
                                                size="small"
                                                onClick={() => {
                                                    const updatedCart =
                                                        cartItems.map(
                                                            (
                                                                cartItem
                                                            ) =>
                                                                cartItem.id === item.id &&
                                                                    cartItem.name === item.name
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
                                                        storageKey,
                                                        JSON.stringify(updatedCart)
                                                    );

                                                    window.dispatchEvent(
                                                        new Event("cartUpdated")
                                                    );
                                                }}
                                            >
                                                <Add sx={{ fontSize: 16 }} />
                                            </IconButton>
                                            <DeleteOutline
                                                onClick={() => {
                                                    const updatedCart =
                                                        cartItems.filter(
                                                            (cartItem) =>
                                                                !(
                                                                    cartItem.id === item.id &&
                                                                    cartItem.name === item.name
                                                                )
                                                        );

                                                    setCartItems(
                                                        updatedCart
                                                    );
                                                    if (updatedCart.length === 0) {
                                                        localStorage.removeItem(storageKey);
                                                    } else {
                                                        localStorage.setItem(
                                                            storageKey,
                                                            JSON.stringify(updatedCart)
                                                        );
                                                    }
                                                    window.dispatchEvent(
                                                        new Event("cartUpdated")
                                                    );
                                                }}
                                                sx={{
                                                    fontSize: 18,
                                                    color: "#dc2626",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            <Divider sx={{ my: 1.5 }} />

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    mb: 0.75,
                                    fontSize: "13px",
                                }}
                            >
                                <Typography fontSize="13px">
                                    Subtotal
                                </Typography>

                                <Typography fontSize="13px">
                                    ₹{subtotal}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    mb: 0.75,
                                    fontSize: "13px",
                                }}
                            >
                                <Typography fontSize="13px">
                                    Delivery Fee
                                </Typography>

                                <Typography fontSize="13px">
                                    ₹{deliveryFee}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    mb: 1.5,
                                    fontSize: "13px",
                                }}
                            >
                                <Typography fontSize="13px">
                                    Taxes
                                </Typography>

                                <Typography fontSize="13px">
                                    ₹{tax}
                                </Typography>
                            </Box>

                            <Divider sx={{ mb: 1.5 }} />

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    fontSize: "14px",
                                }}
                            >
                                <Typography
                                    fontWeight={700}
                                    fontSize="14px"
                                >
                                    Total
                                </Typography>

                                <Typography
                                    fontWeight={700}
                                    fontSize="14px"
                                >
                                    ₹{total}
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box
                        sx={{
                            order: { xs: 2, md: 1 },
                        }}
                    >
                        <Card
                            sx={{
                                p: 2,
                                borderRadius: "12px",
                                mb: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    mb: 2,
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
                                    gap: 1.5,
                                }}
                            >
                                <Box>
                                    <Typography
                                        sx={{
                                            mb: 0.5,
                                            fontSize: "12px",
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
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                fontSize: '13px'
                                            }
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            mb: 0.5,
                                            fontSize: "12px",
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
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                fontSize: '13px'
                                            }
                                        }}
                                    />
                                </Box>

                                <Box>
                                    <Typography
                                        sx={{
                                            mb: 0.5,
                                            fontSize: "12px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Delivery Address
                                    </Typography>

                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={2}
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
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                fontSize: '13px'
                                            }
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Card>

                        <Card
                            sx={{
                                p: 2,
                                borderRadius: "12px",
                                mb: 2,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    mb: 2,
                                }}
                            >
                                Payment Method
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 1.5,
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

                                            height: "44px",

                                            fontSize: "13px",

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

                                height: "46px",

                                borderRadius: "10px",

                                fontWeight: 700,

                                fontSize: "14px",

                                textTransform: "none",

                                mb: 2,

                                "&:hover": {
                                    background:
                                        theme.palette.primary.dark,
                                },
                            }}
                        >
                            Place Order - ₹{total}
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Dialog
                open={orderSuccess}
                onClose={() => setOrderSuccess(false)}
                maxWidth="xs"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: "14px",
                        background: "#ffffff",
                        maxWidth: "400px",
                        margin: "auto",
                        overflow: "hidden",
                    },
                }}
            >
                <Box
                    sx={{
                        background:
                            "linear-gradient(135deg, #106ebe 0%, #37a1f9 100%)",
                        py: 2,
                        px: 1,
                        textAlign: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: 55,
                            height: 55,
                            borderRadius: "50%",
                            background: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                            mb: 1.5,
                        }}
                    >
                        <Check
                            sx={{
                                fontSize: 30,
                                color: "#10b981",
                                fontWeight: 700,
                            }}
                        />
                    </Box>

                    <Typography
                        sx={{
                            fontSize: {
                                xs: "24px",
                                md: "28px",
                            },
                            fontWeight: 700,
                            color: "#fff",
                            lineHeight: 1.1,
                            fontFamily:
                                "Poppins, Inter, system-ui, Arial",
                        }}
                    >
                        Order Placed!
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: {
                                xs: "13px",
                                md: "14px",
                            },
                            color: "rgba(255,255,255,0.9)",
                            mt: 0.5,
                            fontWeight: 400,
                        }}
                    >
                        Your order will arrive shortly
                    </Typography>
                </Box>

                <Box
                    sx={{
                        px: 2.5,
                        py: 2.5,
                        background: "#f8f9fa",
                    }}
                >
                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "12px",
                            p: 2,
                            textAlign: "center",
                            border: "1px solid #e9ecef",
                            mb: 2.5,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "13px",
                                color: "#6c757d",
                                fontWeight: 500,
                                mb: 0.5,
                            }}
                        >
                            Total Payment Done
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "28px",
                                    md: "34px",
                                },
                                fontWeight: 700,
                                color: "#106ebe",
                                lineHeight: 1,
                            }}
                        >
                            ₹{paidAmount}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            background: "#fff",
                            borderRadius: "12px",
                            p: 1.5,
                            border: "1px solid #e9ecef",
                            mb: 2.5,
                            maxHeight: "150px",
                            overflowY: "auto",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "15px",
                                fontWeight: 600,
                                color: "#212529",
                                mb: 1.5,
                            }}
                        >
                            Order Summary
                        </Typography>

                        {orderedItems.map((item: any) => (
                            <Box
                                key={item.id}
                                sx={{
                                    display: "flex",
                                    justifyContent:
                                        "space-between",
                                    alignItems: "center",
                                    py: 0.75,
                                    borderBottom:
                                        "1px solid #f1f3f5",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        color: "#495057",
                                        fontWeight: 500,
                                    }}
                                >
                                    {item.name} × {item.quantity}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: "13px",
                                        color: "#106ebe",
                                        fontWeight: 700,
                                    }}
                                >
                                    ₹{item.price * item.quantity}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 1.5,
                            flexDirection: {
                                xs: "column",
                                sm: "row",
                            },
                        }}
                    >
                        <Button
                            fullWidth
                            onClick={() => navigate("/track-order")}
                            sx={{
                                height: "42px",
                                borderRadius: "8px",
                                background: "#106ebe",
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: 600,
                                textTransform: "none",

                                "&:hover": {
                                    background: "#0a58a1",
                                },
                            }}
                        >
                            Track Order
                        </Button>

                        <Button
                            fullWidth
                            onClick={() =>
                                navigate("/vieworder/orders")
                            }
                            sx={{
                                height: "42px",
                                borderRadius: "8px",
                                background: "#10b981",
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: 600,
                                textTransform: "none",

                                "&:hover": {
                                    background: "#059669",
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