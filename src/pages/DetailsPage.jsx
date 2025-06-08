import React from "react";
import Footer from "../components/Footer";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import cars from "../data/carsData";
import ImagesCarousel from "../components/ImagesCarousel";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'; 
import useCart from "../hooks/useCart";

const DetailsPage = () => {
    const theme = useTheme();
    const { id } = useParams();
    const car = cars.find((car) => car.id.toString() === id);
    const { addToCart, addToCartText } = useCart(car); // 

    return (
        <Box sx={{minHeight: "calc(100vh - 50px)", 
                    backgroundColor: theme.palette.background.default,
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "50px"
                }}
        > 
            <Box sx={{
                      maxWidth: "1200px",
                      minHeight: "calc(100vh - 90px)",
                      width: "100%",
                      margin: "auto",
                      boxShadow: 3
                  }}
            >
                <Box sx={{
                        display: "flex",
                        padding: 5,
                        paddingTop: 9
                    }}
                >
                    <ImagesCarousel items={car.image}/>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 6,
                        paddingTop: 0,
                        width: "44%"
                    }}>
                        <Typography 
                            variant="h3" 
                            color={theme.palette.text.primary} 
                            sx={{ textAlign: 'center' }}
                        >
                            {car.name}
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
                            {car.price}
                        </Typography>
                        <Typography 
                            color={theme.palette.text.secondary}
                            sx={{ textAlign: 'justify' }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Typography>
                        <Button 
                            variant="outlined" 
                            endIcon={<ShoppingCartTwoToneIcon />}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.getContrastText(theme.palette.text.primary),
                                margin: 2,
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