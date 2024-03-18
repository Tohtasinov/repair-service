import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./Statistics.css";

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const step = value > 1000 ? 40 : 1; // Определяем шаг анимации в зависимости от значения числа
    const interval = setInterval(() => {
      setDisplayValue((prevValue) => {
        if (prevValue < value) {
          return prevValue + step;
        } else {
          clearInterval(interval);
          return value;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <span>
      {displayValue}
      {value > 1000 && "+"}
      {value === 95 && "%"}
      {value === 90 && "-day"}
    </span>
  );
};

const Statistics = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  return (
    <Box className="container">
      <Box textAlign={"center"}>
        <Typography
          variant="h6"
          style={{
            fontWeight: 600,
            fontSize: "25px",
          }}
        >
          Looking for fast and reliable appliance repair services in in New
          Jersey?
        </Typography>
        <Typography
          variant="h5"
          className="Look"
          marginTop={2}
          style={{
            fontWeight: 600,
            fontSize: "35px",
          }}
        >
          Look no further than Panda Appliance Repair!
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        color={"black"}
        flexDirection={isSmallScreen ? "column" : "row"}
        alignItems={"center"}
      >
        <Box
          sx={{
            backgroundColor: "white",
            margin: "20px",
            width: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontFamily: "Ubuntu Mono",
              fontWeight: 600,
              color: "#FF6014",
              fontSize: "40px",
              letterSpacing: "2px",
            }}
          >
            <AnimatedNumber value={20000} />
          </Typography>
          <Typography style={{ color: "#111", fontWeight: 600 }}>
            Projects Completed
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            margin: "20px",
            width: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontFamily: "Ubuntu Mono",
              fontWeight: 600,
              color: "#FF6014",
              fontSize: "40px",
              letterSpacing: "2px",
            }}
          >
            <AnimatedNumber value={95} />
          </Typography>
          <Typography style={{ color: "#111", fontWeight: 600 }}>
            Same-Day Service
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            margin: "20px",
            width: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="h4"
            style={{
              fontFamily: "Ubuntu Mono",
              fontWeight: 600,
              color: "#FF6014",
              fontSize: "40px",
              letterSpacing: "2px",
            }}
          >
            <AnimatedNumber value={90} />
          </Typography>
          <Typography style={{ color: "#111", fontWeight: 600 }}>
            90-day warranty
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {};

export default Statistics;
