import React from "react";
import { AppBar, Toolbar, Typography, Button, Box} from "@mui/material";
import ThemeSwitcher from "../ThemeSwitcher";
import { Link } from "react-router-dom";

const NavBar = () => {  
    return (
        <AppBar position="fixed" sx={{ boxShadow: 3 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                        component="img"
                        sx={{ height: 40, marginRight: 2 }}
                        alt="Logo"
                        src="/logo.png" // Update with your logo path
                    /> 
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        AutoParts
                    </Typography> 
                </Box>                  
                <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 2 }}>
                    <Button component={Link} to="/" color="inherit">Home</Button>
                    <Button component={Link} to="/catalog" color="inherit">Catalog</Button>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <ThemeSwitcher />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;