import { ReactNode } from "react";
import style from "./notes-page.module.css";
import React from "react";

interface NotesPageProps {
  children: ReactNode;
}

export function NotesPage({ children }: NotesPageProps): JSX.Element {
  return <div className={style.container}>{children}</div>;
}
