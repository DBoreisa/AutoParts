import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Box} from "@mui/material";
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
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const NavBar = () => {  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); 

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" >
            <List>
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
                    <Box
                        component="img"
                        sx={{ 
                            height: 40, 
                            marginRight: 2
                        }}
                        alt="Logo"
                        src="/logo.png" // Update with your logo path
                    /> 
                    <Typography variant="h6" sx={{ flexGrow: 1, display: {xs: "none", sm: "block"} }}>
                        AutoParts
                    </Typography> 
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
                <Drawer open={open} onClose={toggleDrawer(false)} anchor={"right"}>
                    {DrawerList}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;



