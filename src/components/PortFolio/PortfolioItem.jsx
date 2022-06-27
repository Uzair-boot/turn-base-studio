import {
  Grid,
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";

import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";
import group4 from "../assets/group4.png";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Footer from "../Services/Footer";

export const PortfolioItem = () => {
  const largeScreen = useMediaQuery("(min-width: 1200px)");

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
                  Name Of The Project
                </Typography>
                <Typography my={3} fontSize="16px" fontWeight="400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porttitor tortor orci, sit amet feugiat augue elementum at.
                  Duis egestas pulvinar tempor. Maecenas tempor arcu a elit
                  dignissim, vitae ultrices erat sollicitudin.{" "}
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}
              //for large screen
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  pt: "20%",
                }}
              >
                <Box>
                  <img src={group1} />
                </Box>
                <Box>
                  <img src={group2} />
                </Box>
                <Box>
                  <img src={group3} />
                </Box>
                <Box>
                  <img src={group4} />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}
              //For Small Screen
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box>
                <Box display="flex">
                  <Box>
                    <img src={group1} />
                  </Box>
                  <Box ml={10}>
                    <img src={group2} />
                  </Box>
                </Box>
                <Box display="flex">
                  <Box>
                    <img src={group3} />
                  </Box>
                  <Box ml={10}>
                    <img src={group4} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box>
            <Box my={5}>
              <img style={{ maxWidth: "100%" }} src={mobile1} alt="" />
            </Box>
            <Box>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={mobile2}
                alt=""
              />
            </Box>
          </Box>

          <Box sx={{ textAlign: largeScreen ? "left" : "center" }} my={10}>
            <Button
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#518DF8",
                borderRadius: "35px",
                px: "4%",
                py: "2%",
                "&:hover": {
                  background: "#518DF8a2",
                },
              }}
              endIcon={<ArrowCircleRightIcon />}
            >
              Contact Us
            </Button>
          </Box>

          <Footer />
        </Container>
      </Box>
    </>
  );
};
