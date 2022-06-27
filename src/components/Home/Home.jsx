import { Box, CardContent, Grid, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { StyledCard, StyledCardBox, StyledTypography } from "./styledCard";
import { TextBox } from "./TextBox";
import { cardsName } from "../../utils/headerArray";
import "./Home.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const match1 = useMediaQuery("max-width:1100px");

  return (
    <>
      <Box
        sx={{
          py: "10%",
          backgroundColor: "#518DF8",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 100%",
          backgroundSize: "cover",
          pb: match1 ? "70%" : "20%",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={12} lg={6} />
          <Grid
            item
            xs={12}
            md={12}
            lg={6}
            sx={{
              backgroundColor: "#518DF8",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% 100%",
              backgroundSize: "cover",
            }}
          >
            <TextBox />
            <StyledCardBox>
              {cardsName.map((item, index) => (
                <NavLink
                  to={item.urlLink}
                  key={item}
                  style={{ textDecoration: "none" }}
                >
                  <Box width={150} m={1.5} minHeight={175}>
                    <StyledCard>
                      <CardContent sx={{ p: 1.5 }}>
                        <Box mt={1}>
                          <img src={item.imageLink} width={30} height={30} />
                        </Box>
                        <StyledTypography style={{ paddingBottom: "5%" }}>
                          {item.label}
                        </StyledTypography>
                        <Box sx={{ mt: item.label === "Logo Design" ? 5 : 2 }}>
                          <ArrowForwardIcon sx={{ color: "white" }} />
                        </Box>
                      </CardContent>
                    </StyledCard>
                  </Box>
                </NavLink>
              ))}
            </StyledCardBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
