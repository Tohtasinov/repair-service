import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import brand1 from "../../assets/16.webp";
import brand2 from "../../assets/10.webp";
import brand3 from "../../assets/11.webp";
import brand4 from "../../assets/2.webp";
import brand5 from "../../assets/7.webp";
import brand6 from "../../assets/8.webp";

const Brands = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Список изображений
  const images = [brand1, brand2, brand3, brand4, brand5, brand6];

  useEffect(() => {
    // Функция для автоматического переключения изображений каждые 5 секунд
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <Box
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

Brands.propTypes = {};

export default Brands;
