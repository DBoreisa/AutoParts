import React from "react";
import { Drawer, useTheme, Box, CardContent } from "@mui/material";
import { useCartContext } from "../../contexts/CartContext";

const Cart = ({ item }) => {
    const theme = useTheme();
    const { cart, showCart, setShowCart } = useCartContext();

    const cartContent = cart.map(item => (
        <Box key={item.id}>
            <Box sx={{
                    display: "flex",
                    paddingTop: 2,
                    paddingBottom: 2
                }}
            >

            </Box>
        </Box>
    ))

    return (
        <Drawer 
            open={showCart}
            anchor="right"        
            PaperProps={{
                sx: {
                    width: 500,
                    backgroundColor: theme.palette.background.paper
                }
            }}
        >
            {cartContent}
        </Drawer>
    );
};

export default Cart;