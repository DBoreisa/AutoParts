import React from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const SwitchTheme = ({ darkMode, setDarkMode }) => {
  return (
    <IconButton color="inherit" onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default SwitchTheme;