import { Button } from "@mui/material";
import React, { PropsWithChildren } from "react";
import style from "./outlined-button.module.css";

interface OutlinedButtonProps extends PropsWithChildren {
  onClick: () => void;
}

export default function OutlinedButton({
  children,
  onClick,
}: OutlinedButtonProps): JSX.Element {
  return (
    <Button
      onClick={onClick}
      sx={{
        borderColor: "white",
        borderRadius: "12px",
      }}
      variant="outlined"
      className={style.button}
    >
      {children}
    </Button>
  );
}
