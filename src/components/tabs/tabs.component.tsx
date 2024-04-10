import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import style from "./tabs.module.css";

export function HkyTabs(): JSX.Element {
  const handleChange = () => {};

  return (
    <Paper
      sx={{ background: "var(--ion-card-background)" }}
      className={style.container}
      elevation={3}
    >
      <BottomNavigation
        sx={{ background: "var(--ion-card-background)" }}
        className={style.navPadding}
        showLabels
        onChange={handleChange}
      >
        <BottomNavigationAction
          className={style.fontColor}
          label="Notes"
          sx={{ color: "white" }}
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          className={style.fontColor}
          label="To-Dos"
          sx={{ color: "white" }}
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
