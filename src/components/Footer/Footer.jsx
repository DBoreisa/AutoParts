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
        }}>
            <Typography variant="body2">
                © {new Date().getFullYear()} AutoParts
            </Typography>
        </Box>      
    );
};

export default Footer;