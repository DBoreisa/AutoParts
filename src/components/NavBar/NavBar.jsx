import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Box, Typography} from "@mui/material";
import ThemeSwitcher from "../ThemeSwitcher";
import NavigationTabs from "../NavigationTabs";
import SearchItem from "../SearchItem";
import CartBadge from "../Cart/CartBadge";
import CurrencySwitch from "../CurrencySwitch/CurrencySwitch";
import { useTheme, useMediaQuery } from "@mui/material";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import logo from "../../Images/logo.png";
import logoMini from "../../Images/logo-mini.png";
import Badge from '@mui/material/Badge';
import { useCartContext } from "../../contexts/CartContext";
import { styled } from '@mui/material/styles';
import CategorySelection from "../CategorySelection";
import { useNavigate } from "react-router-dom";

const NavBar = () => {  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); 
    const { cart } = useCartContext();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        padding: '0 4px',
        }
    }));

    const toggleDrawer = (newOpen) => () => setOpen(newOpen);

    const DrawerList = (
        <Box
            role="presentation"
            sx={{
                width: "60vw",
                maxWidth: 360,
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",                  
                    gap: 4,
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 1,
                }}
            >
                <CartBadge />
                <CurrencySwitch />
                <ThemeSwitcher />
            </Box>
            <Divider />
            <Box>
                <SearchItem alwaysOpen />
            </Box>
            <Typography variant="h6" sx={{ textAlign: "left", mt: 1, pl: 1 }}>
                Categories:
            </Typography>

            <Box
                sx={{
                    flexGrow: 1,
                    overflowY: "auto",
                    pl: 1,
                    
                }}
            >
                <CategorySelection
                    readOnly
                    onChange={(selectedCategories) => {
                        const params = new URLSearchParams();
                        selectedCategories.forEach((cat) =>
                            params.append("categories", cat)
                        );

                        navigate(`/catalog?${params.toString()}`);
                        setOpen(false); // close drawer
                    }}
                />
            </Box>
        </Box>
    );
    return (
        <AppBar position="fixed" sx={{ boxShadow: 3, width: "100%" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {isMobile ? (
                        <a href="/">
                        <Box
                            component="img"
                            sx={{ 
                                height: 55, 
                                marginRight: 0
                            }}
                            alt="LogoMini"
                            src={logoMini}
                        />
                        </a> 
                    ) : (
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
                    )}
                    
                </Box>                  
                <NavigationTabs />
                {isMobile ? (
                    <Button onClick={toggleDrawer(true)}>
                        <StyledBadge badgeContent={cart.length} color="secondary">
                            <DehazeIcon sx={{ color: "white" }}/>
                        </StyledBadge>                       
                    </Button>
                ) : (
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <SearchItem />
                        <CartBadge />
                        <CurrencySwitch />
                        <ThemeSwitcher />
                    </Box>
                )}
                <Drawer 
                    open={open} 
                    onClose={toggleDrawer(false)} 
                    anchor={"right"} 
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



