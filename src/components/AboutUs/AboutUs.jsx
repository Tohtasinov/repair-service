import React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import support from "../../assets/support.png";
import target from "../../assets/target.png";
import staff from "../../assets/staff.png";
import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";

const AboutUs = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  return (
    <Grid
      container
      marginTop={10}
      paddingLeft={isSmallScreen ? 0 : 19}
      flexDirection={isSmallScreen ? "column" : "row"}
    >
      <Grid
        item
        xs={isSmallScreen ? 12 : 5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ marginLeft: isSmallScreen ? "0" : "20px" }}>
          <Typography
            variant="h4"
            color="#111"
            style={{ fontFamily: "Ubuntu Mono", fontWeight: 600 }}
          >
            Successful customer experiences since 1993
          </Typography>
          <Typography marginTop={2} style={{ color: "grey" }}>
            Our team of skilled professionals offers friendly, professional
            service and uses factory authorized parts for most major brands.
            We’re proud to offer some of the lowest rates for service calls
            without compromising on quality in Morris Essex and some areas of
            Union County, New Jersey.
          </Typography>
          <Button
            sx={{ marginTop: 2, border: "1px solid grey", color: "black" }}
          >
            <Typography>read more</Typography>
            <ArrowRightAltIcon />
          </Button>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          sx={{
            gap: 5,
            marginTop: 2,
            marginLeft: isSmallScreen ? "0" : "30px",
          }}
          flexDirection={isSmallScreen ? "column" : "row"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={isSmallScreen ? 300 : 160}
            boxShadow={1}
            paddingTop={3}
            paddingBottom={3}
          >
            <img src={support} alt="support" width={45} height={45} />
            <Typography variant="h6">24/7 Online Support</Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={isSmallScreen ? 300 : 160}
            boxShadow={1}
            paddingTop={3}
            paddingBottom={3}
          >
            <img src={target} alt="target" width={45} height={45} />
            <Typography variant="h6">
              More then 9 Years Of Experience
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={isSmallScreen ? 300 : 160}
            boxShadow={1}
            paddingTop={3}
            paddingBottom={3}
          >
            <img src={staff} alt="staff" width={45} height={45} />
            <Typography variant="h6">Skilled technician</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={isSmallScreen ? 12 : 5} marginTop={10}>
        <Box marginLeft={isSmallScreen ? 0 : 10}>
          <img
            src={about1}
            alt="about"
            width={445}
            style={{
              marginLeft: isSmallScreen ? "0" : "90px",
              display: isSmallScreen ? "none" : "flex",
            }}
          />
          <img
            src={about2}
            alt="about"
            width={isSmallScreen ? "100%" : 445}
            style={{
              marginTop: isSmallScreen ? "0" : "-100px",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
