import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Popover,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar2 = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const timeoutIdRef = useRef(null); // Для хранения идентификатора таймаута

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // Закрываем Popover с небольшой задержкой
    timeoutIdRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 200); // Задержка в 200 миллисекунд
  };

  const handleMouseEnterPopover = () => {
    clearTimeout(timeoutIdRef.current);
  };

  const handleServiceClick = (serviceOption) => {
    handleClose();
    switch (serviceOption) {
      case "Refrigerator Repair":
        navigate("/service/refrigerator-repair");
        break;
      case "Oven Repair":
        navigate("/service/oven-repair");
        break;
      case "Washing Machine Repair":
        navigate("/service/washing-machine-repair");
        break;
      case "Dishwasher Repair":
        navigate("/service/dishwasher-repair");
        break;
      case "Dryer Repair":
        navigate("/service/dryer-repair");
        break;
      case "Microwave Oven Repair":
        navigate("/service/microwave-oven-repair");
        break;
      case "Air Conditioning Repair":
        navigate("/service/air-conditioning-repair");
        break;
      case "Furnace Repair":
        navigate("/service/furnace-repair");
        break;
      case "Garbage Disposal Repair":
        navigate("/service/garbage-disposal-repair");
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "-35px" }}>
      <Box
        sx={{
          width: "70%",
          backgroundColor: "white ",
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "uppercase",
          fontFamily: "Poppins, san-serif",
          paddingLeft: "40px",
          paddingRight: "40px",
          boxShadow: "0px 1px 11px 1px rgba(0, 0, 0, 0.10)",
          fontWeight: 600,
          zIndex: 1,
          marginBottom: "-35px",
        }}
      >
        <Box>
          <Button
            sx={{ color: "#072948", padding: "25px" }}
            onClick={() => navigate("/")}
          >
            Home
          </Button>

          <Button
            sx={{ color: "#072948", padding: "25px" }}
            aria-describedby={anchorEl ? "simple-popover" : undefined}
            onClick={handleClick}
          >
            Service
          </Button>
          <Popover
            id="simple-popover"
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            onMouseEnter={handleMouseEnterPopover}
            onMouseLeave={handleClose}
            sx={{ width: "450px", paddingLeft: "30px" }}
          >
            <List
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              <ListItem
                disablePadding
                sx={{ borderBottom: "1px solid #abb8c3" }}
              >
                <ListItemButton
                  onClick={() => handleServiceClick("Refrigerator Repair")}
                >
                  <Typography variant="body1">Refrigerator Repair</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ borderBottom: "1px solid #abb8c3" }}
              >
                <ListItemButton
                  onClick={() => handleServiceClick("Oven Repair")}
                >
                  <Typography variant="body1">Oven Repair</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ borderBottom: "1px solid #abb8c3" }}
              >
                <ListItemButton
                  onClick={() => handleServiceClick("Washing Machine Repair")}
                >
                  <Typography variant="body1">
                    Washing Machine Repair
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ borderBottom: "1px solid #abb8c3" }}
              >
                <ListItemButton
                  onClick={() => handleServiceClick("Dishwasher Repair")}
                >
                  <Typography variant="body1">Dishwasher Repair</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ borderBottom: "1px solid #abb8c3" }}
              >
                <ListItemButton
                  onClick={() => handleServiceClick("Dryer Repair")}
                >
                  <Typography variant="body1">Dryer Repair</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ borderBottom: "1px solid #abb8c3" }}
              >
                <ListItemButton
                  onClick={() => handleServiceClick("Microwave Oven Repair")}
                >
                  <Typography variant="body1">Microwave Oven Repair</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ borderBottom: "1px solid #abb8c3" }}
              >
                <ListItemButton
                  onClick={() => handleServiceClick("Air Conditioning Repair")}
                >
                  <Typography variant="body1">
                    Air Conditioning Repair
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ borderBottom: "1px solid #abb8c3 " }}
              >
                <ListItemButton
                  onClick={() => handleServiceClick("Furnace Repair")}
                >
                  <Typography variant="body1">Furnace Repair</Typography>
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ borderBottom: "1px solid #abb8c3 " }}
              >
                <ListItemButton
                  onClick={() => handleServiceClick("Garbage Disposal Repair")}
                >
                  <Typography variant="body1">
                    Garbage Disposal Repair
                  </Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </Popover>

          <Button
            sx={{ color: "#072948", padding: "25px" }}
            onClick={() => navigate("/about")}
          >
            About Us
          </Button>
          <Button
            sx={{ color: "#072948", padding: "25px" }}
            onClick={() => navigate("/pricing")}
          >
            Pricing
          </Button>
          <Button
            sx={{ color: "#072948", padding: "25px" }}
            onClick={() => navigate("/service-areas")}
          >
            Service Areas
          </Button>
          <Button
            sx={{ color: "#072948", padding: "25px" }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        </Box>

        {/* Кнопка для записи */}
        <Box>
          <Button
            sx={{
              backgroundColor: "#FF6014",
              width: "250px",
              height: "40px",
              color: "white",
            }}
            onClick={() => navigate("/schedule")}
          >
            Schedule Appointment
            <ArrowRightAltIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar2;
