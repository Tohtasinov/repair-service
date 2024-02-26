import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Импортируем Link из react-router-dom
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import refregiatorRepair1 from "../../assets/Refregirator_Repair.webp";
import refregiatorRepair2 from "../../assets/Refregirator_Repair.webp";
import refregiatorRepair3 from "../../assets/Refregirator_Repair.webp";
import refregiatorRepair4 from "../../assets/Refregirator_Repair.webp";
import refregiatorRepair5 from "../../assets/Refregirator_Repair.webp";
import refregiatorRepair6 from "../../assets/Refregirator_Repair.webp";

const cardData1 = [
  {
    image: refregiatorRepair1,
    title: "Refrigerator Repair",
    description:
      "Is your broken fridge causing you stress and inconvenience? Let Ace Tech services help you out!",
    link: "/service/refrigerator-repair", // Уникальный путь для первой карточки
  },
  {
    image: refregiatorRepair2,
    title: "Oven Repair",
    description:
      "Experiencing issues with your oven? Our experts can diagnose and fix the problem efficiently.",
    link: "/service/oven-repair", // Уникальный путь для второй карточки
  },
  {
    image: refregiatorRepair3,
    title: "Washing Machine Repair",
    description:
      "Don't let a malfunctioning washing machine disrupt your routine. Trust us to get it working smoothly again.",
    link: "/service/washing-machine-repair", // Уникальный путь для третьей карточки
  },
];

const cardData2 = [
  {
    image: refregiatorRepair4,
    title: "Dishwasher Repair",
    description:
      "Having trouble with your dishwasher? Our technicians can handle all types of dishwasher repairs.",
    link: "/service/dishwasher-repair", // Уникальный путь для четвертой карточки
  },
  {
    image: refregiatorRepair5,
    title: "Dryer Repair",
    description:
      "Is your dryer not drying properly? Count on us to quickly diagnose and fix the issue.",
    link: "/service/dryer-repair", // Уникальный путь для пятой карточки
  },
  {
    image: refregiatorRepair6,
    title: "Microwave oven repair",
    description:
      "Looking for the best microwave oven repair service at home? You found the right place.",
    link: "/service/microwave-oven-repair", // Уникальный путь для шестой карточки
  },
];

const WhatWeDo = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={isSmallScreen ? "center" : "space-around"}
        alignItems={"center"}
        marginTop={10}
        flexDirection={isSmallScreen ? "column" : "row"}
        textAlign={isSmallScreen ? "center" : "left"}
      >
        <Box>
          <Typography
            sx={{
              color: "#FF6014",
              textTransform: "uppercase",
              fontSize: "18px",
            }}
          >
            WHAT WE DO
          </Typography>
          <Typography
            sx={{
              color: "#111",
              fontWeight: 500,
              fontSize: "35px",
              width: isSmallScreen ? "100%" : "500px",
            }}
          >
            We provide quality appliance repair services
          </Typography>
          <Typography
            sx={{
              color: "#828893",
              fontWeight: 400,
              fontSize: "16px",
              width: isSmallScreen ? "100%" : "700px",
            }}
          >
            Our primary objective is to provide our customers with superior
            service and value by leveraging our extensive knowledge and
            expertise in the industry.
          </Typography>
        </Box>
        <Box>
          {/* Используем Link вместо Button и устанавливаем ссылку на нужный путь */}
          <Link to="/">
            <Button
              sx={{
                borderLeft: "1px solid #FF6014",
                borderRadius: "0px",
                color: "#FF6014",
              }}
            >
              Explore All Services
            </Button>
          </Link>
        </Box>
      </Box>
      <Box marginTop={3}>
        <Box
          display="flex"
          justifyContent="space-around"
          flexWrap="wrap"
          marginBottom={3}
        >
          {cardData1.map((card, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 380,
                marginBottom: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                height="250px"
                image={card.image}
                alt={`refregiatorRepair${index}`}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  padding={2}
                  sx={{ color: "#111" }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" padding={1}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                {/* Используем Link вместо Button и устанавливаем ссылку на нужный путь */}
                <Link to={card.link}>
                  <Button
                    sx={{
                      border: "1px solid #FF6014",
                      color: "#FF6014",
                      padding: "10px 40px ",
                      marginBottom: "20px",
                    }}
                    size="small"
                  >
                    See Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          flexWrap="wrap"
          marginBottom={3}
        >
          {cardData2.map((card, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 380,
                marginBottom: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                height="250px"
                image={card.image}
                alt={`refregiatorRepair${index}`}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  padding={2}
                  sx={{ color: "#111" }}
                >
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" padding={1}>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                {/* Используем Link вместо Button и устанавливаем ссылку на нужный путь */}
                <Link to={card.link}>
                  <Button
                    sx={{
                      border: "1px solid #FF6014",
                      color: "#FF6014",
                      padding: "10px 40px ",
                      marginBottom: "20px",
                    }}
                    size="small"
                  >
                    See Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

WhatWeDo.propTypes = {};

export default WhatWeDo;
