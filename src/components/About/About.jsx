import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Footer from "../Services/Footer";

export const About = () => {
  const largeScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <Box
        sx={{
          py: "10%",
          backgroundColor: "#518DF8",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 100%",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} md={12} lg={6}>
              <Box>
                {/* <img style={{maxWidth: '100%',paddingTop: '6%'}} src={Items} alt="Items Image" /> */}
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box>
                <Box color="black" textAlign="left" py={3}>
                  <Typography
                    sx={{
                      fontSize: "52px",
                      fontWeight: "400",
                    }}
                  >
                    About <span style={{ color: "white" }}>Us</span>.
                  </Typography>
                </Box>

                <Box
                  color="white"
                  sx={{
                    borderLeft: largeScreen ? "2px solid white" : "",
                    // borderLeft: '2px solid white',
                    paddingLeft: "4%",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      LineHeight: "28px",
                      fontWeight: 400,
                    }}
                  >
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam porttitor tortor orci, sit amet feugiat augue
                      elementum at. Duis egestas pulvinar tempor. Maecenas
                      tempor arcu a elit dignissim, vitae ultrices erat
                      sollicitudin. Mauris tristique quis arcu sit amet
                      fermentum.
                    </Typography>
                    <Typography my={3}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam porttitor tortor orci, sit amet feugiat augue
                      elementum at. Duis egestas pulvinar tempor.
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam porttitor tortor orci, sit amet feugiat augue
                      elementum at. Duis egestas pulvinar tempor. Maecenas
                      tempor arcu a elit dignissim, vitae ultrices erat
                      sollicitudin. Mauris tristique quis arcu sit amet
                      fermentum.
                    </Typography>
                    <Typography my={3}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam porttitor tortor orci, sit amet feugiat augue
                      elementum at. Duis egestas pulvinar tempor.
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam porttitor tortor orci, sit amet feugiat augue
                      elementum at. Duis egestas pulvinar tempor. Maecenas
                      tempor arcu a elit dignissim, vitae ultrices erat
                      sollicitudin. Mauris tristique quis arcu sit amet
                      fermentum.
                    </Typography>
                    <Typography my={3}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam porttitor tortor orci, sit amet feugiat augue
                      elementum at. Duis egestas pulvinar tempor.
                    </Typography>
                  </Typography>
                </Box>

                <Box textAlign="left" my={10}>
                  <Button
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "35px",
                      px: "6%",
                      py: "4%",
                      "&:hover": {
                        background: "#FFFFFFa2",
                      },
                    }}
                    endIcon={<ArrowCircleRightIcon />}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "none" },
            }}
          >
            <Footer />
          </Box>
        </Container>
      </Box>
    </>
  );
};
