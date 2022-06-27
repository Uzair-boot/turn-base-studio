import { Box } from "@mui/material";
import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <Box
      mt={6}
      sx={{
        textAlign: "center",
        color: "#FFFFFF",
        py: "4%",
      }}
    >
      <FacebookIcon sx={{ mr: "3%", cursor: "pointer" }} />
      <TwitterIcon sx={{ mr: "3%", cursor: "pointer" }} />
      <LinkedInIcon sx={{ cursor: "pointer" }} />
    </Box>
  );
}
