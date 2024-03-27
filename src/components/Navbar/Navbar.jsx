import { Box, Typography } from "@mui/material";
import React from "react";
import icon from "../../assets/panda.jpg";
import phoneIcon from "../../assets/smartphone.png";
import location from "../../assets/location.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={{ height: "145px" }}
      paddingBottom={5}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <img
            src={icon}
            alt="icon"
            width={100}
            style={{ borderRadius: "100px" }}
          />
          <Typography variant="h4" sx={{ marginLeft: "30px", color: "grey" }}>
            Panda Appliance Repair
          </Typography>
        </Box>
      </Link>

      <Box display={"flex"} alignItems={"center"}>
        <Box
          sx={{
            display: "flex",
            borderRight: "1px solid black",
            paddingRight: "30px",
          }}
        >
          <a href="tel:(872) 222-1801" style={{ textDecoration: "none" }}>
            <img
              src={phoneIcon}
              alt="phone"
              height={30}
              width={30}
              style={{
                backgroundColor: "#f9f9f9",
                padding: "10px",
                borderRadius: "50%",
                marginRight: "20px",
              }}
            />
          </a>
          <Box>
            <Typography
              sx={{ color: "#072948", fontSize: "17px", fontWeight: 600 }}
            >
              Call us
            </Typography>
            <a
              href="tel:(872) 222-1801"
              style={{ textDecoration: "none", color: "#6b739c" }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
                (872) 222-1801
              </Typography>
            </a>
          </Box>
        </Box>
        <Box sx={{ display: "flex", paddingLeft: "30px" }}>
          <a
            href="https://maps.google.com/?q=Chicago, Illinois"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={location}
              alt="phone"
              height={30}
              width={30}
              style={{
                backgroundColor: "#f9f9f9",
                padding: "10px",
                borderRadius: "50%",
                marginRight: "20px",
              }}
            />
          </a>
          <Box>
            <Typography
              sx={{ color: "#072948", fontSize: "17px", fontWeight: 600 }}
            >
              Find us
            </Typography>
            <a
              href="https://maps.google.com/?q=Chicago, Illinois"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#6b739c" }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: 400 }}>
                Chicago, Illinois
              </Typography>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
