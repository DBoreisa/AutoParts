import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProviderWrapper } from "./contexts/ThemeContext";
import Catalog from "./pages/CatalogPage";
import Home from "./pages/HomePage";
import Details from "./pages/DetailsPage";
import { SearchProviderWrapper } from "./contexts/SearchContext";

function App() {
  return (
    <ThemeProviderWrapper>
      <SearchProviderWrapper>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/catalog" element={<Catalog />}/>
            <Route path="/details/:id" element={<Details />}/>
          </Routes>
        </Router>
      </SearchProviderWrapper>
    </ThemeProviderWrapper>
  );
};

export default App;
