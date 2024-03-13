import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import foto from "../../assets/dishwasher-repair-man-repairing-appliances.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";

const DishwasherRepair = (props) => {
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
      <SubNavbar title="Dishwasher Repair" />
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
            Dishwasher Repair
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#828893",
              fontWeight: 400,
            }}
          >
            We understand that a malfunctioning dishwasher can seriously disrupt
            your daily life, so we make every effort to complete the repair as
            quickly and efficiently as possible. Panda Appliance Repair offers
            transparent and fixed prices for services and provides a 90-day
            warranty on all parts and repairs.
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
              The team consists of qualified technicians with years of
              experience in dishwasher repair. We know that your time and
              convenience are very important, so we make every effort to
              complete the repair in one visit if possible. Contact us, and we
              will be happy to help you get your dishwasher back up and running.
              Our technicians work quickly, professionally, and reliably so that
              you can enjoy the smooth operation of your appliance again.
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
            At Panda Appliance Repair, we have extensive experience servicing a
            wide range of dishwasher brands, including but not limited to:
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
                <li>Bosch</li>
                <li>Viking</li>
                <li>Maytag</li>
                <li>LG</li>
                <li>Samsung</li>
                <li>Amana</li>
                <li>Electrolux</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>KitchenAid</li>
                <li>Whirlpool</li>
                <li>GE</li>
                <li>Kenmore</li>
                <li>Frigidaire</li>
                <li>And other …</li>
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
            There are several signs that your dishwasher may be malfunctioning,
            including:
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
                <li>Failure to power on</li>
                <li>Leaking while in operation</li>
                <li>Needing multiple cycles to clean dishes</li>
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
                <li>Lack of water flow through the unit </li>
                <li>Residue of soap remaining after the cycle finishes</li>
                <li>Getting stuck on specific cycles</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

DishwasherRepair.propTypes = {};

export default DishwasherRepair;
