import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import style from "./tabs.module.css";

export function HkyTabs() {
  const handleChange = () => {
    console.warn("tabs button pressed");
  };

  return (
    <Paper className={style.container} elevation={3}>
      <BottomNavigation
        className={style.navPadding}
        showLabels
        onChange={handleChange}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Archive" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
