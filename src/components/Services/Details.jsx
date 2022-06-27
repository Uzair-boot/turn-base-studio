import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { utilities } from "./utilities";

export default function Details() {
  return (
    <Grid container spacing={12} color="#FFFFFF" textAlign="left" py={15}>
      {utilities.map((i, index) => {
        return (
          <Grid
            item
            key={i}
            lg={4}
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 400,
                }}
              >
                {i.item1}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                {i.item2}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
