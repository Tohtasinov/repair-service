import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import foto from "../../assets/air-conditioning-repair.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";

const AirConditionRepair = (props) => {
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
      <SubNavbar title="Air condition repair" />

      <Box
        display={"flex"}
        flexDirection={"column"}
        paddingLeft={isSmallScreen ? 2 : 25}
        paddingRight={isSmallScreen ? 2 : 25}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              color: "#111",
              fontWeight: 600,
              marginBottom: "15px",
              marginTop: "50px",
            }}
          >
            Air condition repair
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#828893",
              fontWeight: 400,
            }}
          >
            Summer can be an incredibly enjoyable time of year if you can stay
            cool and comfortable. However, if your air conditioner breaks down,
            it can put a damper on your plans. That’s why Ace Tech’s team of
            skilled technicians is ready to provide fast and reliable air
            conditioning repair services for residents of Morris, Essex, and
            some areas of Union County.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          marginTop={5}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={isSmallScreen ? "column" : "row"}
        >
          <Box marginBottom={isSmallScreen ? 2 : 0}>
            <img
              src={foto}
              alt="foto1"
              width={isSmallScreen ? "100%" : 290}
              height={isSmallScreen ? "100%" : 200}
              sx
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#828893",
                fontWeight: 400,
                padding: isSmallScreen ? "0" : "50px",
              }}
            >
              We understand how important it is to keep your home cool during
              the summer months, which is why we work hard to complete all
              repairs in one visit. <br />
              Our technicians are fully equipped to handle a wide range of air
              conditioning jobs, including unit repairs, refrigerant recharges,
              thermostat replacements, and more.
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#828893",
            fontWeight: 400,
          }}
        >
          Don’t let an air conditioning breakdown ruin your summer fun – call
          Ace Tech today!
        </Typography>

        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              color: "#111",
              fontWeight: 600,
              marginBottom: "15px",
              marginTop: "50px",
            }}
          >
            The team of technicians at Ace Tech offers the following services:
          </Typography>
          <Box
            display={"flex"}
            flexDirection={isSmallScreen ? "column" : "row"}
            sx={{
              fontSize: "16px",
              color: "#828893",
              fontWeight: 400,
            }}
          >
            <Box>
              <ul>
                <li>AC unit repairs, no matter the size of the problem</li>
                <li>Refrigerant charge in the air conditioner</li>
                <li>Thermostat replacement</li>
                <li>and more</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#828893",
            fontWeight: 400,
            marginBottom: "50px",
          }}
        >
          Contact us today at (888) 626-8800 24/7 or schedule a service
          appointment online and get 7% OFF
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

AirConditionRepair.propTypes = {};

export default AirConditionRepair;
