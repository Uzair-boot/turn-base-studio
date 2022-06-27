import { Grid, Typography, Box, Container } from "@mui/material";
import { MySwiper } from "./MySwiper";
import Footer from "../Services/Footer";

export const Portfolio = () => {
  return (
    <>
      <Box
        sx={{
          py: "10%",
          backgroundColor: "#020202",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 100%",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <Box color="#FFFFFF">
                <Typography fontSize="52px" fontWeight="300">
                  {" "}
                  Portfolio.
                </Typography>
                <Typography my={3} fontSize="16px" fontWeight="400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porttitor tortor orci, sit amet feugiat augue elementum at.
                  Duis egestas pulvinar tempor. Maecenas tempor arcu a elit
                  dignissim, vitae ultrices erat sollicitudin.{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}></Grid>
          </Grid>
          <Box my={5}>
            <MySwiper />
          </Box>
        </Container>

        <Container>
          <Footer />
        </Container>
      </Box>
    </>
  );
};
