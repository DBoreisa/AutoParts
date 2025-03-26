import React from "react";
import { Box } from "@mui/material";
import backgroundImg from "../Images/backgroundImg.jpg"
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
        <Box sx={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",                    
            backgroundPosition: "center",               
            backgroundRepeat: "no-repeat",              
            height: "calc(100vh - 120px)",                             
            minHeight: "100px",                         
            width: "100%"
        }}>
        </Box>
        <Footer />
        </>
    );
};

export default HomePage;