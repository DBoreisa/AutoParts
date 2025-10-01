import React from "react";
import { Drawer, useTheme, Box, Avatar, Typography, Divider,
     Paper, Button, TextField, IconButton, } from "@mui/material";
import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import useCurrencyRate from "../../hooks/useCurrencyRate";
import { useCurrencyContext } from "../../contexts/CurrencyContext";
import useCart from "../../hooks/useCart";
import PaymentBtn from "../PaymentBtn";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Cart = () => {
    const theme = useTheme();  
    const { removeFromCart, updateQuantity, clearCart } = useCart();
    const { cart, showCart, setShowCart } = useCartContext();
    const { currency } = useCurrencyContext();     
    const navigate = useNavigate();
    const rate = useCurrencyRate();

    const totalPrice = cart.reduce((sum, item) => {
        const price = item.sale_price ? parseFloat(item.sale_price) : parseFloat(item.price);
        return sum + price * (item.quantity || 1);
    }, 0);
    
    const handleItemClick = (id) => {
        setShowCart(false);
        navigate(`/details/${id}`);
    };

    const cartContent = cart.map(item => (
        <Box key={item.id}> 
        <Box 
            sx={{ 
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%" 
            }} 
            onClick={() => handleItemClick(item.id)}
        >
            <Box sx={{
                    display: "flex",
                    paddingTop: 2,
                    paddingBottom: 2
                }}
            >
                <Avatar 
                    src={item.images[0].image} 
                    sx={{ 
                        width: 70, 
                        height: 70, 
                        marginRight: 2,
                        marginLeft: 2,
                        borderRadius: 2
                    }} 
                />
                <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingRight: 1, 
                    }}
                >
                    <Typography variant="h6" textAlign="left">
                        {item.name}
                    </Typography>
                    <Typography variant="subtitle2" textAlign="left">
                        {((item.sale_price ?? item.price) * rate).toFixed(2)}{" "}
                        {currency === "EUR" ? "€" : currency === "USD" ? "$" : currency === "GBP" ? "£" : currency}
                    </Typography>
                </Box>
            </Box>
            {/* kiekio pasirinkimas */}
            <Box sx={{ 
                    display: "flex",  
                    ml: "auto",
                }}
            >
                <TextField
                    type="number"
                    value={item.quantity || 1}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                        let qty = parseInt(e.target.value, 10) || 1;
                        if (qty < 1) qty = 1;
                        if (qty > item.stock) qty = item.stock;
                        updateQuantity(item.id, qty);
                    }}
                    inputProps={{
                        min: 1,
                        max: item.stock,
                        style: { textAlign: "right", width: 30, fontSize: 25, paddingTop: 6 },
                    }}
                    size="small"
                    variant="standard"
                    hiddenLabel
                     sx={{
                        mx: 1,
                        // paslepia rodykle Chrome, Safari, Edge
                        "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                        },
                        // paslepia rodykle  Firefox
                        "& input[type=number]": {
                        MozAppearance: "textfield",
                        },
                    }}
                    InputProps={{
                        disableUnderline: true,
                        readOnly: true,
                        sx: { 
                            userSelect: "none", 
                        },
                        endAdornment: (
                            <Box sx={{ display: "flex", flexDirection: "column", ml: 0.5 }}>
                                {/* didinti */}
                                <IconButton
                                size="small"
                                sx={{
                                    color: theme.palette.primary.main,
                                    "&:hover": { backgroundColor: theme.palette.primary.light },
                                    p: 0,
                                    lineHeight: 1,
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (item.quantity < item.stock) {
                                    updateQuantity(item.id, item.quantity + 1);
                                    }
                                }}
                                >
                                <ArrowDropUpIcon fontSize="small" />
                                </IconButton>

                                {/* mazinti */}
                                <IconButton
                                size="small"
                                sx={{
                                    color: theme.palette.primary.main,
                                    "&:hover": { backgroundColor: theme.palette.primary.light },
                                    p: 0,
                                    lineHeight: 0,
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (item.quantity > 1) {
                                    updateQuantity(item.id, item.quantity - 1);
                                    }
                                }}
                                >
                                <ArrowDropDownIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        ),
                    }}
                />
            </Box>
            <Button 
                variant="outlined" 
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.getContrastText(theme.palette.text.primary),
                    alignSelf: "center",
                    margin: 2,
                    paddingX: 2.2,
                    width: "10px",
                    borderRadius: 10,
                    minWidth: "auto"
                }}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering handleItemClick
                    removeFromCart(item); 
                }}
            >
                X
            </Button>  
        </Box>
        <Divider variant="inset" />
        </Box>
    ))

    return (
        <Drawer 
            open={showCart}
            onClose={() => setShowCart(false)}
            anchor="right"        
            PaperProps={{
                sx: {
                    width: { xs: "100vw", sm: "100vw", md: 500 },
                    backgroundColor: theme.palette.background.paper
                }
            }}
        >
            <Box sx={{
                    padding: 4,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: theme.palette.header.default
                }}
            >
                <Typography variant="h3" color="white">
                    Your cart
                </Typography>
            </Box>
            <Paper 
                elevation={2}
                sx={{
                    margin: 2
                }} 
            >
                {cartContent}
            </Paper>
            {cart.length > 0 ? 
                <Box>
                    <Typography sx={{ textAlign: "center", mt: 2, fontWeight: "bold" }}>
                        Total: {(totalPrice * rate).toFixed(2)}{" "} {currency === "EUR" ? "€" : currency === "USD" ? "$" : currency === "GBP" ? "£" : currency}
                    </Typography>
                    <PaymentBtn 
                        cart={cart} 
                        currency={currency} 
                        onSuccess={clearCart}
                    />
                </Box>
                
                :   <Typography sx={{
                        textAlign: "center",
                        fontSize: 25,
                        color: "rgb(181, 181, 181)"
                    }}
                    >
                        Your cart is empty!
                    </Typography>
            }
            <Button 
                onClick={() => setShowCart(false)}
                sx={{
                    fontWeight: "bold",
                    fontSize: 15,
                    marginTop: 5
                }}
            >
                Close
            </Button>            
        </Drawer>
    );
};

export default Cart;