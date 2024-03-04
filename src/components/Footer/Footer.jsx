import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import icon from "../../assets/footer-logo.png";

const Footer = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  return (
    <Box
      padding="40px 20px"
      backgroundColor="#182433"
      color="white"
      marginBottom={-2}
      marginLeft={-1}
      marginRight={-1}
    >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems={isSmallScreen ? "start" : "center"}
        padding="40px 20px"
        backgroundColor="#182433"
        color="white"
        sx={{ flexDirection: isSmallScreen ? "column" : "row" }}
      >
        <Box
          display="flex"
          alignItems="start"
          flexDirection={"column"}
          justifyContent={"start"}
          marginRight="20px"
        >
          <img src={icon} alt="icon" style={{ marginBottom: "10px" }} />
          <Typography
            variant="body1"
            maxWidth={400}
            sx={{ marginBottom: isSmallScreen ? "50px" : "0" }}
          >
            Ace Tech offers fast, friendly and professional appliance repair
            services.
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          marginRight="50px"
          marginTop={-1}
        >
          <Box
            marginRight="30px"
            sx={{ marginBottom: isSmallScreen ? "50px" : "0" }}
          >
            <Typography
              variant="h6"
              sx={{ borderBottom: " 2px solid #FF6014 ", marginBottom: "10px" }}
            >
              Quick Links
            </Typography>
            <Box display={"flex"} marginTop="10px" gap={5}>
              <Box
                display="flex"
                flexDirection="column"
                color={"white"}
                marginRight="20px"
                gap={2}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginBottom: "5px",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginBottom: "5px",
                  }}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginBottom: "5px",
                  }}
                >
                  Services
                </Link>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                color={"white"}
                gap={2}
              >
                <Link
                  to="/service-areas"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginBottom: "5px",
                  }}
                >
                  Locations
                </Link>
                <Link
                  to="/pricing"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginBottom: "5px",
                  }}
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginBottom: "5px",
                  }}
                >
                  Contact us
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{ borderBottom: " 2px solid #FF6014 ", marginBottom: "10px" }}
          >
            Working Hours
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Typography>Monday - Friday: 8:00AM - 6:00PM</Typography>
            <Typography>Saturday: 10:00AM - 4:00PM</Typography>
            <Typography>Sunday: Closed</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        borderTop={"1px solid rgba(255, 255, 255, .07)"}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"start"}
      >
        <Typography
          sx={{
            marginLeft: isSmallScreen ? "20px" : "110px",
            marginTop: "20px",
            marginBottom: "-20px",
          }}
        >
          Copyright © 2024 Ace tech Inc. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
