import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import foto from "../../assets/Dryer-Repair.png";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";

const DryerRepair = (props) => {
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
      <SubNavbar title="Dryer Repair" />

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
            Dryer Repair
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#828893",
              fontWeight: 400,
            }}
          >
            Panda Appliance Repair specialists have accumulated many years of
            experience in repairing dryers of various brands and models. We
            understand that problems with a dryer can occur at any time, so we
            are ready to accept repair calls and help you solve the problems
            that have arisen.
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
              We provide repair services for dryers of any complexity, from the
              simplest repairs to complete re-equipment of the machine. We
              provide repairs for issues such as dryer failure to start, unusual
              noise or vibration, poor drying quality, water leakage, or any
              other technical issues. <br />
              Panda Appliance Repair professionals have access to genuine dryer
              parts, which allows us to perform repairs quickly and efficiently,
              ensuring the best performance and longest life for your dryer.
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
            Common problems we fix include:
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
                <li>Lack of heat</li>
                <li>Incomplete drying</li>
                <li>Sudden shut-off</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>Unusual noises</li>
                <li>Excessive shaking or vibrating</li>
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
            We have extensive experience servicing a wide range of dryer machine
            brands, including but not limited to:
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
                <li>Kenmore</li>
                <li>GE</li>
                <li>Samsung</li>
                <li>Whirlpool</li>
                <li>LG</li>
                <li>Maytag</li>
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
                <li>Bosch</li>
                <li>Electrolux</li>
                <li>Amana</li>
                <li>Frigidaire</li>
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
          Don’t waste your time looking for a service that can provide quality
          Dryer repair. Just schedule an appointment, and we will get your
          device back up and running quickly and efficiently.
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

DryerRepair.propTypes = {};

export default DryerRepair;
