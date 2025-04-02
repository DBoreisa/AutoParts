import React ,{ useState } from "react";
import Footer from "../components/Footer";
import { Box, Typography, useTheme, Grid2 } from "@mui/material";
import ItemCard from "../components/ItemCard";
import FilterItems from "../components/FilterItems";
import SortItems from "../components/SortItems";
import cars from "../data/carsData";

const CatalogPage = () => {
  const theme = useTheme();
  const [sortedCars, setSortedCars] = useState(cars);

  return (
    <>
      <Box sx={{
        backgroundColor: theme.palette.background.default,
        height: "100%",
        padding: 6
      }}>
        <Box sx={{
          paddingTop: 4, 
          paddingBottom: 3,
          borderTop: "solid 1px",
          borderBottom: "solid 1px",
          borderColor: theme.palette.primary.main,
          textAlign: "center"
        }}>
          <Typography variant="h3" color={theme.palette.text.primary}>Products</Typography>
        </Box >
        <Box sx={{
          paddingTop: 2, 
          paddingBottom: 3,
          paddingRight: 7,
          paddingLeft: 7,
          borderBottom: "solid 1px",
          borderColor: theme.palette.primary.main,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" }
          }}>
            <Box sx={{
              display: "flex", 
              gap: {xs: 1, sm: 4}, 
              color: theme.palette.text.primary, 
              flexDirection: { xs: "column", sm: "row" },
              }}>
              <FilterItems/>
              <SortItems cars={cars} setSortedCars={setSortedCars}/>
            </Box>
            <Box sx={{color: theme.palette.text.primary, 
              paddingLeft: 5, 
              paddingBottom: {xs: 0, sm: 1},
              paddingTop: {xs: 3},
              display: "flex", 
              alignItems: "flex-end", 
              }}>
              <Typography>{sortedCars.length} products</Typography>
            </Box>
        </Box>
        <Box sx={{
          width: "100%",
          paddingTop: 3
        }}>
          <Grid2 container spacing={2} sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 4
          }}>
            {sortedCars.map((car) => (
                <Grid2 size={6} key={car.id} width={"260px"}>
                  <ItemCard name={car.name} price={car.price} img={car.image}/>
                </Grid2>
            ))}
          </Grid2>
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default CatalogPage;