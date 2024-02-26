import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import SubNavbar from "../../components/Navbar/SubNavbar";
import Footer from "../../components/Footer/Footer";
import HeaderForMobile from "../../components/HeaderForMobile/HeaderForMobile";

const Pricing = (props) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down(450));

  return (
    <Box>
      {!isSmallScreen && (
        <>
          <Navbar />
          <Navbar2 />
        </>
      )}
      {isSmallScreen && <HeaderForMobile />}
      <SubNavbar title="Pricing" />
      <Box marginBottom={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "center",
            marginTop: "50px",
            alignItems: "center",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={isSmallScreen ? "90%" : "40%"}
          >
            <Typography
              sx={{
                color: "#111",
                fontWeight: 500,
                marginBottom: "15px",
                fontSize: "30px",
              }}
            >
              Household Appliances
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: "#FF6014",
                  fontWeight: 500,
                  marginBottom: "15px",
                  fontSize: "18px",
                  textTransform: "uppercase",
                }}
              >
                SERVICE CALL: $75.00
              </Typography>
              <Typography
                sx={{
                  color: "#111",
                  fontWeight: 500,
                  marginBottom: "15px",
                  fontSize: "18px",
                }}
              >
                There will be no service call charge if the repair is completed
                within first hour.
              </Typography>
              <Typography
                sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
              >
                Our labor charges start at $75.00 per hour. The technician may
                increase the charge depending on the complexity of the job.
                However, they will always seek your approval before proceeding
                with any additional charges.
                <br /> Requesting an appointment online is a fast, easy, and
                convenient way to schedule your repair service. Plus, when you
                book online, you can enjoy a discount of 7% on our service.{" "}
                <br />
                After you schedule an appointment with us, please be aware that
                our technician will give you a call approximate 30 minutes
                before their expected arrival time to your home or business to
                service your appliance.
              </Typography>
            </Box>
          </Box>

          <Box width={isSmallScreen ? "90%" : "40%"} marginTop={5}>
            <Typography
              sx={{
                color: "#111",
                fontWeight: 500,
                marginBottom: "15px",
                fontSize: "30px",
              }}
            >
              Warranty
            </Typography>
            <Typography
              sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
            >
              A 90-day warranty covers the parts which we install. We stand
              behind our work and provide a guarantee for all repairs except for
              Freon (Refrigerant) in air conditioners, compressors,
              refrigerators, freezers, and wine coolers.
            </Typography>
            <Typography
              sx={{
                color: "#111",
                fontWeight: 500,
                marginBottom: "15px",
                fontSize: "25px",
              }}
            >
              Payment method:
            </Typography>
            <ul>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  Personal check
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  Cash
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  Venmo
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  Zelle
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Box width={"80%"} display={"flex"} flexDirection={"column"}>
            <Typography
              sx={{
                color: "#111",
                fontWeight: 500,
                marginBottom: "15px",
                fontSize: "30px",
              }}
            >
              Service call costs
            </Typography>
            <Typography
              sx={{
                color: "#111",
                fontWeight: 500,
                marginBottom: "15px",
                fontSize: "25px",
              }}
            >
              What is a service call?
            </Typography>
            <Typography
              sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
            >
              When your appliance breaks, it is the job of our appliance
              technician to diagnose the problem. If your fridge is not cold,
              your dryer is not spinning or your oven won’t turn on, the first
              step is for our appliance technician to visit your home and
              inspect the appliance. This is called a service call and will
              result in a diagnosis of your appliance problem and an estimate of
              the repair cost. The service call can take a few minutes or will
              require to dissemble the appliance and can take longer. The fee is
              $75 for a service call evaluation within an hour timeframe. Many
              repairs can be diagnosed within one hour. If the diagnosis takes
              more than one hour, the service call fee will increase.
            </Typography>
            <Typography
              sx={{
                color: "#111",
                fontWeight: 500,
                marginBottom: "15px",
                fontSize: "30px",
              }}
            >
              Repair costs
            </Typography>
            <Typography
              sx={{
                color: "#111",
                fontWeight: 500,
                marginBottom: "15px",
                fontSize: "25px",
              }}
            >
              What is the estimated cost of repair?
            </Typography>
            <Typography
              sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
            >
              Once the appliance technician completes the diagnosis, they will
              explain the problem to you and the estimated cost and estimated
              timeframe that it would take to repair your appliance. If you
              decide not to proceed with the repair, you will pay the technician
              the service charge fee for coming to your home and diagnosing your
              appliance problem. If you would like to proceed with the repair
              and have your appliance fixed by the technician, the cost will
              include: the hourly cost of labor plus the cost of part(s). The
              good news is that if your repair does not require ordering a
              custom part and would not require the technician coming to your
              home a second time, we can apply the $75 service call fee toward
              the total cost of your same day repair. This would occur in cases
              where we have the required repair part in our van. In such cases,
              you will pay for labor plus parts. However, the $75 service charge
              fee will be applied toward the total repair amount. In cases where
              the repair is more complex and time consuming, requiring the
              ordering of specific parts (using the model and serial number of
              your appliance) and requiring a second visit to your home, you
              will be required to pay the service call fee along with the cost
              of parts and labor of the repair. Our hourly labor fee is $75.
              Rest assured that there are absolutely no hidden fees. We aim to
              be as transparent as possible about pricing. The technician will
              provide you a total estimate so you can make an informed decision
              about the repair. We will not proceed with any repairs without
              customer approval and knowledge about pricing! To make it easier
              for our customers, we accept Check, Cash, Zelle and Venmo! **
              Please take note of the following items related to repair costs **
            </Typography>
            <ul>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  We do not pro-rate the hourly labor charge. Whether the
                  technician takes 15 mins or 55 mins to repair your appliance,
                  the hourly labor rate of $75+ tax applies.
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  Prices are on a per appliance basis. If technician is
                  repairing more than one appliance in your home, please discuss
                  price break-down for each appliance.
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  Depending on the complexity of the job, the technician
                  reserves the right to increase costs (solely with advance
                  notice and explanation to customer).
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  If you have any coupons, please provide to technician in
                  advance.
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  Prices are subject to tax.
                </Typography>
              </li>
              <li>
                <Typography
                  sx={{ color: "#828893", fontSize: "16px", fontWeight: 400 }}
                >
                  Tips are always appreciated, but never expected or required.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

Pricing.propTypes = {};

export default Pricing;
