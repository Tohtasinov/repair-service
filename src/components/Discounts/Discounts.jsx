import React from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery } from "@mui/material";
import coupon1 from "../../assets/Coupon1.png";
import coupon2 from "../../assets/Coupon2.png";

const Discounts = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  return (
    <Box marginBottom={10}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginLeft={isSmallScreen ? 0 : 17}
        alignItems={isSmallScreen ? "center" : "start"}
      >
        <h4 style={{ fontSize: "20px", color: "#FF6014", margin: "0" }}>
          DISCOUNTS
        </h4>
        <h2
          style={{
            fontSize: isSmallScreen ? "25px" : "35px",
            color: "#111",
            fontWeight: 500,
            margin: "15px 0",
            textAlign: isSmallScreen ? "center" : "start",
          }}
        >
          Currently available Coupons and Special Promotions
        </h2>
      </Box>

      <Box
        display={"flex"}
        flexDirection={isSmallScreen ? "column" : "row"}
        justifyContent={"space-around"}
      >
        <img
          src={coupon1}
          alt="coupon"
          style={{
            borderRadius: "20px",
            marginBottom: isSmallScreen ? "20px" : "0",
          }}
        />
        <img src={coupon2} alt="coupon" style={{ borderRadius: "20px" }} />
      </Box>
    </Box>
  );
};

Discounts.propTypes = {};

export default Discounts;
