import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
    return (
        <AppBar position="fixed" sx={{
            top: "auto",
            bottom: "0",
            width: "100%",
            height: "40px",
            display: "flex",
            justifyContent: "center"
        }}>
            <Toolbar sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} AutoParts
                </Typography>
            </Toolbar>
        </AppBar>        
    );
};

export default Footer;