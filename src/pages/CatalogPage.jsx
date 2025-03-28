import React from "react";
import Footer from "../components/Footer";
import { Box, Typography, useTheme, Grid2 } from "@mui/material";
import cars from "../data/carsData";
import ItemCard from "../components/ItemCard";

const CatalogPage = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{
        backgroundColor: theme.palette.background.default,
        height: "100%",
        padding: 6
      }}>
        <Box sx={{
          paddingTop: 3, 
          paddingBottom: 3,
          borderTop: "solid 1px",
          borderBottom: "solid 1px",
          borderColor: theme.palette.primary.main,
          textAlign: "center"
        }}>
          <Typography variant="h3" color={theme.palette.text.primary}>Products</Typography>
        </Box >
        <Box sx={{
          paddingTop: 3, 
          paddingBottom: 3,
          paddingRight: 7,
          paddingLeft: 7,
          borderBottom: "solid 1px",
          borderColor: theme.palette.primary.main,
          display: "flex",
          justifyContent: "space-between"
          }}>
            <Box sx={{display: "flex", gap: 4, color: theme.palette.text.primary}}>
              <Typography>Filter by:</Typography>
              <Typography>Sort by:</Typography>
            </Box>
            <Box sx={{color: theme.palette.text.primary}}>
              <Typography>999 products</Typography>
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
            {cars.map((car) => (
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