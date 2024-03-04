import React, { useState } from "react";
import { Box, useMediaQuery, Button, TextField } from "@mui/material";
import SubNavbar from "../../components/Navbar/SubNavbar";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";
import Navbar2 from "../../components/Navbar/Navbar2";
import Navbar from "../../components/Navbar/Navbar";

const Schedule = (props) => {
  const [stage, setStage] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", address: "" });
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  const handleNext = () => {
    setStage(stage + 1);
  };

  const handleBack = () => {
    setStage(stage - 1);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const renderStage = () => {
    switch (stage) {
      case 1:
        return (
          <Stage1
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateChange={handleDateChange}
            onTimeChange={handleTimeChange}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <Stage2
            userInfo={userInfo}
            onUserInfoChange={handleUserInfoChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return <Stage3 userInfo={userInfo} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <Box marginRight={1}>
      {!isSmallScreen && (
        <>
          <Navbar />
          <Navbar2 />
        </>
      )}
      {isSmallScreen && <HeaderForMobile />}
      <SubNavbar title="SCHEDULE APPOINTMENT ONLINE" />
      <Box>{renderStage()}</Box>
    </Box>
  );
};

const Stage1 = ({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
  onNext,
}) => {
  return (
    <div>
      <h2>Step 1: Choose Appointment Date and Time</h2>
      <input type="date" value={selectedDate} onChange={onDateChange} />
      <TextField
        label="Select Time"
        type="time"
        value={selectedTime}
        onChange={onTimeChange}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 minutes
        }}
      />
      <Button variant="contained" color="primary" onClick={onNext}>
        Next
      </Button>
    </div>
  );
};

const Stage2 = ({ userInfo, onUserInfoChange, onNext, onBack }) => {
  return (
    <div>
      <h2>Step 2: Enter Your Information</h2>
      <TextField
        label="Your Name"
        name="name"
        value={userInfo.name}
        onChange={onUserInfoChange}
      />
      <TextField
        label="Your Address"
        name="address"
        value={userInfo.address}
        onChange={onUserInfoChange}
      />
      <Button variant="contained" color="primary" onClick={onNext}>
        Next
      </Button>
      <Button variant="contained" onClick={onBack}>
        Back
      </Button>
    </div>
  );
};

const Stage3 = ({ userInfo, onBack }) => {
  return (
    <div>
      <h2>Step 3: Confirm Your Appointment</h2>
      <p>Name: {userInfo.name}</p>
      <p>Address: {userInfo.address}</p>
      <Button variant="contained" onClick={onBack}>
        Back
      </Button>
      <Button variant="contained" color="primary">
        Confirm
      </Button>
    </div>
  );
};

Schedule.propTypes = {};

export default Schedule;
