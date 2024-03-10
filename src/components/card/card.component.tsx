import React, { ReactNode } from "react";
import style from "./card.module.css";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps): JSX.Element {
  return <div className={style.card}>{children}</div>;
}
