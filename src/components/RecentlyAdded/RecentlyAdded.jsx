import React from "react";
import { Box, Typography, Grid2, Card, CardMedia, CardContent, CardHeader, useTheme } from "@mui/material";
import cars from "../../data/carsData";
import ItemCard from "../ItemCard";

const RecentlyAdded = () => {
    const theme = useTheme();
    return ( 
        <Box sx={{
            padding: "20px",
            color: "white",     
            display: "flex",
            flexDirection: "column",   
            alignItems: "center",   
            height: "100%",
            width: "100%",
            margin: "0 auto",
        }}>
            <Typography variant="h5" gutterBottom textAlign="center">
                Recently Added: 
            </Typography>
            <Grid2 container spacing={2} sx={{flexDirection: { xs: "column", lg: "row" }}}>
            {cars.slice(0, 4).map((car) => (
                <Grid2 item xs={10} sm={6} md={4} lg={2} key={car.id}>
                    <ItemCard name={car.name} price={car.price} img={car.image}/>
                </Grid2>
            ))}
            </Grid2>
        </Box> 
    );
};

export default RecentlyAdded;
