import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode, // 'light' or 'dark'
      primary: {
        main: mode === "dark" ? "#96a7b5" : "#4c76a1",
      },
      secondary: {
        main: mode === "dark" ? "#f48fb1" : "#dc004e",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#ffffff",
        paper: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
    },
  });

export default getTheme;
