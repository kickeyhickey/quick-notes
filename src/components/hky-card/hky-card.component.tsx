import { ReactNode } from "react";
import style from "./hky-card.module.css";
import React from "react";
import { IonText } from "@ionic/react";

interface CardProps {
  children: ReactNode;
}

export default function HkyCard({ children }: CardProps): JSX.Element {
  const date = new Date().getTime();
  return (
    <div className={style.container}>
      <div className={style.noteContainer}>{children}</div>
      <IonText className={style.dateText}>{date}</IonText>
    </div>
  );
}
