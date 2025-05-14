import React from "react";
import { Box, Grid2 } from "@mui/material";
import cars from "../../data/carsData";
import ItemCard from "../ItemCard";

const RecentlyAdded = () => {
    return ( 
        <Box sx={{
            padding: "20px",
            color: "white",     
            display: "flex",
            flexDirection: "column",   
            alignItems: "center",   
            height: "100%"
        }}>
            <Grid2 
                container 
                spacing={2}                
                justifyContent="center"
                alignItems="center"
            >
            {cars.slice(0, 4).map((car) => (
                <Grid2 item xs={12} sm={6} md={6} key={car.id}>
                    <ItemCard name={car.name} price={car.price} img={car.image[0]}/>
                </Grid2>
            ))}
            </Grid2>
        </Box> 
    );
};

export default RecentlyAdded;
