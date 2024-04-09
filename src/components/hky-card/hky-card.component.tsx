import { ReactNode } from "react";
import style from "./hky-card.module.css";
import React from "react";
import { useNavigate } from "react-router";
import { SubtitleText } from "../common/text.component";

interface CardProps {
  id?: number;
  children: ReactNode;
  onClick?: () => void;
}

export function HkyCard({ children, onClick }: CardProps): JSX.Element {
  const date = new Date().getTime();
  return (
    <div onClick={onClick} className={style.container}>
      <div className={style.noteContainer}>{children}</div>
    </div>
  );
}
