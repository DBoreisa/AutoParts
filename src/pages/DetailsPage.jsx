import React from "react";
import Footer from "../components/Footer";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ImagesCarousel from "../components/ImagesCarousel";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'; 
import useCart from "../hooks/useCart";
import useCurrencyRate from "../hooks/useCurrencyRate";
import { useCurrencyContext } from "../contexts/CurrencyContext";

const DetailsPage = () => {
    const theme = useTheme();
    const products = useProducts();
    const { id } = useParams();
    const product = products.find((product) => product.id.toString() === id);
    const { addToCart, addToCartText } = useCart(product); 
    const rate = useCurrencyRate();
    const { currency } = useCurrencyContext();

    if (!product) {
        return <Typography>Loading product details...</Typography>;
    }
    return (
        <Box sx={{ 
                backgroundColor: theme.palette.background.default,
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh"
            }}
        > 
            <Box sx={{
                    maxWidth: {lg:"70%", xs: "100%"},
                    minHeight: "calc(100vh - 120px)",
                    width: "100%",
                    margin: "auto",
                    boxShadow: 3,
                    paddingTop: 9
                }}
            >
                <Box sx={{
                        display: "flex",
                        padding: {xs: 0, lg: 5},
                        flexDirection: {xs: "column", lg: "row"},
                        alignItems: "center",
                    }}
                >
                    <ImagesCarousel items={product.images}/>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 6,
                        paddingTop: 0,
                        width: { xs: "70%", lg: "44%" },
                        margin: { xs: "auto", lg: 0 }
                    }}>
                        <Typography 
                            variant="h3" 
                            color={theme.palette.text.primary} 
                            sx={{ textAlign: 'center'}}
                        >
                            {product.name}
                        </Typography>
                        <Typography 
                            color={theme.palette.text.secondary}
                            sx={{ 
                                textAlign: 'justify',
                                fontWeight: "bold",
                                paddingBottom: 2,
                                fontSize: 25 
                            }}
                        >
                            {(product.price * rate).toFixed(2)} {currency === "EUR" ? "€" : currency === "USD" ? "$" : currency === "GBP" ? "£" : currency}
                        </Typography>
                        <Typography 
                            color={theme.palette.text.secondary}
                            sx={{ textAlign: 'justify' }}
                        >
                            {product.description}
                        </Typography>
                        <Button 
                            variant="outlined" 
                            endIcon={<ShoppingCartTwoToneIcon />}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.getContrastText(theme.palette.text.primary),
                                marginTop: 2,
                                width: "250px"
                            }}
                            onClick={addToCart}
                        >
                            {addToCartText}
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </Box>
    );
};

export default DetailsPage;