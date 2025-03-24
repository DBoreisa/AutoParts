import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { useState, useMemo } from "react";
import getTheme from "./theme/theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => getTheme(darkMode ? "dark" : "light"), [darkMode]); // memorize theme
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
