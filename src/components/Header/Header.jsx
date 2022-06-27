import React from "react";
import StyledAppBar, {
  StyledContactButton,
  StyledDrawer,
  StyledImageBox,
} from "./styledAppbar";
import {
  Toolbar,
  Box,
  Button,
  List,
  ListItemButton,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import style from "./Header.module.scss";
import { StyledLink } from "./styledAppbar";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { largeScreenLinks, links } from "../../utils/headerArray";
import logoImage from "../../Assets/images/Asset.png";
import { ServiceList } from "./ServiceList";
import { ContactDrawer } from "../Contact/contactDrawer";
import { useLocation } from "react-router-dom";

export const Appbar = () => {
  const [anchorMenuDrawer, setAnchorMenuDrawer] = useState(false);
  const [anchorContactDrawer, setAnchorContactDrawer] = useState(false);
  const [openDrawerTokens, setOpenDrawerTokens] = useState(true);
  const openFanMenuDrawer = Boolean(anchorMenuDrawer);
  const openFanContactDrawer = Boolean(anchorContactDrawer);
  const handleOpenMenuDrawer = () => {
    setAnchorMenuDrawer(true);
  };
  const handleOpenContactDrawer = () => {
    setAnchorContactDrawer(true);
  };
  const handleCloseMenuDrawer = () => {
    setAnchorMenuDrawer(false);
  };
  const handleClickTokensMenuDrawer = () => {
    setOpenDrawerTokens(!openDrawerTokens);
  };
  const location = useLocation();
  const currentUrl = location.pathname;
  const largeScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <StyledAppBar currentUrl={currentUrl}>
      <Box sx={{ width: "100%" }}>
        <Box
          component="h4"
          sx={{
            ml: 6,
            mt: 6,
            position: "sticky !important",
            display: { xs: "none", md: "none", lg: "flex" },
            height: "64px",
            boxSizing: "border-box",
          }}
        >
          {currentUrl === "/logoDesign" ||
          currentUrl === "/brandingGuide" ||
          currentUrl === "/brandableClothing" ||
          currentUrl === "/websitesAndApps" ||
          currentUrl === "/marketingAndSeo" ? (
            <Box sx={{ mt: 2.5 }}>
              <img src={logoImage} alt="no image" height={48} width={90} />
            </Box>
          ) : (
            <Box mt={3}>
              <Box
                component="span"
                sx={{
                  color:
                    currentUrl === "/portfolio" ||
                    currentUrl === "/portfolioItem" ||
                    currentUrl === "/work"
                      ? "#518df8 "
                      : "#020202",
                }}
              >
                Turnbased
              </Box>
              Studio
            </Box>
          )}
        </Box>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "end",
            mr: { md: "0px", lg: 8 },
            mt: largeScreen ? -12 : 0,
          }}
        >
          <StyledImageBox>
            <img src={logoImage} alt="no image" height={28} width={63} />
          </StyledImageBox>
          <Box className={style.boxDisplay}>
            {largeScreenLinks.map((item) =>
              item.label !== "Services" ? (
                <Box sx={{ ml: "60px", mt: 2 }}>
                  <StyledLink to={item.link}>{item.label}</StyledLink>
                </Box>
              ) : (
                <Box sx={{ width: "109px" }}>
                  <Box
                    onMouseOver={() => {
                      setOpenDrawerTokens(false);
                    }}
                    sx={{ ml: "60px", mt: 2, width: "130px" }}
                  >
                    Services
                  </Box>
                  <Box
                    sx={{ ml: 6, width: "200px" }}
                    onMouseOver={() => {
                      setOpenDrawerTokens(false);
                    }}
                    onMouseOut={() => {
                      setOpenDrawerTokens(true);
                    }}
                  >
                    <ServiceList openDrawerTokens={openDrawerTokens} />{" "}
                  </Box>
                </Box>
              )
            )}
            <StyledContactButton onClick={handleOpenContactDrawer}>
              <Box>
                <StyledLink to="contact">Contact</StyledLink>
              </Box>
            </StyledContactButton>
            <ContactDrawer
              openFanContactDrawer={openFanContactDrawer}
              setAnchorContactDrawer={setAnchorContactDrawer}
            />
          </Box>
          <Button
            aria-label="menu"
            className={style.menueIcon}
            onClick={handleOpenMenuDrawer}
            sx={{
              color: "black",
              ml: "60px",
              display: { sm: "flex", md: "flex", lg: "none" },
            }}
          >
            <MenuIcon
              fontSize="large"
              sx={{
                color:
                  currentUrl === "/portfolio" || currentUrl === "/portfolioItem"
                    ? "#518df8 "
                    : "#020202",
              }}
            />
          </Button>
          <StyledDrawer
            anchor="right"
            open={openFanMenuDrawer}
            onClose={() => setAnchorMenuDrawer(false)}
          >
            <List className={style.menueList} component="nav">
              <IconButton
                aria-label="menu"
                onClick={handleCloseMenuDrawer}
                sx={{ color: "white", float: "right", mr: 1 }}
              >
                <CloseIcon />
              </IconButton>
              <Box sx={{ ml: 3, mt: 6 }}>
                {links.map((item, index) =>
                  item.label === "Services" ? (
                    <Box>
                      <ListItemButton
                        onClick={handleClickTokensMenuDrawer}
                        className={style.headingColor}
                      >
                        Services
                        {openDrawerTokens ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <ServiceList
                        openDrawerTokens={openDrawerTokens}
                        handleCloseMenuDrawer={handleCloseMenuDrawer}
                      />
                    </Box>
                  ) : (
                    <NavLink
                      to={item.link}
                      key={`link_${index}`}
                      className={({ isActive }) =>
                        isActive ? style.activeLink : style.linkUnderline
                      }
                    >
                      {item.label === "Contact" ? (
                        <ListItemButton
                          onClick={() => {
                            handleOpenContactDrawer();
                            handleCloseMenuDrawer();
                          }}
                        >
                          {item.label}
                        </ListItemButton>
                      ) : (
                        <ListItemButton onClick={handleCloseMenuDrawer}>
                          {item.label}
                        </ListItemButton>
                      )}
                    </NavLink>
                  )
                )}
              </Box>
            </List>
          </StyledDrawer>
        </Toolbar>
      </Box>
    </StyledAppBar>
  );
};
