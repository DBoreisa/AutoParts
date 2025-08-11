import React from "react";
import { Box, Grid2 } from "@mui/material";
import useProducts from "../../hooks/useProducts"
import ItemCard from "../ItemCard";
import { useNavigate } from "react-router-dom";

const RecentlyAdded = () => {
    const navigate = useNavigate();
    const products = useProducts();

    const handleClick = (id) => {
        navigate(`/details/${id}`);
    };

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
            {products.slice(0, 4).map((product) => (
                <Grid2 
                    item 
                    xs={12} 
                    sm={6} 
                    md={6} 
                    key={product.id}
                    onClick={() => handleClick(product.id)}
                >
                    <ItemCard name={product.name} price={product.price} img={product.images[0]?.image}/>
                </Grid2>
            ))}
            </Grid2>
        </Box> 
    );
};

export default RecentlyAdded;
