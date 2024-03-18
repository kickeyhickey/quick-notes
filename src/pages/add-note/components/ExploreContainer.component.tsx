import { IonButton } from "@ionic/react";
import style from "./ExploreContainer.module.css";
import * as React from "react";

interface ContainerProps {
  label: string;
  text: string;
  title: string;
  addNote: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ExploreContainer({
  addNote,
  label,
  text,
  title,
  handleChange,
}: ContainerProps): JSX.Element {
  return (
    <div className={style.container}>
      <strong>{title}</strong>

      <form>
        <input
          onChange={handleChange}
          type="text"
          name="note_title"
          placeholder="Note title"
        />
        <input
          type="text"
          placeholder="Note text"
          name="note_text"
          onChange={handleChange}
        />
      </form>

      <div style={{ display: "flex", flexDirection: "row", padding: "16px" }}>
        <div style={{ padding: "16px" }}>
          <h3>{label}</h3>
        </div>
        <div style={{ padding: "16px" }}>
          <h3>{text}</h3>
        </div>
      </div>

      <div className={style.buttonContainer}>
        <IonButton onClick={addNote}>Add Note</IonButton>
      </div>
    </div>
  );
}
