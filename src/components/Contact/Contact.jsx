import React from "react";
import { Container, Grid } from "@mui/material";
import { TextBox } from "../Home/TextBox";
import { ContactBox } from "../Header/styledAppbar";

export const Contact = () => {
  return (
    <ContactBox>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} lg={6} />
          <Grid item xs={12} md={12} lg={6} sx={{ mt: 33 }}>
            <TextBox />
          </Grid>
        </Grid>
      </Container>
    </ContactBox>
  );
};
