import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import MUISwitch from "../MUISwitch/MUISwitch";

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);
  
  const handleChange = () => {
    toggleTheme()
  };

  return <MUISwitch checked={mode === "dark"} onChange={toggleTheme} />;
    
  
};

export default ThemeSwitcher;