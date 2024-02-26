import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import foto from "../../assets/Refregirator_Repair.webp";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";

const RefrigeratorRepair = (props) => {
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
      <SubNavbar title="Refrigerator Repair" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        paddingLeft={isSmallScreen ? 3 : 25}
        paddingRight={isSmallScreen ? 3 : 25}
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
            Refrigerator Repair
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#828893",
              fontWeight: 400,
            }}
          >
            A refrigerator is an integral part of your home and household, so
            when it breaks down, it can be very stressful and inconvenient.
            However, by contacting Ace Tech, you can rest assured that your
            refrigerator will be restored to working order as quickly and
            efficiently as possible.
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
              Our refrigerator repair technicians have extensive experience and
              professional knowledge to understand the cause of your
              refrigerator’s breakdown and restore it to working order, allowing
              you to enjoy fresh food again and store it in the most comfortable
              conditions possible.
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#828893",
            fontWeight: 400,
            marginTop: "50px",
          }}
        >
          The company is committed to providing high-quality and professional
          refrigerator repair services, offering its customers transparent and
          flat-rate pricing. In addition, we provide our customers with a 90-day
          warranty on all parts and labor, which shows our confidence in the
          quality of our work.
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
            Servicing Most Refrigeration Appliances:
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
                <li>Freezers</li>
                <li>Refrigerators</li>
                <li>Wine coolers</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>Ice machines/ice makers</li>
                <li>Kegerators</li>
                <li>Outdoor refrigeration units</li>
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
            We provide repair services for all major brands, including but not
            limited to:
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
                <li>Sub-Zero</li>
                <li>Viking</li>
                <li>Dacor</li>
                <li>Bosch</li>
                <li>Kenmore</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>Miele</li>
                <li>Thermador</li>
                <li>Electrolux</li>
                <li>Frigidaire</li>
                <li>Whirlpool</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>KitchenAid</li>
                <li>Maytag</li>
                <li>GE</li>
                <li>And other …</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              color: "#FF6014",
              fontWeight: 600,
              marginBottom: "15px",
            }}
          >
            Here are some common indicators that there may be an issue with your
            refrigerator:
          </Typography>
          <Box
            display={"flex"}
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
                <li>
                  Inability to maintain a consistent temperature, resulting in
                  internal temperatures that are either too cold or not cold
                  enough.
                </li>
                <li>Loud noises coming from the motor area.</li>
                <li>Water leaking from the refrigerator.</li>
                <li>Doors that won’t close correctly or form a tight seal.</li>
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
                <li>The formation of ice in the fresh food section.</li>
                <li>The water dispenser is not functioning.</li>
                <li>The ice maker is not working.</li>
                <li>Error codes displayed on the digital display.</li>
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
          The main goal of Ace Tech is to provide the most convenient and
          efficient service possible. We make every effort to complete all
          repairs in one visit whenever possible. Schedule an appointment, and
          our manager will call you back.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

RefrigeratorRepair.propTypes = {};

export default RefrigeratorRepair;
