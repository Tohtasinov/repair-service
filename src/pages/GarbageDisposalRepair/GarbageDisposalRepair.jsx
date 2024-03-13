import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import foto from "../../assets/Garbage-Disposal-Repair.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";

const GarbageDisposalRepair = (props) => {
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
      <SubNavbar title="Garbage Disposal Repair" />
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
            Garbage Disposal Repair
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#828893",
              fontWeight: 400,
            }}
          >
            Garbage disposals are a convenient and environmentally friendly way
            to dispose of food waste. However, when they break down, it can be
            frustrating and lead to unpleasant odors and sewer blockages. That’s
            why it’s important to have a reliable repair service that can
            troubleshoot and fix any problems quickly and efficiently.
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={isSmallScreen ? "column" : "row"}
          marginTop={5}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box marginBottom={isSmallScreen ? 2 : 0}>
            <img
              src={foto}
              alt="foto1"
              width={isSmallScreen ? "100%" : 290}
              height={isSmallScreen ? "100%" : 200}
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
              Our team of experienced technicians can diagnose and repair any
              issue, from clogged blades to faulty motors.
              <br />
              We offer a variety of replacement parts, including blades, motors,
              and electrical components to ensure that your garbage disposal is
              operating at optimum efficiency. The company also provides regular
              maintenance services to keep your garbage disposal running
              smoothly and prevent future breakdowns.
            </Typography>
          </Box>
        </Box>

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
            Our expert technicians can replace any part of your garbage
            disposal, including:
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
                <li>Lids and baffles</li>
                <li>Blades</li>
                <li>Gaskets and seals</li>
                <li>Flanges</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>Tubing</li>
                <li>Lugs</li>
                <li>Flyweights</li>
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
          Contact us today at (872) 222-1801 24/7 or schedule a service
          appointment online and get 7% OFF s
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

GarbageDisposalRepair.propTypes = {};

export default GarbageDisposalRepair;
