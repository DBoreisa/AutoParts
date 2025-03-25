import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProviderWrapper } from "./ThemeContext";

function App() {
  return (
    <ThemeProviderWrapper>
      <Router>
        <NavBar />
        <Routes>
          
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
}

export default App;
