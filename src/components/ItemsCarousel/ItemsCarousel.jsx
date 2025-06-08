import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "../ItemCard";
import { useTheme } from "@emotion/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        style={{ ...arrowStyle, right: "-40px" }} 
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
        style={{ ...arrowStyle, left: "-40px" }} 
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
    //slidesToShow: 4,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xxl,  // 2560px
        settings: {
            slidesToShow: 4,
        },
      },
      {
          breakpoint: theme.breakpoints.values.xl,  // 1920px
          settings: {
              slidesToShow: 2.5,
          },
      },
      {
          breakpoint: theme.breakpoints.values.lg,  // 1280px
          settings: {
              slidesToShow: 1.5,
          },
      }
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((car) => (
        <div key={car.id} style={{ padding: "10px" }}>
          <ItemCard id={car.id} name={car.name} price={car.price} img={car.image[0]} />
        </div>
      ))}
    </Slider>
  );
};

export default ItemsCarousel;
