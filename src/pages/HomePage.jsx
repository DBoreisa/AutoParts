import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import backgroundImg from "../Images/backgroundImg.jpg"
import Footer from "../components/Footer";
import ItemsCarousel from "../components/ItemsCarousel";
import cars from "../data/carsData";

const HomePage = () => {
    const theme = useTheme();
    return (
        <Box sx={{minHeight: "100vh", 
            backgroundColor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            }}> 
            <Box sx={{
                // width: {lg:"70%", xs: "100%"},
                maxWidth: "1200px",
                margin: "auto"
            }}>
                <Box sx={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: "cover",                    
                    backgroundPosition: "center",               
                    backgroundRepeat: "no-repeat",              
                    height: "40vh",                             
                    minHeight: "100px",                        
                    width: "100%"
                }}>
                </Box>
                <Box sx={{ 
                    flexGrow: 1,  
                    paddingTop: 4,
                    paddingBottom: 4,
                    background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
                    width: "95%",
                    margin: "auto"
                }}>
                    <Typography variant="h4" sx={{
                        color: "white", 
                        textAlign: "center",
                        paddingBottom: 2
                        }}>
                            Recently added:
                    </Typography>
                    <ItemsCarousel items={cars.slice(0, 4)}/>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default HomePage;