import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import backgroundImg from "../Images/backgroundImg.jpg"
import Footer from "../components/Footer";
import RecentlyAdded from "../components/RecentlyAdded";

const HomePage = () => {
    const theme = useTheme();
    return (
        <Box sx={{minHeight: "100vh", 
            backgroundColor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            }}> 
            <Box sx={{
                width: {lg:"70%", xs: "100%"},
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
                    overflowY: "auto", 
                    paddingBottom: 7,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
                }}>
                    <RecentlyAdded/>
                    <Typography>SU nuolaida</Typography>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default HomePage;