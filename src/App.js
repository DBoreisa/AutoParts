import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProviderWrapper } from "./contexts/ThemeContext";
import { SearchProviderWrapper } from "./contexts/SearchContext";
import { CartProviderWrapper } from "./contexts/CartContext";
import Catalog from "./pages/CatalogPage";
import Home from "./pages/HomePage";
import Details from "./pages/DetailsPage";
import Cart from "./components/Cart";

function App() {
  return (
    <ThemeProviderWrapper>
      <SearchProviderWrapper>
        <CartProviderWrapper>
          <Router>
            <NavBar />
            <Cart />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/catalog" element={<Catalog />}/>
              <Route path="/details/:id" element={<Details />}/>
            </Routes>
          </Router>
          
        </CartProviderWrapper>
      </SearchProviderWrapper>
    </ThemeProviderWrapper>
  );
};

export default App;
