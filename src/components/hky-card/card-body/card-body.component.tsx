import React, { PropsWithChildren } from "react";
import style from "./card-body.module.css";

export function CardBody({ children }: PropsWithChildren): JSX.Element {
  return <div className={style.padding}>{children}</div>;
}
