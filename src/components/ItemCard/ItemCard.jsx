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
import useCurrencyRate from "../../hooks/useCurrencyRate";
import { useCurrencyContext } from "../../contexts/CurrencyContext";

const ItemCard = ({ id, name, price, img }) => {
    const navigate = useNavigate();
    const rate = useCurrencyRate();
    const { currency } = useCurrencyContext();

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
                    title={
                        <Typography
                        variant="h6"
                        sx={{
                            fontSize: name.length > 20 ? "0.85rem" : "1.25rem",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                        >
                        {name}
                        </Typography>
                    } 
                    sx={{ 
                        textAlign: "center", 
                        padding: name.length > 20 ? "10px" : "5px",
                        borderBottom: "solid 1px #91979c",
                    }}
                />
                <CardContent sx={{paddingBottom: "100px"}}>
                    <Typography variant="body2">
                        Price: {(price * rate).toFixed(2)} {currency === "EUR" ? "€" : currency === "USD" ? "$" : currency === "GBP" ? "£" : currency}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ItemCard;