import React from "react";
import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import backgroundImg from "../Images/backgroundImg.jpg"
// import Footer from "../components/Footer";
import ItemsCarousel from "../components/ItemsCarousel";
import RecentlyAdded from "../components/RecentlyAdded";
import OnSale from "../components/OnSale";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from "react";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";
import useCart from "../hooks/useCart";
import Link from "@mui/material/Link";

const HomePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [fiveProducts, setFiveProducts] = useState([]);
    const [saleProducts, setSaleProducts] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showFailed, setShowFailed] = useState(false);
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
        const paymentStatus = params.get("payment");

        if (paymentStatus === "success") {
            setShowSuccess(true);
            clearCart();
            window.history.replaceState({}, document.title, "/");
        } 
        else if (paymentStatus === "failed") {
            setShowFailed(true);
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
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                        gap: 2,
                        px: { lg: 8, xs: 2 },
                        py: 3,
                        backgroundColor: theme.palette.background.paper,
                        borderBottom: `1px solid ${theme.palette.divider}`,
                        color: theme.palette.text.primary
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                            Fast shipping
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Parcels leave every Thu–Fri with tracking.
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                            Audi gearbox & drivetrain specialist
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Carefully selected parts for enthusiasts & mechanics.
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                            Secure checkout with Stripe
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pay safely with cards and modern payment methods.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ 
                    flexGrow: 1,  
                    paddingTop: 2,
                    paddingBottom: 2,
                    width: "85%",
                    margin: "auto",
                    marginBottom: 4,
                    marginTop: 4,
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
                    <Typography
                        variant="body2"
                        sx={{ textAlign: "center", color: theme.palette.text.secondary, mb: 2 }}
                    >
                        Discounted parts while stock lasts.
                    </Typography>
                    {isMobile ? (
                        <OnSale />
                    ) : (
                        <ItemsCarousel items={saleProducts} />
                    )}
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
                    <Typography variant="h5" component="h1" textAlign={"center"} marginBottom={2}>
                        Premium Audi Parts – Quality You Can Trust
                    </Typography>
                    <Typography sx={{ textAlign: "justify", color: theme.palette.text.secondary }}>
                        Discover a wide range of high-quality Audi parts—from gearboxes and engines to brakes and electronics. 
                        New and used, all at competitive prices, with expert support and fast delivery for your Audi model. 
                        Upgrade, replace, or maintain your vehicle with confidence.
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
                        }}
                    >
                            Recently added:
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ textAlign: "center", color: theme.palette.text.secondary, mb: 2 }}
                    >
                        Fresh stock — limited quantities available.
                    </Typography>
                    {isMobile ? (
                        <RecentlyAdded />
                    ) : (
                        <ItemsCarousel items={fiveProducts} />
                    )}
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
                        Purchases and delivery information:
                    </Typography>
                    <Typography sx={{ textAlign: "justify", color: theme.palette.text.secondary }}>
                        <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                            <li>
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    Shipping schedule: 
                                </Box> 
                                {" "}
                                Parcels are shipped once a week — every Thursday or Friday.
                            </li>
                            <li>
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    Shipment tracking: 
                                </Box> 
                                {" "}
                                We will send the tracking number to the email address you provided within 24 hours after we receive payment.
                            </li>
                            <li>
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    Delivery (USA and worldwide): <br/>
                                </Box> 
                                - USA: Usually takes 10–21 business days (although sometimes deliveries are much faster — our record is 3 business days). <br/>
                                - EU countries: 5–10 business days. <br/>
                                - Note: Due to customs procedures, delivery time may be slightly longer, depending on the recipient country’s authorities.
                            </li>
                            <li>
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    Quality check: 
                                </Box> 
                                {" "}
                                After receiving the parcel, check the condition of the item. If you notice any damage, please take photos and contact us within 48 hours.
                            </li>
                            <li>
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    Damage during shipping:
                                </Box> 
                                {" "}
                                If the item is damaged during transport, we will send a new identical item or refund your money.
                            </li>
                            <li>
                                <Box component="span" sx={{ fontWeight: 700 }}>
                                    Support:
                                </Box> 
                                {" "}
                                If you have any questions or concerns, message us — we’re ready to resolve any issues promptly!
                            </li>
                        </ul>
                        <Typography marginLeft={1} marginTop={1}>
                            <Box component="span" sx={{ fontWeight: 700 }}>
                                Contact us on:
                            </Box> 
                            {" "}
                            <Link 
                                href="mailto:info@gearpro01e.com" 
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                info@gearpro01e.com
                            </Link>
                        </Typography>
                    </Typography>
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
                    <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/gearpro01e">
                        <FacebookRoundedIcon color="primary" />
                    </a>
                    <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/gearpro01e?igsh=N2d0azE4NnN3dm5k">
                        <InstagramIcon color="primary"/>
                    </a>
                </Box>
            </Box>
            {/* <Footer /> */}
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
            <Snackbar
                open={showFailed}
                autoHideDuration={5000}
                onClose={() => setShowFailed(false)}
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
                    onClose={() => setShowFailed(false)}
                    severity="error"
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
                    Payment failed. Please try again.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default HomePage;