import React from "react";
import { Drawer, useTheme, Box, Avatar, Typography } from "@mui/material";
import { useCartContext } from "../../contexts/CartContext";

const Cart = ({ item }) => {
    const theme = useTheme();
    const { cart, showCart, setShowCart } = useCartContext();

    const cartContent = cart.map(item => (
        <Box key={item.id}>
            <Box sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "space-between",
                    paddingTop: 2,
                    paddingBottom: 2
                }}
            >
                <Avatar 
                    src={item.image[0]} 
                    sx={{width: 96, height: 96, borderRadius: 0}}
                />
                <Box display={"flex"} flexDirection={"column"}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="subtitle2">{item.description}</Typography> {/* Aprasymu dar nera */}
                </Box>
                <Typography variant="body1" justifyContent={"end"}>
                    {item.price}
                </Typography>
            </Box>
        </Box>
    ))

    return (
        <Drawer 
            open={showCart}
            onClose={() => setShowCart(false)}
            anchor="right"        
            PaperProps={{
                sx: {
                    width: 500,
                    backgroundColor: theme.palette.background.paper,
                    padding: 3
                }
            }}
        >
            {cartContent}
        </Drawer>
    );
};

export default Cart;