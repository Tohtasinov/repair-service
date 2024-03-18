import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import foto from "../../assets/appliance-repair-services.webp";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";
import { Helmet } from "react-helmet";

const OvenRepair = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  return (
    <Box>
      <Helmet>
        <title>Oven Repair</title>
      </Helmet>
      {!isSmallScreen && (
        <>
          <Navbar />
          <Navbar2 />
        </>
      )}
      {isSmallScreen && <HeaderForMobile />}
      <SubNavbar title="Oven Repair" />
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
            Oven Repair
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#828893",
              fontWeight: 400,
            }}
          >
            Panda Appliance Repair’s skilled technicians are ready to provide
            reliable oven, gas range, and stove repair services in Morris,
            Essex, and some areas of Union County, in New Jersey. We understand
            that a kitchen appliance breakdown can be a real inconvenience,
            which is why we offer fast and efficient service.
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
              Our technicians have many years of experience working with various
              types of ovens, ranges, and cooktops, so they can solve any
              problem you may have with your appliance. We offer both repairs of
              electric and gas appliances. In addition to repairs, we also offer
              preventive maintenance, which will help keep your appliance in
              good condition for a long time. We recommend that you have
              preventive maintenance once a year to avoid possible breakdowns
              and ensure the smooth operation of your oven, stove, or cooktop.
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
          Panda Appliance Repair works to provide comfort and convenience in
          everyday life. Contact us for professional oven repair assistance, and
          we will be happy to help you bring warmth back to your kitchen.
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
            Panda Appliance Repair technicians are capable of repairing a wide
            range of stoves and ovens, including but not limited to:
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
                <li>Cooktops</li>
                <li>Ovens</li>
                <li>Range hoods</li>
                <li>Vent hoods</li>
                <li>Wall ovens</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>Hood oven ranges</li>
                <li>Range</li>
                <li>Stoves</li>
                <li>Ventilation systems</li>
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
            Oven & Stove Brands We Commonly Service:
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
                <li>Whirlpool</li>
                <li>Viking</li>
                <li>Dacor</li>
                <li>Electrolux</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>GE</li>
                <li>KitchenAid</li>
                <li>Thermador</li>
                <li>And other …</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>Maytag</li>
                <li>Wolf</li>
                <li>Frigidaire</li>
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
            FEEL FREE TO REACH OUT TO US IMMEDIATELY IF YOU EXPERIENCE ANY OF
            THESE ISSUES OR ENCOUNTER OTHER MALFUNCTIONS WITH YOUR APPLIANCES:
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
                <li>Burner overheats regardless of the setting</li>
                <li>Indicator light remains lit</li>
                <li>Oven self-cleaning function fails</li>
                <li>Oven baking or broiling function stops working</li>
                <li>Bake or broil heating element malfunctions</li>
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
                <li>Burner fails to come on</li>
                <li>TOven door won’t open</li>
                <li>Oven heats poorly or not at all</li>
                <li>Oven temperature fluctuates widely</li>
                <li>If you notice the smell of gas while baking</li>
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
          The main goal of Panda Appliance Repair is to provide the most
          convenient and efficient service possible. We make every effort to
          complete all repairs in one visit whenever possible. Schedule an
          appointment, and our manager will call you back.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

OvenRepair.propTypes = {};

export default OvenRepair;
