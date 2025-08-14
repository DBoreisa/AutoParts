import React, {useState} from "react";
import Footer from "../components/Footer";
import { Box, Typography, useTheme, Grid2 } from "@mui/material";
import ItemCard from "../components/ItemCard";
import FilterItems from "../components/FilterItems";
import SortItems from "../components/SortItems";
import { useSearch } from "../contexts/SearchContext";
import useProducts from "../hooks/useProducts";

const CatalogPage = () => {
  const theme = useTheme();
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("Date");
  const { searchQuery } = useSearch();
  const products = useProducts({ sort: sortBy, filters, searchQuery });

  return (
    <Box sx={{minHeight: "calc(100vh - 50px)", 
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            flexDirection: "column",
            paddingTop: "50px"
          }}> 
      <Box sx={{
          maxWidth: {lg:"70%", xs: "100%"},
          minHeight: "calc(100vh - 90px)",
          width: "100%",
          margin: "auto",
          boxShadow: 3,
          backgroundColor: theme.palette.background.default,
      }}>
        <Box sx={{
          paddingTop: 4, 
          borderColor: theme.palette.text.primary,        
          textAlign: "center",
        }}>
          <Typography 
            variant="h3" 
            color={theme.palette.text.primary} 
            paddingBottom={3}
          >
            Products
          </Typography>
        </Box >
        <Box sx={{
            borderColor: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          }}>
            <Box sx={{
              backgroundColor: theme.palette.background.paper,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
              paddingTop: 1, 
              paddingBottom: 1,
              paddingRight: 7,
              paddingLeft: 7
            }}>
              <Box sx={{
                display: "flex", 
                gap: 4, 
                color: theme.palette.text.primary, 
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center"
                }}>
                <FilterItems filters={filters} setFilters={setFilters}/>
                <SortItems sortBy={sortBy} setSortBy={setSortBy}/>
              </Box>
              <Box sx={{color: theme.palette.text.primary,  
                paddingBottom: {xs: 0, sm: 2},
                paddingTop: {xs: 3},
                display: "flex", 
                alignItems: "flex-end",
                justifyContent: "center"
                }}>
                <Typography>{products.length} products</Typography>
              </Box>
            </Box>
        </Box>
        <Box sx={{
          width: "100%",
          paddingTop: 3,
        }}>
          <Grid2 container spacing={2} sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 4
          }}>
            {products.map((product) => (
                <Grid2 size={6} key={product.id} width={"260px"}>
                  <ItemCard id={product.id} name={product.name} price={product.price} img={product.images[0]?.image}/>
                </Grid2>
            ))}        
          </Grid2>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default CatalogPage;