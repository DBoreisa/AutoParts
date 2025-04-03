import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "../ItemCard";
import cars from "../../data/carsData";
import { useTheme } from "@emotion/react";

const ItemsCarousel = () => {
    const theme = useTheme();
    
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "90px",
        slidesToShow: 3,
        speed: 500,
        
    };

  return (
    <Slider {...settings}>
    {cars.slice(0, 4).map((car) => (
      <div key={car.id} style={{ padding: "10px" }}> 
        <ItemCard name={car.name} price={car.price} img={car.image} />
      </div>
    ))}
  </Slider>
  );
};

export default ItemsCarousel;
