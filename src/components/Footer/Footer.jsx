import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Footer = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.palette.header.default,
            color: "white",
            position: "relative",
            boxShadow: "0 -4px 6px rgba(0,0,0,0.2)",
        }}>
            <Typography variant="body2">
                © {new Date().getFullYear()} GearPro
            </Typography>
        </Box>      
    );
};

export default Footer;