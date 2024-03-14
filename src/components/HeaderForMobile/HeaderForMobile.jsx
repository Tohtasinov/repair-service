import React, { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import icon from "../../assets/panda.jpg";

const HeaderForMobile = (props) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <img
          src={icon}
          alt="icon"
          height={60}
          width={60}
          style={{ borderRadius: "50px" }}
        />
        <Typography marginLeft={2}>Panda Appliance Repair</Typography>
      </Box>
      <Box width={32} />{" "}
      <IconButton
        aria-label="menu"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenuClick}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={menuAnchorEl}
        keepMounted
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            width: "90%",
          },
        }}
      >
        <MenuItem component={Link} to="/">
          Home
        </MenuItem>
        <MenuItem onClick={handleServicesClick}>Services</MenuItem>
        <MenuItem component={Link} to="/about">
          About Us
        </MenuItem>
        <MenuItem component={Link} to="/pricing">
          Pricing
        </MenuItem>
        <MenuItem component={Link} to="/service-areas">
          Service Areas
        </MenuItem>
        <MenuItem component={Link} to="/contact">
          Contact
        </MenuItem>
      </Menu>
      <Menu
        id="services-menu"
        anchorEl={servicesAnchorEl}
        keepMounted
        open={Boolean(servicesAnchorEl)}
        onClose={handleServicesClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            width: "90%",
          },
        }}
      >
        <MenuItem component={Link} to="/service/refrigerator-repair">
          Refrigerator Repair
        </MenuItem>
        <MenuItem component={Link} to="/service/dishwasher-repair">
          Dishwasher Repair
        </MenuItem>
        <MenuItem component={Link} to="/service/washing-machine-repair">
          Washing Machine Repair
        </MenuItem>
        <MenuItem component={Link} to="/service/dryer-repair">
          Dryer Repair
        </MenuItem>
        <MenuItem component={Link} to="/service/oven-repair">
          Oven Repair
        </MenuItem>
        <MenuItem component={Link} to="/service/microwave-oven-repair">
          Microwave Oven Repair
        </MenuItem>
        <MenuItem component={Link} to="/service/air-conditioning-repair">
          Air Conditioning Repair
        </MenuItem>
        <MenuItem component={Link} to="/service/furnace-repair">
          Furnace Repair
        </MenuItem>
        <MenuItem component={Link} to="/service/garbage-disposal-repair">
          Garbage Disposal Repair
        </MenuItem>
      </Menu>
    </Box>
  );
};

HeaderForMobile.propTypes = {};

export default HeaderForMobile;
