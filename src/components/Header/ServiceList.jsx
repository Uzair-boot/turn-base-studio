import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { portFolioDropDown } from "../../utils/headerArray";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export const ServiceList = ({ openDrawerTokens, handleCloseMenuDrawer }) => {
  return (
    <List
      component="div"
      disablePadding
      sx={{
        ml: 5,
        display: openDrawerTokens ? "none" : "block",
        width: "50px",
      }}
    >
      {portFolioDropDown.map((items, index) => (
        <NavLink to={items.link} className={style.serviceLink} key={items}>
          <ListItemButton
            className={style.headingColor}
            onClick={handleCloseMenuDrawer}
            sx={{ width: "150px" }}
          >
            <ListItemText
              primary={<Box sx={{ width: "150px" }}>{items.label}</Box>}
            />
          </ListItemButton>
        </NavLink>
      ))}
    </List>
  );
};
