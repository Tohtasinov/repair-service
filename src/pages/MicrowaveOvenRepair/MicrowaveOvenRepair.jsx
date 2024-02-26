import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import foto from "../../assets/Microwave-oven-repair-.webp";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";

const MicrowaveOverRepair = (props) => {
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
      <SubNavbar title="Microwave Oven Repair" />
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
            Microwave oven repair
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#828893",
              fontWeight: 400,
            }}
          >
            Did your microwave oven break down at the most unexpected moment?
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
              Stay calm as we offer fast and reliable microwave oven repair. Our
              professional technicians provide microwave repair for all types
              and brands. <br />
              We know that time is of the essence, so we always try to work
              quickly and efficiently to ensure that you get a quality microwave
              repair in the shortest possible time. We use only original spare
              parts and materials from leading manufacturers to ensure the
              reliability and durability of the repair.
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
            Types of microwave oven repairs:
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
                <li>Countertop</li>
                <li>Built-in</li>
                <li>Convection</li>
              </ul>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              color: "#111",
              fontWeight: 600,
              marginBottom: "15px",
            }}
          >
            At Ace Tech, we have extensive experience servicing a wide range of
            microwave oven brands, including but not limited to:
          </Typography>
          <Box
            display={"flex"}
            marginBottom={5}
            flexDirection={isSmallScreen ? "column" : "row"}
          >
            <Box
              sx={{
                fontSize: "16px",
                color: "#828893",
                fontWeight: 400,
              }}
            >
              <ul>
                <li>KitchenAid</li>
                <li>GE</li>
                <li>Samsung</li>
              </ul>
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                color: "#828893",
                fontWeight: 400,
              }}
            >
              <ul>
                <li>Whirlpool</li>
                <li>Maytag</li>
                <li>And other …</li>
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
          We are proud of our high-quality service and offer customers
          transparent and competitive prices for microwave oven repair. In
          addition, we guarantee the quality of our work and provide a 90-day
          warranty for all work performed and spare parts.
          <br />
          Don’t waste your time looking for a reliable and professional
          microwave oven repair service — Schedule an appointment, and we will
          help you get your microwave back up and running quickly and
          efficiently.
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

MicrowaveOverRepair.propTypes = {};

export default MicrowaveOverRepair;
