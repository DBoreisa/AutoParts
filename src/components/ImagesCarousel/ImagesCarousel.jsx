import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@emotion/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Box } from "@mui/material";

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
  
const ImagesCarousel = ({items}) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
  return (
    <Box sx={{ 
            width: "50%", 
            minWidth: "290px",   
            marginBottom: 2  
        }}>
        <Slider {...settings}>
          {items.map((image, index) => (
            <Box key={index}>
              <Box
              component="img"
              src={image.image}
              alt={`Slide ${index}`}
              sx={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
              }}
              />
            </Box>
          ))}
        </Slider>
    </Box>
  );
};

export default ImagesCarousel;