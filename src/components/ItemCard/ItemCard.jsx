import React from "react";
import { 
    Card, 
    CardMedia, 
    CardContent, 
    CardHeader, 
    Typography, 
    CardActionArea 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ id, name, price, img }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${id}`);
    };

    return (
        <Card elevation={3} sx={{width: "260px", height:"220px"}}>
            <CardActionArea 
                sx={{
                    "&:hover": { transform: "scale(1.02)" },
                    transition: "all 0.3s ease",
                }}
                onClick={handleClick}
            >
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