import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "../ItemCard";
import { useTheme } from "@emotion/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useProducts from "../../hooks/useProducts"

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
  const products = useProducts();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xxl,  // 2560px
        settings: {
            slidesToShow: 3.5,
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
      {products.map((product) => (
        <div key={product.id} style={{ padding: "10px" }}>
          <ItemCard id={product.id} name={product.name} price={product.price} img={product.images[0]?.image} />
        </div>
      ))}
    </Slider>
  );
};

export default ItemsCarousel;
