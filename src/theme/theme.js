import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#fff",
        paper: mode === "dark" ? "#1e1e1e" : "#fff",
      },
      text: {
        primary: mode === "dark" ? "#fff" : "#000",
      },
    },
  });

export default getTheme;