import React from "react";
import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import backgroundImg from "../Images/backgroundImg.jpg"
import Footer from "../components/Footer";
import ItemsCarousel from "../components/ItemsCarousel";
import RecentlyAdded from "../components/RecentlyAdded";
import OnSale from "../components/OnSale";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from "react";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";
import useCart from "../hooks/useCart";

const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [fiveProducts, setFiveProducts] = useState([]);
    const [saleProducts, setSaleProducts] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const { clearCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("https://api.gearpro01e.com/products/?sort=Date");
            setFiveProducts(res.data.slice(0, 5)); // latest 5 products
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get("https://api.gearpro01e.com/products/?on_sale=true");
            setSaleProducts(res.data)
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get("payment") === "success") {
            setShowSuccess(true);
            clearCart(); 
            window.history.replaceState({}, document.title, "/");
        }
    }, [clearCart]);

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
                        <OnSale />
                    ) : (
                        <ItemsCarousel items={saleProducts} />
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
                    <a rel="noreferrer noopener" target="_blank" href="https://facebook.com">
                        <FacebookRoundedIcon color="primary" />
                    </a>
                    <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/gearpro01e?igsh=N2d0azE4NnN3dm5k">
                        <InstagramIcon color="primary"/>
                    </a>
                </Box>
            </Box>
            <Footer />
            <Snackbar
                open={showSuccess}
                autoHideDuration={5000}
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: "top", horizontal: "60px" }}
                sx={{
                    position: "fixed",
                    top: "50% !important",
                    left: "50% !important",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", 
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Alert
                    onClose={() => setShowSuccess(false)}
                    severity="success"
                    sx={{
                        width: "40vw",
                        minWidth: "300px",
                        height: "30vh",
                        display: "flex",
                        alignItems: "center",           // keeps icon + text aligned
                        justifyContent: "center",       // center horizontally
                        textAlign: "center",
                        fontSize: "1.5rem",
                        position: "relative",           // for close button positioning
                        backgroundColor: theme.palette.header.default,
                    }}
                    slotProps={{
                        closeButton: {
                        sx: {
                            position: "absolute",       // place in corner
                            top: 8,
                            right: 8,
                        },
                        },
                    }}
                    >
                    Thank you for your purchase!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default HomePage;