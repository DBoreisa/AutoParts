import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Switch from '@mui/material/Switch';
import SwitchTheme from "../SwitchTheme"; 

const NavBar = ({ darkMode, setDarkMode }) => {
    return (
        <AppBar position="static">
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
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Catalog</Button>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <SwitchTheme />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;