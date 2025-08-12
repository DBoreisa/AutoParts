import React from "react";
import { Drawer, useTheme, Box, Avatar, Typography, Divider, Paper, Button } from "@mui/material";
import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import useCurrencyRate from "../../hooks/useCurrencyRate";
import { useCurrencyContext } from "../../contexts/CurrencyContext";

const Cart = () => {
    const theme = useTheme();
    const { cart, showCart, setShowCart } = useCartContext();
    const navigate = useNavigate();
    const rate = useCurrencyRate();
    const { currency } = useCurrencyContext();
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

    const handleItemClick = (id) => {
        setShowCart(false);
        navigate(`/details/${id}`);
    };

    const cartContent = cart.map(item => (
        <Box key={item.id}
            sx={{ cursor: "pointer" }} 
            onClick={() => handleItemClick(item.id)}
        >
            <Box sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
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
                        paddingRight: 4, 
                        width: "100%"
                    }}
                >
                    <Typography variant="h6" textAlign="left">
                        {item.name}
                    </Typography>
                    <Typography variant="subtitle2" textAlign="right">
                        {(item.price * rate).toFixed(2)} {currency === "EUR" ? "€" : currency === "USD" ? "$" : currency === "GBP" ? "£" : currency}
                    </Typography>
                </Box>
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
                    <Button sx={{ margin: 2, width: "94%" }} variant="contained">
                        Proceed to payment
                    </Button>
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