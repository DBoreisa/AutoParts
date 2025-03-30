import React from "react";
import { Card, CardMedia, CardContent, CardHeader, Typography } from "@mui/material";

const ItemCard = ({ name, price, img }) => {
    return (
        <Card elevation={3} sx={{width: "260px", height:"220px"}}>
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
        </Card>
    );
};

export default ItemCard;