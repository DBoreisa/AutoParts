import React from "react";
import Footer from "../components/Footer";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import ImagesCarousel from "../components/ImagesCarousel";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'; 
// import useCart from "../hooks/useCart";
import useCurrencyRate from "../hooks/useCurrencyRate";
import { useCurrencyContext } from "../contexts/CurrencyContext";
import useProduct from "../hooks/useProduct";

const DetailsPage = () => {
    const theme = useTheme();
    const { id } = useParams();
    const product = useProduct(id);
    // const { addToCart, addToCartText, isInCart, removeFromCart} = useCart(); 
    const rate = useCurrencyRate();
    const { currency } = useCurrencyContext();
    
    if (!product) {
        return <Typography>Loading product details...</Typography>;
    }

    const { name, description, price, sale_price, on_sale, images } = product;

    return (
        <Box sx={{ 
                backgroundColor: theme.palette.background.paper,
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh"
            }}
        > 
            <Box sx={{
                    maxWidth: {lg:"70%", xs: "100%"},
                    minHeight: "calc(100vh - 113px)",
                    width: "100%",
                    margin: "auto",
                    boxShadow: 3,
                    paddingTop: 9,
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Box sx={{
                        display: "flex",
                        padding: {xs: 0, lg: 5},
                        flexDirection: {xs: "column", lg: "row"},
                        alignItems: "center",
                    }}
                >
                    <ImagesCarousel items={images}/>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 6,
                        paddingTop: 0,
                        width: { xs: "70%", lg: "44%" },
                        margin: { xs: "auto", lg: 0 }
                    }}>
                        <Typography 
                            variant="h4" 
                            color={theme.palette.text.primary} 
                            sx={{ textAlign: 'center', paddingBottom: 2}}
                        >
                            {name}

                        </Typography>
                            {on_sale ? (
                                <Box display="inline-flex" gap={1} alignItems="flex-end" >
                                    <Typography 
                                        color={theme.palette.text.secondary}
                                        variant="h5"
                                        sx={{  
                                            textDecoration: "line-through", 
                                            color: "gray",     
                                            transform: "translateY(-3px)"                                                            
                                        }}
                                    >
                                        {(price * rate).toFixed(2)}{" "}
                                        {currency === "EUR"
                                        ? "€"
                                        : currency === "USD"
                                        ? "$"
                                        : currency === "GBP"
                                        ? "£"
                                        : currency}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{ fontWeight: "bold", color: "red" }}
                                    >
                                        {(sale_price * rate).toFixed(2)}{" "}
                                        {currency === "EUR"
                                        ? "€"
                                        : currency === "USD"
                                        ? "$"
                                        : currency === "GBP"
                                        ? "£"
                                        : currency}
                                    </Typography>
                                </Box>
                            ) : (
                                <Typography 
                                        color={theme.palette.text.secondary}
                                        variant="h4"
                                        sx={{ 
                                            textAlign: 'justify',
                                            paddingBottom: 2,                                         
                                        }}
                                    >
                                        {(price * rate).toFixed(2)}{" "}
                                        {currency === "EUR"
                                        ? "€"
                                        : currency === "USD"
                                        ? "$"
                                        : currency === "GBP"
                                        ? "£"
                                        : currency}
                                    </Typography>
                            )}
                        <Typography 
                            color={theme.palette.text.secondary}
                            sx={{ textAlign: 'justify', pt: 2 }}
                        >
                            {description}
                        </Typography>
                        <Button 
                            variant="outlined" 
                            endIcon={<ShoppingCartTwoToneIcon />}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.getContrastText(theme.palette.text.primary),
                                marginTop: 2,
                                width: "250px",
                                alignSelf: "center"
                            }}
                            // onClick={(e) => {
                            //     e.stopPropagation(); // Prevent triggering handleItemClick
                            //     if (isInCart(product)) {
                            //         removeFromCart(product);  
                            //     } else {
                            //         addToCart(product);      
                            //     } 
                            // }}
                        >
                            {/* {addToCartText(product)} */}
                            Add to cart (disabled)
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
    );
};

export default DetailsPage;