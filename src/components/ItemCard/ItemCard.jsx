import React from "react";
import { Card, CardMedia, CardContent, CardHeader, Typography, CardActionArea } from "@mui/material";

const ItemCard = ({ name, price, img }) => {
    return (
        <Card elevation={3} sx={{width: "260px", height:"220px"}}>
            <CardActionArea sx={{
                "&:hover": {
                    transform: "scale(1.02)",
                },
                transition: "all 0.3s ease"
            }}>
                <CardMedia component="img" height="140" image={img} alt={name} />
                <CardHeader
                    title={name} 
                    sx={{ 
                        textAlign: "center", 
                        padding: "5px", 
                        borderBottom: "solid 1px #91979c" 
                    }}
                />
                <CardContent sx={{paddingBottom: "100px"}}>
                    <Typography variant="body2">Price: {price} €</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ItemCard;