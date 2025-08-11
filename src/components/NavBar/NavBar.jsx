import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Box} from "@mui/material";
import ThemeSwitcher from "../ThemeSwitcher";
import NavigationTabs from "../NavigationTabs";
import SearchItem from "../SearchItem";
import CartBange from "../Cart/CartBadge";
import CurrencySwitch from "../CurrencySwitch/CurrencySwitch";
import { useTheme, useMediaQuery } from "@mui/material";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import logo from "../../Images/logo.png"

const NavBar = () => {  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); 

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" >
            <List sx={{ 
                    gap: 3, 
                    padding: 1, 
                    display: "flex",
                    width: "98vw",
                    alignItems: "center",
                    justifyContent: "right" 
                }}>
                <SearchItem />
                <CartBange />
                <CurrencySwitch />
                <ThemeSwitcher />
            </List>
        </Box>
    );
    return (
        <AppBar position="fixed" sx={{ boxShadow: 3, width: "100%" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <a href="/">
                        <Box
                        component="img"
                        sx={{ 
                            height: 55, 
                            marginRight: 0
                        }}
                        alt="Logo"
                        src={logo}
                    />
                    </a> 
                </Box>                  
                <NavigationTabs />
                {isMobile ? (
                    <Button onClick={toggleDrawer(true)}><DehazeIcon sx={{ color: "white" }}/></Button>
                ) : (
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <SearchItem />
                        <CartBange />
                        <CurrencySwitch />
                        <ThemeSwitcher />
                    </Box>
                )}
                <Drawer 
                    open={open} 
                    onClose={toggleDrawer(false)} 
                    anchor={"top"} 
                    slotProps={{
                        paper: {
                        sx: {
                            backgroundColor: theme.palette.header.default
                        }
                        }
                    }}
                >
                    {DrawerList}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;



