//src/theme/getTheme.js
import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode, // 'light' arba 'dark'
      primary: {
        main: mode === "dark" ? "#96a7b5" : "#77788c",
      },
      secondary: {
        main: mode === "dark" ? "#dc004e" : "#dc004e",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#ffffff",
        paper: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#c7c6c5" : "#4a4948",
      },
      header: {
        default: mode === "dark" ? "#1e1e1e" : "#77788c",
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
    },
    breakpoints: {
      values: {
        xs: 0,    // Mobile portrait
        sm: 601,  // Mobile landscape
        md: 961,  // Tablets
        lg: 1281, // Laptops
        xl: 1920, // Desktops
        xxl: 2561
      },
    }
  });

export default getTheme;