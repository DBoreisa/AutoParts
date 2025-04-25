import React from "react";
import Footer from "../components/Footer";
import { Box, Typography, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import cars from "../data/carsData";
import ImagesCarousel from "../components/ImagesCarousel";

const DetailsPage = () => {
    const theme = useTheme();
    const { id } = useParams();
    const car = cars.find((car) => car.id.toString() === id);

    return (
        <Box sx={{minHeight: "calc(100vh - 50px)", 
                    backgroundColor: theme.palette.background.default,
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "50px"
                }}
        > 
            <Box sx={{
                      maxWidth: "1200px",
                      minHeight: "calc(100vh - 90px)",
                      width: "100%",
                      margin: "auto",
                      boxShadow: 3
                  }}
            >
                <Box sx={{
                        display: "flex",
                        padding: 5,
                }}
                >
                    <ImagesCarousel items={car.image}/>
                </Box>
            </Box>
            <Footer/>
        </Box>
    );
};

export default DetailsPage;