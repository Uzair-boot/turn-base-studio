import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Drawer, Button, Box } from "@mui/material";
import { css } from "styled-components";
const StyledAppBar = styled(AppBar)`
  display: flex;
  height: 64px;
  align-items: center;
  box-shadow: 0px 1px 0px 0px #518df8;
  position: static;
  width: 100%;
  ${({ currentUrl }) =>
    currentUrl === "/portfolio" &&
    css`
      background: #020202;
    `};
  ${({ currentUrl }) =>
    currentUrl === "/portfolioItem" &&
    css`
      background: #020202 !important;
    `};
  ${({ currentUrl }) =>
    currentUrl !== "/portfolio" &&
    css`
      background: #518df8;
    `};
  ${({ currentUrl }) =>
    currentUrl === "/work" &&
    css`
      background: #020202;
    `};
`;
export const StyledLink = styled(Link)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
}));
export const StyledDrawer = styled(Drawer)`
  & .MuiPaper-root {
    background-color: black;
    height: 100vh;
    width: ${({ largeScreen }) => (largeScreen ? "450px" : "100vw")};
  }
`;
export const StyledContactButton = styled(Button)`
  color: white;
  margin-left: 60px;
  margin-bottom: 16px;
  background-color: black;
  border-radius: 30px;
  text-transform: capitalize;
  width: 120px;
  height: 48px;
  margin-top: 6px;
`;
export const StyledImageBox = styled(Box)`
  ${(props) => props.theme.breakpoints.up("lg")} {
    display: none !important;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    display: flex;
  }
  ${(props) => props.theme.breakpoints.up("xs")} {
    display: flex;
  }
  position: absolute;
  left: 0;
  margin-left: 16px;
`;

export const ContactBox = styled(Box)`
  padding-top: 10%;
  padding-bottom: 10%;
  height: 121vh;
  background-color: #518df8;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
`;

export default StyledAppBar;
