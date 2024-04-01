import { ReactNode } from "react";
import style from "./hky-card.module.css";
import React from "react";
import { useNavigate } from "react-router";
import { SubtitleText } from "../common/text.component";

interface CardProps {
  id: number;
  children: ReactNode;
}

export default function HkyCard({ children, id }: CardProps): JSX.Element {
  const navigate = useNavigate();
  const date = new Date().getTime();
  return (
    <div onClick={() => navigate(`/notes/${id}`)} className={style.container}>
      <div className={style.noteContainer}>{children}</div>
      <SubtitleText>{date}</SubtitleText>
    </div>
  );
}
