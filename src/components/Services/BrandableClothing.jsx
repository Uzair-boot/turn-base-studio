import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import arrowDown from "../assets/arrowDown.png";
import Footer from "./Footer";
import Details from "./Details";
import { brandable } from "./utilities";

export const BrandableClothing = () => {
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
        <Container sx={{ mt: 4 }}>
          {brandable.map((i, index) => {
            return (
              <Grid
                container
                key={i}
                spacing={8}
                sx={{ display: { xs: "none", md: "block", lg: "flex" } }}
              >
                <Grid item xs={12} md={12} lg={6}>
                  <Box>
                    <img
                      style={{
                        maxWidth: "100%",
                        paddingTop: "6%",
                      }}
                      src={i.BrandableImage}
                      alt="Items Image"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} md={12} lg={6}>
                  <Box>
                    <Box color="black" textAlign="left" py={3}>
                      <span
                        style={{
                          marginRight: "5px",
                          color: "white",
                          fontWeight: 400,
                          fontSize: "52px",
                        }}
                      >
                        Signage
                      </span>
                      <span
                        style={{
                          // marginRight: '5px',
                          fontSize: "52px",
                          fontWeight: 300,
                        }}
                      >
                        and
                      </span>
                      <Typography>
                        <span
                          style={{
                            // marginLeft: '2 px',
                            color: "white",
                            fontWeight: 400,
                            fontSize: "52px",
                          }}
                        >
                          Vehicle Graphics.
                        </span>
                      </Typography>
                    </Box>

                    <Box
                      color="white"
                      sx={{
                        borderLeft: largeScreen ? "2px solid white" : "",
                        paddingLeft: "4%",
                        textAlign: "left",
                      }}
                    >
                      <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
                        {i.brandableTextTop}
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
            );
          })}

          {brandable.map((i, index) => {
            return (
              <Grid
                container
                key={i}
                spacing={8}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Grid item xs={12} md={12} lg={6}>
                  <Box>
                    <Box color="black" textAlign="left" py={3}>
                      <span
                        style={{
                          marginRight: "5px",
                          color: "white",
                          fontWeight: 400,
                          fontSize: "52px",
                        }}
                      >
                        Signage
                      </span>
                      <span
                        style={{
                          fontSize: "52px",
                          fontWeight: 300,
                        }}
                      >
                        and
                      </span>
                      <Typography>
                        <span
                          style={{
                            color: "white",
                            fontWeight: 400,
                            fontSize: "52px",
                          }}
                        >
                          Vehicle Graphics.
                        </span>
                      </Typography>
                    </Box>

                    <Box
                      color="white"
                      sx={{
                        borderLeft: largeScreen ? "2px solid white" : "",
                        paddingLeft: "4%",
                        textAlign: "left",
                      }}
                    >
                      <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
                        {i.brandableTextTop}
                      </Typography>
                    </Box>
                    <Box textAlign="left" my={5}>
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

                <Grid item xs={12} md={12} lg={6}>
                  <Box>
                    <img
                      style={{
                        maxWidth: "100%",
                      }}
                      src={i.BrandableImage}
                      alt="Items Image"
                    />
                  </Box>
                </Grid>
              </Grid>
            );
          })}

          <Box
            my={6}
            sx={{ display: { xs: "none", lg: "block" }, textAlign: "center" }}
          >
            <img src={arrowDown} alt="arrow Down " />
          </Box>

          <Details />

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
