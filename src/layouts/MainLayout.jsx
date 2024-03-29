import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Navbar2 from "../components/Navbar/Navbar2";
import Header from "../components/Header/Header";
import AboutUs from "../components/AboutUs/AboutUs";
import Statistics from "../components/Statistics/Statistics";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/Footer";
import HeaderForMobile from "../components/HeaderForMobile/HeaderForMobile";
import ChatButton from "../components/ChatBot/ChatButton";
import { Helmet } from "react-helmet";
import Discounts from "../components/Discounts/Discounts";

function MainLayout() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(1100));

  return (
    <Box>
      <Helmet>
        <title>Panda Appliance Repair</title>
      </Helmet>
      {!isSmallScreen && (
        <>
          <Navbar />
          <Navbar2 />
        </>
      )}
      {isSmallScreen && <HeaderForMobile />}
      <Header />
      <AboutUs />
      <Statistics />
      <WhatWeDo />
      <Discounts />
      <Footer />
      <ChatButton />
    </Box>
  );
}

export default MainLayout;
