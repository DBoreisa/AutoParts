import React from "react";
import { AppBar, Toolbar, Typography, Box} from "@mui/material";
import ThemeSwitcher from "../ThemeSwitcher";
import NavigationTabs from "../NavigationTabs";
import SearchItem from "../SearchItem";
import CartBange from "../Cart/CartBadge";

const NavBar = () => {  
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
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <SearchItem />
                    <CartBange />
                    <ThemeSwitcher />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;



{/* <Button component={Link} to="/" color="inherit">Home</Button>
<Button component={Link} to="/catalog" color="inherit">Catalog</Button> */}