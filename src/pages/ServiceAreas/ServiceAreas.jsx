import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const ServiceAreas = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(960));

  return (
    <Box marginRight={1}>
      <Helmet>
        <title>Service Areas</title>
      </Helmet>
      {!isSmallScreen && (
        <>
          <Navbar />
          <Navbar2 />
        </>
      )}
      {isSmallScreen && <HeaderForMobile />}
      <SubNavbar title="Service Areas" />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={isSmallScreen ? "start" : "center"}
        marginLeft={1}
      >
        <h1>We cover most In Chicago and surrounding areas</h1>
        {/* <Box>
          <h2> MORRIS County, NJ</h2>

          <Box
            display={"flex"}
            flexDirection={isSmallScreen ? "column" : "row"}
            marginLeft={isSmallScreen ? 2 : 0}
          >
            <Box>
              <ul>
                <li>07034 LAKE HIAWATHA</li>
                <li>07035 LINCOLN PARK</li>
                <li>07045 MONTVILLE</li>
                <li>07046 MOUNTAIN LAKES</li>
                <li>07927 CEDAR KNOLLS</li>
                <li>07932 FLORHAM PARK</li>
                <li>07940 MADISON</li>
                <li>07961 CONVENT STATION</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>07054 PARSIPPANY</li>
                <li>07058 PINE BROOK</li>
                <li>07082 TOWACO</li>
                <li>07801 DOVER</li>
                <li>07928 CHATHAM</li>
                <li>07935 GREEN VILLAGE</li>
                <li>07950 MORRIS PLAINS</li>
                <li>07976 NEW VERNON</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>07834 DENVILLE</li>
                <li>07866 ROCKAWAY</li>
                <li>07869 RANDOLPH </li>
                <li>07878 MOUNT TABOR</li>
                <li>07930 CHESTER</li>
                <li>07936 EAST HANOVER</li>
                <li>07960 MORRISTOWN</li>
                <li>07981 WHIPPANY</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box>
          <h2> ESSEX County, NJ</h2>
          <Box
            display={"flex"}
            flexDirection={isSmallScreen ? "column" : "row"}
            marginLeft={isSmallScreen ? 2 : 0}
          >
            <Box>
              <ul>
                <li>07003 BLOOMFIELD</li>
                <li>07009 CEDAR GROVE</li>
                <li>07028 GLEN RIDGE</li>
                <li>07041 MILLBURN</li>
                <li>07050 ORANGE</li>
                <li>07078 SHORT HILLS</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>07004 FAIRFIELD</li>
                <li>07017 EAST ORANGE</li>
                <li>07039 LIVINGSTON</li>
                <li>07042 MONTCLAIR</li>
                <li>07052 WEST ORANGE</li>
                <li>07079 SOUTH ORANGE</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>07006 CALDWELL </li>
                <li>07021 ESSEX FELLS</li>
                <li>07040 MAPLEWOOD</li>
                <li>07044 VERONA</li>
                <li>07068 ROSELAND</li>
              </ul>
            </Box>
          </Box>
        </Box>
        <Box>
          <h2> UNION County, NJ</h2>
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            flexDirection={isSmallScreen ? "column" : "row"}
            marginLeft={isSmallScreen ? 2 : 0}
            marginBottom={2}
          >
            <Box>
              <ul>
                <li>07901 SUMMIT</li>
                <li>07902 SUMMIT</li>
                <li>07922 BERKELEY HEIGHTS</li>
                <li>07974 NEW PROVIDENCE</li>
                <li>07023 FANWOOD</li>
                <li>07027 GARWOOD</li>
                <li>07033 KENILWORTH</li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li>07060 NORTH PLAINFIELD</li>
                <li>07060 PLAINFIELD</li>
                <li>07063 NORTH PLAINFIELD</li>
                <li>07076 SCOTCH PLAINS</li>
                <li>07083 UNION</li>
                <li>07090 WESTFIELD</li>
                <li>07092 MOUNTAINSIDE</li>
              </ul>
            </Box>
          </Box>
        </Box> */}
      </Box>
      <Footer />
    </Box>
  );
};

ServiceAreas.propTypes = {};

export default ServiceAreas;
