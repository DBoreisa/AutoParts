import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "../ItemCard";
import cars from "../../data/carsData";
import { useTheme } from "@emotion/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    cursor: "pointer",
};

const NextArrow = ({ onClick }) => {
    const theme = useTheme();
    return (
      <div
        onClick={onClick}
        style={{ ...arrowStyle, right: "-40px" }} // adjust 'right' as needed
      >
        <IoIosArrowForward size={30} color={theme.palette.text.primary} />
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    const theme = useTheme();
    return (
      <div
        onClick={onClick}
        style={{ ...arrowStyle, left: "-40px" }} // adjust 'left' as needed
      >
        <IoIosArrowBack size={30} color={theme.palette.text.primary} />
      </div>
    );
  };
  

const ItemsCarousel = ({items}) => {
  const theme = useTheme();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {items.map((car) => (
        <div key={car.id} style={{ padding: "10px" }}>
          <ItemCard name={car.name} price={car.price} img={car.image} />
        </div>
      ))}
    </Slider>
  );
};

export default ItemsCarousel;
