import React, { useState, useEffect } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import repair1 from "../../assets/Dishwasher-Repair.jpg";
import repair2 from "../../assets/washing-machine-repair.jpeg";
import repair3 from "../../assets/repairing-a-dishwasher.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import "./Header.css";

const Header = () => {
  const slides = [
    {
      title: "Professional services for all your home appliance needs",
      subtitle:
        "We’re proud to offer some of the lowest rates for service calls without compromising on quality In Chicago and surrounding areas.",
      buttonLabel: "More about us",
      backgroundImage: repair1,
      pagePath: "/about-us",
    },
    {
      title: "Schedule your Service Appointment Online",
      subtitle:
        "Use Our Appointment System To Book An Appointment. Just Select Time Frame By Clicking, And Submit.",
      buttonLabel: "Schedule Appointment",
      backgroundImage: repair2,
      pagePath: "/schedule-appointment",
    },
    {
      title: "We offer the lowest service call rates in the areas",
      subtitle:
        "There will be no service call charge if the repair is completed within one hour. Make An appointment online and get 7% OFF.",
      buttonLabel: "Details",
      backgroundImage: repair3,
      pagePath: "/service-rates",
    },
    {
      title: "We offer Instant & quality home appliance services",
      subtitle:
        "Ace Tech has been a trusted repair service provider for over 30 years In Chicago and surrounding areas.",
      buttonLabel: " See Details",
      backgroundImage: repair3,
      pagePath: "/services",
    },
  ];

  const isMobile = useMediaQuery("(max-width:450px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNextSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setTransitioning(false);
    }, 500);
  };

  const handlePrevSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setTransitioning(false);
    }, 500);
  };

  return (
    <Box
      className={`slide-transition ${transitioning ? "transitioning" : ""}`}
      sx={{
        position: "relative",
        backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: isMobile ? "350px" : "80vh",
        textAlign: isMobile ? "center" : "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: isTablet ? "center" : isMobile ? "center" : "left",
        color: "white",
        zIndex: 0,
        paddingLeft: isMobile ? "20px" : isTablet ? "100px" : "200px", // Изменены отступы для планшетов
        marginLeft: "-7px",
        marginRight: "-7px",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.4)", // Полупрозрачный черный оттенок
          zIndex: 2,
        },
      }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {isMouseOver && isMobile && (
        <React.Fragment>
          <Button
            variant="contained"
            color="primary"
            style={{ position: "absolute", left: "10px", top: "10px" }}
            onClick={handlePrevSlide}
          >
            <KeyboardBackspaceIcon />
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ position: "absolute", right: "10px", top: "10px" }}
            onClick={handleNextSlide}
          >
            <EastIcon />
          </Button>
        </React.Fragment>
      )}
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          letterSpacing: "2px",
          fontSize: isMobile ? "32px" : "48px",
          width: isMobile ? "100%" : "700px",
          zIndex: 999,
        }}
      >
        {slides[currentSlide].title}
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          letterSpacing: "1px",
          fontSize: isMobile ? "14px" : "16px",
          width: isMobile ? "100%" : "600px",
          zIndex: 999,
        }}
      >
        {slides[currentSlide].subtitle}
      </Typography>
      <Button
        sx={{
          maxWidth: "300px",
          backgroundColor: "#FF6014",
          color: "white",
          marginTop: "20px",
          zIndex: 999,
        }}
      >
        {slides[currentSlide].buttonLabel}
      </Button>
    </Box>
  );
};

export default Header;
