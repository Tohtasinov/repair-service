import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./Navbar.css";

const SubNavbar = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  const { title } = props;

  return (
    <Box
      id="container"
      sx={{ textAlign: "center", textTransform: "uppercase" }}
    >
      <Typography
        sx={{ marginTop: "40px" }}
        variant={isSmallScreen ? "h5" : "h3"}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SubNavbar;
