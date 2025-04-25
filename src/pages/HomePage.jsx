import React from "react";
import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import backgroundImg from "../Images/backgroundImg.jpg"
import Footer from "../components/Footer";
import ItemsCarousel from "../components/ItemsCarousel";
import RecentlyAdded from "../components/RecentlyAdded";
import cars from "../data/carsData";

const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{
            minHeight: "100vh", 
            backgroundColor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
        }}> 
            <Box sx={{
                // width: {lg:"70%", xs: "100%"},
                maxWidth: "1200px",
                width: "100%",
                margin: "auto",
                boxShadow: 5
            }}>
                <Box sx={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: "cover",                    
                    backgroundPosition: "center",               
                    backgroundRepeat: "no-repeat",              
                    height: "40vh",                             
                    minHeight: "100px",                        
                    width: "100%",
                    marginTop: "90px"
                }}>
                </Box>
                <Box sx={{
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.paper,
                    marginTop: 5,
                    marginBottom: 7,
                    padding: 5,
                    paddingLeft: {lg: 20, xs: 4},
                    paddingRight: {lg: 20, xs: 4},
                    
                }}>
                    <Typography variant="h5" textAlign={"center"} marginBottom={2}>
                        Specialists in Audi Gearboxes
                    </Typography>
                    <Typography sx={{ textAlign: "justify", color: theme.palette.text.secondary }}>
                        Looking for a reliable Audi gearbox? We specialize in high-quality new and used Audi gearboxes at competitive prices. 
                        Whether you're replacing or upgrading, we’ve got the right fit for your model—backed by expert support and fast delivery.
                    </Typography>
                </Box>
                <Box sx={{ 
                    flexGrow: 1,  
                    paddingTop: 2,
                    paddingBottom: 2,
                    width: "85%",
                    margin: "auto",
                    marginBottom: 4,
                    boxShadow: 4
                }}>
                    <Typography variant="h5" sx={{
                        color: theme.palette.text.primary, 
                        textAlign: "center",
                        paddingBottom: 1,
                        }}>
                            Recently added:
                    </Typography>
                    {isMobile ? (
                        <RecentlyAdded />
                    ) : (
                        <ItemsCarousel items={cars.slice(0, 4)} />
                    )}
                </Box>
                <Box sx={{ 
                    flexGrow: 1,  
                    paddingTop: 2,
                    paddingBottom: 2,
                    width: "85%",
                    margin: "auto",
                    marginBottom: 4,
                    boxShadow: 4
                }}>
                    <Typography variant="h5" 
                        sx={{
                            color: theme.palette.text.primary, 
                            textAlign: "center",
                            paddingBottom: 1,
                        }}>
                            On sale:
                    </Typography>
                    {isMobile ? (
                        <RecentlyAdded />
                    ) : (
                        <ItemsCarousel items={cars.slice(0, 4)} />
                    )}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default HomePage;