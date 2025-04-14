import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProviderWrapper } from "./contexts/ThemeContext";
import Catalog from "./pages/CatalogPage";
import Home from "./pages/HomePage";

function App() {
  return (
    <ThemeProviderWrapper>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/catalog" element={<Catalog />}/>
        </Routes>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;
