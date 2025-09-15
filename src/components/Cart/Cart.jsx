import React from "react";
import { Drawer, useTheme, Box, Avatar, Typography, Divider, Paper, Button } from "@mui/material";
import { useCartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import useCurrencyRate from "../../hooks/useCurrencyRate";
import { useCurrencyContext } from "../../contexts/CurrencyContext";
import useCart from "../../hooks/useCart";
import PaymentBtn from "../PaymentBtn";

const Cart = () => {
    const theme = useTheme();  
    const { removeFromCart } = useCart();
    const { cart, showCart, setShowCart } = useCartContext();
    const { currency } = useCurrencyContext();     
    const navigate = useNavigate();
    const rate = useCurrencyRate();
    const totalPrice = cart.reduce((sum, item) => {
        const price = item.sale_price ? parseFloat(item.sale_price) : parseFloat(item.price);
        return sum + price;
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
                    <PaymentBtn cart={cart} currency={currency} />
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