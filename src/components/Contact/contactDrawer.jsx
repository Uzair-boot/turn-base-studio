import { StyledDrawer } from "../Header/styledAppbar";
import React from "react";
import { Box, Container, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import arrowImage from "../../Assets/images/Arrow.png";
import tickedImage from "../../Assets/images/Ticked.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InputBase from "@mui/material/InputBase";
import {
  ContactDrawerBox,
  ContainerBox,
  InputBox,
  SmallBox1,
  SmallBox2,
  SmallBox3,
  SmallInner2,
  SmallInnerBox,
  StyledPaper,
} from "./styledContract";
export const ContactDrawer = ({
  openFanContactDrawer,
  setAnchorContactDrawer,
}) => {
  const [showColor, setShowColor] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const largeScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <StyledDrawer
      anchor="right"
      open={openFanContactDrawer}
      onClose={() => setAnchorContactDrawer(false)}
      largeScreen={largeScreen}
    >
      <Box>
        <IconButton
          aria-label="menu"
          onClick={() => setAnchorContactDrawer(false)}
          sx={{ color: "white", float: "right", m: largeScreen ? 5 : 1 }}
        >
          <CloseIcon />
        </IconButton>
        <ContactDrawerBox largeScreen={largeScreen}>
          <Box sx={{ display: showThanks ? "block" : "none" }}>
            <Box sx={{ color: "#518df8" }} component="span">
              Thank you
            </Box>
            for <br />
            containing us.
            <br /> We'll get back <br />
            to you very <br />
            <Box sx={{ color: "#518df8" }} component="span">
              soon
            </Box>
          </Box>
          <Box sx={{ display: showThanks ? "none" : "block" }}>
            Get In Touch <br /> With Us So <br /> We Can
            <Box sx={{ color: "#518df8" }} component="span">
              Get
            </Box>
            <br />
            <Box sx={{ color: "#518df8" }} component="span">
              Started!
            </Box>
          </Box>
        </ContactDrawerBox>
        <Box sx={{ ml: 7, mt: 5, display: showThanks ? "flex" : "none" }}>
          {" "}
          <img src={tickedImage} />
        </Box>
        <Box sx={{ mt: 5, display: showThanks ? "none" : "block" }}>
          <InputBox>
            <StyledPaper component="form" largeScreen={largeScreen}>
              <InputBase
                sx={{ ml: 1, p: 4, maxWidth: 500, flex: 1, color: "#518df8" }}
                placeholder={showColor ? "Enter Your Name" : "Enter Your Email"}
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
                onClick={() => setShowThanks(true)}
              >
                <img
                  src={arrowImage}
                  height={largeScreen ? 50 : 30}
                  width={largeScreen ? 50 : 30}
                />
              </IconButton>
            </StyledPaper>
          </InputBox>
          <SmallBox1 showColor={showColor}>
            <SmallBox2 />
            <SmallBox3 onClick={() => setShowColor(!showColor)} />
          </SmallBox1>
          <SmallInnerBox showColor={showColor}>
            <SmallInner2 onClick={() => setShowColor(!showColor)} />
            <SmallBox2 />
          </SmallInnerBox>
        </Box>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <ContainerBox>
            Follow us
            <FacebookIcon sx={{ ml: 6, mr: 2, cursor: "pointer" }} />
            <TwitterIcon sx={{ mr: 2, cursor: "pointer" }} />
            <LinkedInIcon sx={{ cursor: "pointer" }} />
          </ContainerBox>
        </Container>
      </Box>
    </StyledDrawer>
  );
};
