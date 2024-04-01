import { Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import style from "./text.module.css";

export function TitleText({ children }: PropsWithChildren): JSX.Element {
  return <p className={style.title}>{children}</p>;
}

export function BodyText({ children }: PropsWithChildren): JSX.Element {
  return <p className={style.body}>{children}</p>;
}

export function SubtitleText({ children }: PropsWithChildren): JSX.Element {
  return <p className={style.subtitle}>{children}</p>;
}
