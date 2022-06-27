import { Box, Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import { BsArrowRightCircle } from "react-icons/bs";
import star from "../assets/star.png";
import paint from "../assets/paint.png";
import crown from "../assets/crown.png";
import mobileApps from "../assets/mobileApps.png";
import truk from "../assets/truk.png";
import horn from "../assets/horn.png";

export const HowWeWork = () => {
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
          <Grid container spacing={5}>
            <Grid item xs={12} md={12} lg={6}>
              <Box textAlign="left" py={3}>
                <span
                  style={{
                    marginRight: "5px",
                    color: "white",
                    fontWeight: 300,
                    fontSize: "52px",
                  }}
                >
                  How we
                </span>
                <span
                  style={{
                    color: "#518DF8",
                    fontSize: "52px",
                    fontWeight: 400,
                  }}
                >
                  Work.
                </span>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box color="white">
                <Typography fontSize="17px" fontWeight="300">
                  01.
                </Typography>
                <Typography my={3}>
                  <span
                    style={{
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    Give Us
                  </span>
                  <span
                    style={{
                      marginRight: "5px",
                      color: "white",
                      fontWeight: 300,
                      fontSize: "25px",
                    }}
                  >
                    The Company Name, Info Etc.{" "}
                  </span>
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porttitor tortor orci, sit amet feugiat augue elementum at.
                  Duis egestas pulvinar tempor. Maecenas tempor arcu a elit
                  dignissim, vitae ultrices erat sollicitudin. Mauris tristique
                  quis arcu sit amet fermentum.
                </Typography>

                <Box my={3} sx={{ cursor: "pointer" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Get Started
                  </span>{" "}
                  <span style={{ fontSize: "35px", marginLeft: "2%" }}>
                    {" "}
                    <BsArrowRightCircle />{" "}
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid
              item
              sx={{ display: { xs: "none", lg: "block" } }}
              xs={12}
              md={12}
              lg={6}
            >
              <Box alignItems="center">
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src={star}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box color="white" py={8}>
                <Typography fontSize="17px" fontWeight="300">
                  02.
                </Typography>
                <Typography my={3}>
                  <span
                    style={{
                      marginRight: "5px",
                      color: "#FFFFFF",
                      fontWeight: 300,
                      fontSize: "25px",
                    }}
                  >
                    We will design your{" "}
                  </span>
                  <span
                    style={{
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    Logo
                  </span>
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porttitor tortor orci, sit amet feugiat augue elementum at.
                  Duis egestas pulvinar tempor.
                </Typography>

                <Box my={3} sx={{ cursor: "pointer" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Get Started
                  </span>{" "}
                  <span style={{ fontSize: "35px", marginLeft: "2%" }}>
                    {" "}
                    <BsArrowRightCircle />{" "}
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid
              item
              sx={{ display: { xs: "none", lg: "block" } }}
              xs={12}
              md={12}
              lg={6}
            >
              <Box>
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src={paint}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box color="white" py={8}>
                <Typography fontSize="17px" fontWeight="300">
                  03.
                </Typography>
                <Typography my={3}>
                  <span
                    style={{
                      marginRight: "5px",
                      color: "#FFFFFF",
                      fontWeight: 300,
                      fontSize: "25px",
                    }}
                  >
                    Make a
                  </span>
                  <span
                    style={{
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    branding guide
                  </span>
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "#FFFFFF",
                      fontWeight: 300,
                      fontSize: "25px",
                    }}
                  >
                    along with all letter heads, email footers, and business
                    cards.
                  </span>
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porttitor tortor orci, sit amet feugiat augue elementum at.
                  Duis egestas pulvinar tempor.
                </Typography>

                <Box my={3} sx={{ cursor: "pointer" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Get Started
                  </span>{" "}
                  <span style={{ fontSize: "35px", marginLeft: "2%" }}>
                    {" "}
                    <BsArrowRightCircle />{" "}
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid
              item
              sx={{ display: { xs: "none", lg: "block" } }}
              xs={12}
              md={12}
              lg={6}
            >
              <Box>
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src={crown}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box color="white" py={8}>
                <Typography fontSize="17px" fontWeight="300">
                  04.
                </Typography>
                <Typography my={3}>
                  <span
                    style={{
                      marginRight: "5px",
                      color: "#FFFFFF",
                      fontWeight: 300,
                      fontSize: "25px",
                    }}
                  >
                    Shirt, Hat, Uniform and other
                  </span>
                  <span
                    style={{
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    brandable clothing
                  </span>
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porttitor tortor orci, sit amet feugiat augue elementum at.
                  Duis egestas pulvinar tempor. Maecenas tempor arcu a elit
                  dignissim, vitae ultrices erat sollicitudin.
                </Typography>

                <Box my={3} sx={{ cursor: "pointer" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Get Started
                  </span>{" "}
                  <span style={{ fontSize: "35px", marginLeft: "2%" }}>
                    {" "}
                    <BsArrowRightCircle />{" "}
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid
              item
              sx={{ display: { xs: "none", lg: "block" } }}
              xs={12}
              md={12}
              lg={6}
            >
              <Box>
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src={mobileApps}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box color="white" py={8}>
                <Typography fontSize="17px" fontWeight="300">
                  05.
                </Typography>
                <Typography my={3}>
                  <span
                    style={{
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    Website
                  </span>
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "#FFFFFF",
                      fontWeight: 300,
                      fontSize: "25px",
                    }}
                  >
                    or
                  </span>
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    App.
                  </span>
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porttitor tortor orci, sit amet feugiat augue elementum at.
                  Duis egestas pulvinar tempor. Maecenas tempor arcu a elit
                  dignissim, vitae ultrices erat sollicitudin. Mauris tristique
                  quis arcu sit amet fermentum.
                </Typography>

                <Box my={3} sx={{ cursor: "pointer" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Get Started
                  </span>{" "}
                  <span style={{ fontSize: "35px", marginLeft: "2%" }}>
                    {" "}
                    <BsArrowRightCircle />{" "}
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid
              item
              sx={{ display: { xs: "none", lg: "block" } }}
              xs={12}
              md={12}
              lg={6}
            >
              <Box>
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src={truk}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box color="white" py={8}>
                <Typography fontSize="17px" fontWeight="300">
                  06.
                </Typography>
                <Typography my={3}>
                  <span
                    style={{
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    Signage
                  </span>
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "#FFFFFF",
                      fontWeight: 300,
                      fontSize: "25px",
                    }}
                  >
                    and
                  </span>
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    Vehicle Graphics.
                  </span>
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porttitor tortor orci, sit amet feugiat augue elementum at.
                </Typography>

                <Box my={3} sx={{ cursor: "pointer" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Get Started
                  </span>{" "}
                  <span style={{ fontSize: "35px", marginLeft: "2%" }}>
                    {" "}
                    <BsArrowRightCircle />{" "}
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={5}>
            <Grid
              item
              sx={{ display: { xs: "none", lg: "block" } }}
              xs={12}
              md={12}
              lg={6}
            >
              <Box>
                <img
                  style={{
                    maxWidth: "100%",
                  }}
                  src={horn}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <Box color="white" py={8}>
                <Typography fontSize="17px" fontWeight="300">
                  07.
                </Typography>
                <Typography my={3}>
                  <span
                    style={{
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    Marketing
                  </span>
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "#FFFFFF",
                      fontWeight: 300,
                      fontSize: "25px",
                    }}
                  >
                    and
                  </span>
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "#518DF8",
                      fontSize: "25px",
                      fontWeight: 400,
                    }}
                  >
                    SEO.
                  </span>
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  porttitor tortor orci, sit amet feugiat augue elementum at.
                  Duis egestas pulvinar tempor. Maecenas tempor arcu a elit
                  dignissim, vitae ultrices erat sollicitudin. Mauris tristique
                  quis arcu sit amet fermentum.
                </Typography>

                <Box my={3} sx={{ cursor: "pointer" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Get Started
                  </span>{" "}
                  <span style={{ fontSize: "35px", marginLeft: "2%" }}>
                    {" "}
                    <BsArrowRightCircle />{" "}
                  </span>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            mt={6}
            sx={{
              textAlign: "center",
              color: "#FFFFFF",
              // display: { xs: 'none', lg: 'block', xl: 'none' },
              // display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' },
              py: "6%",
            }}
          >
            <FacebookIcon sx={{ mr: "3%", cursor: "pointer" }} />
            <TwitterIcon sx={{ mr: "3%", cursor: "pointer" }} />
            <LinkedInIcon sx={{ cursor: "pointer" }} />
            <Box textAlign="center" mt={3}>
              Copyright © All rights reserved
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
