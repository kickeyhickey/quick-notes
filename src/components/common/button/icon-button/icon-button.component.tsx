import React, { ReactNode } from "react";
import { ButtonProps, SvgIconProps } from "@mui/material";
import style from "./nxt-icon-button.module.css";
import { TextButton } from "../buttons.component";

interface NxtIconButtonProps extends ButtonProps {
  icon: ReactNode;
  text?: string;
}

export function NxtIconButton({
  text,
  icon,
  ...props
}: NxtIconButtonProps): JSX.Element {
  return (
    <TextButton className={style.buttonWrapper} {...props}>
      <div className={style.iconWrapper}>{icon}</div>
      {text}
    </TextButton>
  );
}
