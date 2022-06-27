import { StyledSubTextBox, StyledTextBox } from "./styledCard";
import { Box, Container, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

export const TextBox = () => {
  const largeScreen = useMediaQuery("(min-width:1200px)");

  return (
    <Box>
      <StyledSubTextBox largScreen={largeScreen}>
        <Box component="span" sx={{ color: "black" }}>
          Turnbased
        </Box>
        Studio <br />
        Is All About Being A<br />
        <Box component="span" sx={{ color: "black" }}>
          One Stop Shop
        </Box>
      </StyledSubTextBox>
      <StyledTextBox largScreen={largeScreen}>
        We take startup and or small companies and{" "}
        <Box sx={{ color: "black" }} component="span">
          do everything from them
        </Box>
        <br />
        Lorem ipsum dolor sit amet, consecturtur asisping elit , sed do <br />
        eiumesed tempor incident ut labore et dolore manga elique
      </StyledTextBox>
    </Box>
  );
};
