import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const ChatForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  const handleSubmit = async () => {
    try {
      const apiUrl = "http://localhost:8080/api/sendEmail/send";

      const formData = {
        username,
        email,
        phoneNumber,
        subject,
        message,
      };

      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Server response:", response.data);

      setUsername("");
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
      onClose();
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        color: "#152339",
        padding: "20px",
        borderRadius: "10px",
        width: "23%",
        maxWidth: "400px",
        backgroundColor: "white",
        "@media (max-width: 600px)": {
          width: "80%",
        },
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <IconButton
          style={{ position: "absolute", right: "-10px", top: "-3px" }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <Typography variant="h6" style={{ textAlign: "center" }}>
        Contact us
      </Typography>
      <form>
        <TextField
          id="outlined-basic"
          label="Your name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          InputProps={{
            classes: {
              focused: "Mui-focused",
            },
          }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          InputProps={{
            classes: {
              focused: "Mui-focused",
            },
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phoneNumber}
          InputProps={{
            classes: {
              focused: "Mui-focused",
            },
          }}
          onChange={(e) => setPhoneNumber(e.target.value)} // Added
        />
        <TextField
          label="Subject"
          variant="outlined"
          fullWidth
          margin="normal"
          value={subject}
          InputProps={{
            classes: {
              focused: "Mui-focused",
            },
          }}
          onChange={(e) => setSubject(e.target.value)} // Added
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={message}
          InputProps={{
            classes: {
              focused: "Mui-focused",
            },
          }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            marginLeft: isSmallScreen ? "56px" : "77px",
            marginTop: "20px",
            background: "linear-gradient(90deg, #5F7EEA 0%, #5FC4EA 100%)",
            color: "#fff",
            width: "200px",
          }}
        >
          Send Message
        </Button>
      </form>
    </Paper>
  );
};

export default ChatForm;
