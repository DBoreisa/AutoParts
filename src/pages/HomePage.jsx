import React from "react";
import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import backgroundImg from "../Images/backgroundImg.jpg"
import Footer from "../components/Footer";
import ItemsCarousel from "../components/ItemsCarousel";
import RecentlyAdded from "../components/RecentlyAdded";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [fiveProducts, setFiveProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("https://api.gearpro01e.com/products/?sort=Date");
            setFiveProducts(res.data.slice(0, 5)); // latest 5 products
        };
        fetchProducts();
    }, []);


    return (
        <Box sx={{
            minHeight: "100vh", 
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            flexDirection: "column",
        }}> 
            <Box sx={{
                maxWidth: {lg:"70%", xs: "100%"},
                backgroundColor: theme.palette.background.default,
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
                        <ItemsCarousel items={fiveProducts} />
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
                        <ItemsCarousel items={fiveProducts} />
                    )}
                </Box>
                <Box 
                    flex={1}  //vietoj width, uzima visa ploti
                    backgroundColor= {theme.palette.background.paper}
                    marginBottom={2}
                    padding={1}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"end"}
                    gap={2}
                >
                    <Typography 
                        variant="h6" 
                        fontWeight={600}
                        sx={{color: theme.palette.text.secondary }}
                    >
                        Folow us:  
                    </Typography>
                    <a href="https://facebook.com">
                        <FacebookRoundedIcon color="primary" />
                    </a>
                    <a href="https://instagram.com">
                        <InstagramIcon color="primary"/>
                    </a>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default HomePage;