import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import foto from "../../assets/washing-machine-repair.jpeg";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";
import { Helmet } from "react-helmet";

const WashingMachineRepair = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(960));

  return (
    <Box>
      <Helmet>
        <title>Washing Machine Repair</title>
      </Helmet>
      {!isSmallScreen && (
        <>
          <Navbar />
          <Navbar2 />
        </>
      )}
      {isSmallScreen && <HeaderForMobile />}
      <SubNavbar title="Washing Machine Repair" />
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
            Washing machine Repair
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#828893",
              fontWeight: 400,
            }}
          >
            Has your washing machine stopped working, and do you need reliable
            and professional help to repair it?Panda Appliance Repair is the
            company you can count on.
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
              Our highly qualified technicians will be happy to help you get
              your irreplaceable home appliance back up and running. We provide
              fast and reliable repairs for all types of washing machines,
              including such well-known brands as LG, Maytag, Bosch, Samsung,
              and others. Our team will do everything possible to complete the
              repair in one visit, saving you time and money.
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
          We understand how important it is for you to keep your washing machine
          in top condition, so we offer transparent and fixed prices for all
          types of repairs. We have no hidden extras and make every effort to
          complete repairs in one visit whenever possible. You can be confident
          in the quality of our work. ContactPanda Appliance Repair, and we will
          gladly get your washing machine back in service, so you can enjoy its
          functionality again.
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
            AtPanda Appliance Repair, we have extensive experience servicing a
            wide range of washing machine brands, including but not limited to:
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
                <li>Kenmore</li>
                <li>GE</li>
                <li>Samsung</li>
                <li>Whirlpool</li>
                <li>LG</li>
                <li>Maytag</li>
              </ul>
            </Box>
            <Box>
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
        <Box>
          <Typography
            sx={{
              fontSize: "25px",
              color: "#111",
              fontWeight: 600,
              marginBottom: "15px",
            }}
          >
            Are you experiencing issues with your washing machine? Some common
            problems include:
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
                <li>Failure to drain</li>
                <li>Inability to spin</li>
                <li>Difficulty agitating</li>
                <li>Failure to fill</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>Error codes displaying</li>
                <li>Leaking</li>
                <li>Unbalanced or shaking during operation</li>
                <li>Noisy or loud operation</li>
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
          We are happy to provide washing machine repair services In Chicago and
          surrounding areas. No matter what model or brand of appliance you
          have, our experienced team of technicians will be able to quickly and
          efficiently identify and resolve any issues with your appliance.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

WashingMachineRepair.propTypes = {};

export default WashingMachineRepair;
