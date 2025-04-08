import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationTabs = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const tabMapping = ["/", "/catalog"];
    const value = tabMapping.indexOf(location.pathname) !== -1
    ? tabMapping.indexOf(location.pathname)
    : false;

    const handleChange = (event, newValue) => {
    navigate(tabMapping[newValue]);
    };

    return (
        <Box sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 2 }}>
            <Box>
                <Tabs value={value} 
                onChange={handleChange} 
                aria-label="navigation tabs" 
                textColor="inherit" 
                indicatorColor="primary"
                sx={{
                    "& .MuiTabs-indicator": {
                        backgroundColor: "white"
                    }
                }}
                >
                    <Tab label="Home" />
                    <Tab label="Catalog" />
                </Tabs>
            </Box>
        </Box>
    );
};

export default NavigationTabs;