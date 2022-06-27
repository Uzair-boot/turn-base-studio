import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import {
  Button,
  Box,
  useMediaQuery,
  Typography,
  ListItemButton,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";

export const MySwiper = () => {
  const matches = useMediaQuery("(min-width:950px)");
  const match1 = useMediaQuery("min-width:650px");

  return (
    <>
      <Swiper
        slidesPerView={matches ? 4 : 1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        style={{
          color: "#FFFFFF",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        <SwiperSlide>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "white" : "white",
              };
            }}
            to="/portfolioItem"
          >
            <Box px="5%">
              <img style={{ maxWidth: "100%" }} src={portfolio1} />
              <Box>
                <span>Name of the Project</span> <br />
                <ArrowCircleRightOutlinedIcon />
              </Box>
            </Box>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "white" : "white",
              };
            }}
            to="/portfolioItem"
          >
            <Box px="5%">
              <img style={{ maxWidth: "100%" }} src={portfolio2} />
              <Box>
                <span>Name of the Project</span> <br />
                <ArrowCircleRightOutlinedIcon />
              </Box>
            </Box>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "white" : "white",
              };
            }}
            to="/portfolioItem"
          >
            <Box px="5%">
              <img style={{ maxWidth: "100%" }} src={portfolio3} />
              <Box>
                <span>Name of the Project</span> <br />
                <ArrowCircleRightOutlinedIcon />
              </Box>
            </Box>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "white" : "white",
              };
            }}
            to="/portfolioItem"
          >
            <Box px="5%">
              <img style={{ maxWidth: "100%" }} src={portfolio4} />
              <Box>
                <span>Name of the Project</span> <br />
                <ArrowCircleRightOutlinedIcon />
              </Box>
            </Box>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
