import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";
import React, { ReactNode, useState } from "react";
import style from "./header.module.css";
import CheckIcon from "@mui/icons-material/Check";
import { NxtIconButton } from "../common/button/icon-button/icon-button.component";
interface HeaderProps {
  backButton?: boolean;
  isDelete?: boolean;
  deleteNote?: () => void;
  onClick?: () => void;
  children?: ReactNode;
}

export function Header({
  onClick,
  children,
  backButton,
}: HeaderProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.headerBody}>
        {backButton ? (
          <div className={style.buttonContainer}>
            <NxtIconButton
              icon={<ArrowBackIosIcon />}
              onClick={() => navigate("/")}
            />
          </div>
        ) : (
          <div></div>
        )}
        <div style={{ flex: 1 }}></div>

        <div style={{ flex: 1 }}>{children}</div>
        <div style={{ flex: 1 }}></div>
        {onClick && (
          <div>
            <NxtIconButton icon={<CheckIcon />} onClick={onClick} />
          </div>
        )}
      </div>
    </div>
  );
}
