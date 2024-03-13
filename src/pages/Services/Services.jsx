import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";
import refregiatorRepair1 from "../../assets/Refregirator_Repair.webp";
import refregiatorRepair2 from "../../assets/Microwave-oven-repair-.webp";
import refregiatorRepair3 from "../../assets/washing-machine-repair.jpeg";
import refregiatorRepair4 from "../../assets/dishwasher-repair-man-repairing-appliances.jpg";
import refregiatorRepair5 from "../../assets/Dryer-Repair.png";
import refregiatorRepair6 from "../../assets/Microwave-oven-repair-.webp";

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

const Services = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  return (
    <Box>
      {!isSmallScreen && (
        <>
          <Navbar />
          <Navbar2 />
        </>
      )}
      {isSmallScreen && <HeaderForMobile />}
      <SubNavbar title="Services" />

      <Box width={"80%"} marginLeft={10}>
        <Typography
          sx={{
            fontSize: "30px",
            color: "#111",
            fontWeight: 600,
            marginBottom: "15px",
            marginTop: "50px",
          }}
        >
          We provide a wide range of services
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#828893",
            fontWeight: 400,
          }}
        >
          At Panda Appliance Repair, we are committed to providing prompt and
          professional appliance repair services at affordable prices. Whether
          your appliance requires a simple fix or a more complex repair, you can
          trust our experienced team to get the job done right.
        </Typography>
      </Box>
      <Box>
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    padding={1}
                  >
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    padding={1}
                  >
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
      <Footer />
    </Box>
  );
};

export default Services;
