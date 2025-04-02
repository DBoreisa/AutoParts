import React, { useState } from "react";
import { Box, Tabs, Tab, useTheme } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationTabs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();

    // Mapping paths to tab index
    const tabMapping = ["/", "/catalog"];
    const currentTab = tabMapping.indexOf(location.pathname) !== -1 ? tabMapping.indexOf(location.pathname) : 0;

    
    const [value, setValue] = useState(currentTab);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(tabMapping[newValue]); // Navigate to the selected tab's route
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