import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Switch, Typography, Box } from "@mui/material";

const SwitchTheme = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  
  const handleChange = () => {
    toggleTheme()
  };

  return (
    <Box sx={{display: "flex", alignItems: "center"}}>
      <Typography>Light</Typography>
      <Switch
        checked={mode === "dark"}
        onChange={handleChange}
      />
      <Typography>Dark</Typography>
    </Box>
    
  );
};

export default SwitchTheme;
