import React, { ReactNode } from "react";
import style from "./notes-page.module.css";

interface NotesPageProps {
  children: ReactNode;
}

export function NotesPage({ children }: NotesPageProps): JSX.Element {
  return <div className={style.container}>{children}</div>;
}
