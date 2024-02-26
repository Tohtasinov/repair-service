import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";

const ariaLabel = { "aria-label": "description" };

const Contacts = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете добавить логику для отправки данных формы
    console.log(formData);
  };

  return (
    <Box>
      {!isSmallScreen && (
        <>
          <Navbar />
          <Navbar2 />
        </>
      )}
      {isSmallScreen && <HeaderForMobile />}
      <SubNavbar title="Contacts" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: isSmallScreen ? "100%" : "90vh",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "row" : "column",
            gap: 2,
            boxShadow: "7px 5px 30px rgba(72, 73, 121, 0.15)",
            width: isSmallScreen ? "100%" : "40%",
            justifyContent: "center",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <form onSubmit={handleSubmit} sx={{ "& > div": { marginBottom: 2 } }}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: isSmallScreen ? "column" : "row",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box sx={{ marginBottom: 2 }}>
                  <TextField
                    id="name"
                    name="name"
                    variant="outlined"
                    placeholder="Your name"
                    inputProps={ariaLabel}
                    fullWidth
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ marginBottom: 2 }}>
                  <TextField
                    id="email"
                    name="email"
                    placeholder="Email address"
                    variant="outlined"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: isSmallScreen ? "column" : "row",
              }}
            >
              <Box sx={{ flex: 1 }} width={"300px"}>
                <Box sx={{ marginBottom: 2 }}>
                  <TextField
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    variant="outlined"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ marginBottom: 2 }}>
                  <TextField
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    variant="outlined"
                    fullWidth
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ marginBottom: 2 }}>
                <TextField
                  id="message"
                  name="message"
                  placeholder="message "
                  variant="outlined"
                  fullWidth
                  value={formData.message}
                  onChange={handleChange}
                />
              </Box>
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#FF6014" }}
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </Box>

        <Box
          sx={{
            width: isSmallScreen ? "100%" : "45%",
            marginLeft: "20px",
            marginTop: isSmallScreen ? "30px" : "0",
            marginBottom: isSmallScreen ? "30px" : "0",
          }}
        >
          <Typography
            sx={{
              color: "#111",
              fontWeight: 500,
              marginBottom: "20px",
              fontSize: "35px",
            }}
          >
            Did you have feedback for us about your service repair?
          </Typography>
          <Typography
            sx={{
              color: "#828893",
              fontWeight: 400,
              marginBottom: "30px",
              fontSize: "16px",
            }}
          >
            Your satisfaction is our top priority. If you are not 100% satisfied
            with our service and would like to speak to us, we’d like to hear
            from you to see how we can help. If you had a great experience and
            want to leave comments about your experience, we’d also like to hear
            from you. Whether there is room for improvement or positive
            feedback, we always welcome hearing from our customers! Please
            provide your contact information and we will get in touch with you
            as soon as possible.
          </Typography>
          <Box sx={{ display: "flex", "& > div": { marginRight: 2 } }}>
            <Box>
              <Typography
                sx={{
                  color: "#828893",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Phone:
              </Typography>
              <Typography
                sx={{
                  color: "#111",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                (888)-626-8800
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#828893",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Email:
              </Typography>
              <Typography
                sx={{
                  color: "#111",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                Acetechrepairnj@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#828893",
                fontWeight: 600,
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Address:
            </Typography>
            <Typography
              sx={{
                color: "#111",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              119 East Cedar Street, Livingston, NJ, 07039
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

Contacts.propTypes = {};

export default Contacts;
