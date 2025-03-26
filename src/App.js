import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProviderWrapper } from "./ThemeContext";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";

function App() {
  return (
    <ThemeProviderWrapper>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;
