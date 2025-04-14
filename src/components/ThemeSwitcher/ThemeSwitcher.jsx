import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import MUISwitch from "../MUISwitch/MUISwitch";

const ThemeSwitcher = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return <MUISwitch checked={mode === "dark"} onChange={toggleTheme} />;
};

export default ThemeSwitcher;