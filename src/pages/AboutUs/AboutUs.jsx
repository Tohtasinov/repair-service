import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import photo from "../../assets/panda.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CheckIcon from "@mui/icons-material/Check";
import "./aboutUs.css";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";

const AboutUs = (props) => {
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
      <SubNavbar title="About US" />
      <Box
        display={"flex"}
        sx={{
          padding: "70px 0",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
        justifyContent={"center"}
      >
        <Box marginTop={5}>
          <img
            src={photo}
            alt="photo1"
            height={isSmallScreen ? "100%" : 445}
            width={isSmallScreen ? "100%" : 445}
          />
        </Box>
        <Box
          width={isSmallScreen ? "100%" : 630}
          marginLeft={isSmallScreen ? 0 : 5}
        >
          <Typography
            sx={{
              color: "#FF6014",
              fontSize: "18px",
              fontWeight: 500,
              marginTop: "20px",
            }}
          >
            Panda Appliance Repair
          </Typography>
          <Typography
            sx={{
              color: "#111",
              fontSize: "35px",
              fontWeight: 500,
              marginTop: "20px",
            }}
          >
            We Provide Best Service to Fix your Appliance
          </Typography>
          <Typography
            sx={{
              color: "#111",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "30px",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Success Experiences since 1993
          </Typography>
          <Typography
            sx={{
              color: "#828893",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "30px",
            }}
          >
            Panda Appliance Repair has been a trusted repair service provider
            for over 30 years in Morris Essex and some areas of Union County, in
            New Jersey. Our primary objective is to provide our customers with
            superior service and value by leveraging our extensive knowledge and
            expertise in the industry.
          </Typography>
          <Box
            display={"flex"}
            marginTop="10px"
            gap={isSmallScreen ? 3 : 5}
            sx={{ flexDirection: isSmallScreen ? "column" : "row" }}
          >
            <Box
              display="flex"
              flexDirection="column"
              color={"black"}
              marginRight="20px"
              gap={2}
            >
              <Typography
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "5px",
                  display: "flex",
                }}
              >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#FF6014" }} />
                Friendly service
              </Typography>
              <Typography
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "5px",
                  display: "flex",
                }}
              >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#FF6014" }} />
                Skilled technicians
              </Typography>
              <Typography
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                }}
              >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#FF6014" }} />
                Lowest Service Call Prices In The Areas
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" color={"black"} gap={2}>
              <Typography
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "5px",
                  display: "flex",
                }}
              >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#FF6014" }} />
                95% Same-Day Service
              </Typography>
              <Typography
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "5px",
                  display: "flex",
                }}
              >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#FF6014" }} />
                Factory authorized parts
              </Typography>
              <Typography
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginBottom: "20px",
                  display: "flex",
                }}
              >
                <KeyboardDoubleArrowRightIcon sx={{ color: "#FF6014" }} />
                90-day Warranty
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              color: "#828893",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "30px",
            }}
          >
            We're proud to offer some of the lowest rates for service calls
            without compromising on quality.
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: isSmallScreen ? "white" : "#f8f9fc ",
          padding: isSmallScreen ? "0" : "70px 0",
          marginBottom: isSmallScreen ? "50px" : "0",
        }}
      >
        <Grid item width={570}>
          <Typography
            sx={{
              color: "#FF6014",
              fontSize: "18px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            WHY CHOOSE US
          </Typography>
          <Typography
            sx={{
              color: "#111",
              fontSize: "35px ",
              fontWeight: 600,
              margin: "15px 0",
            }}
          >
            Why we are Different from the others
          </Typography>
          <Typography>
            Our commitment to staying up-to-date with the latest information and
            services in the industry is one of our top priorities at Panda
            Appliance Repair. As a result, we are equipped to handle any service
            and repair needs you may have. Our team service many major brands
            and in 95% cases we offer same-day service to ensure fast, friendly,
            and affordable repair services.
          </Typography>
        </Grid>
        <Grid
          item
          width={570}
          height={260}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          sx={{ backgroundColor: "white" }}
          gap={1}
        >
          <Typography
            display={"flex"}
            sx={{
              color: "#333",
              fontSize: "15px",
              fontWeight: 400,
              padding: "5px 15px",
            }}
          >
            <CheckIcon sx={{ color: "#FF6014" }} />
            No service fee if a repair is completed within the first hour
          </Typography>
          <Typography
            display={"flex"}
            sx={{
              color: "#333",
              fontSize: "15px",
              fontWeight: 400,
              padding: "5px 15px",
            }}
          >
            <CheckIcon sx={{ color: "#FF6014" }} />
            Our technicians have a stock of parts that can cover 90% of common
            issues
          </Typography>
          <Typography
            display={"flex"}
            sx={{
              color: "#333",
              fontSize: "15px",
              fontWeight: 400,
              padding: "5px 15px",
            }}
          >
            <CheckIcon sx={{ color: "#FF6014" }} />
            Our standard warranty covers the repairs we make for a period of 90
            days
          </Typography>
          <Typography
            display={"flex"}
            sx={{
              color: "#333",
              fontSize: "15px",
              fontWeight: 400,
              padding: "5px 15px",
            }}
          >
            <CheckIcon sx={{ color: "#FF6014" }} />
            We offer flexible scheduling options, and you can make an
            appointment with us 24/7
          </Typography>
        </Grid>
      </Grid>
      <Box
        id="about"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: isSmallScreen ? "30px" : "40px",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          We work hard to give you the best service
        </Typography>
        <Typography
          sx={{
            color: "#eee",
            fontSize: isSmallScreen ? "20px" : "17px",
            fontWeight: 400,
            marginTop: "20px",
            lineHeight: "30px",
            width: isSmallScreen ? "90%" : "60%",
            textAlign: "center",
          }}
        >
          If you need emergency appliance repair services don't hesitate to give
          us a call. Our friendly staff will be happy to assist you with
          repairing your appliance.
        </Typography>
        <Button
          sx={{
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: "14px",
            border: "2px solid #fff",
            color: "#FF6014",
            backgroundColor: "#fff",
            latterSpacing: "1px",
            padding: "12px 35px",
            marginTop: "30px",
          }}
        >
          Book an appointment
        </Button>
      </Box>
      <WhatWeDo />
      <Footer />
    </Box>
  );
};

export default AboutUs;
