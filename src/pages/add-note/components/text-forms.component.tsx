import { IonButton, IonInput, IonItem } from "@ionic/react";
import style from "./text-forms.module.css";
import * as React from "react";

interface TextFormProps {
  handleChange: (e: any) => void;
}

export function TextForms({ handleChange }: TextFormProps): JSX.Element {
  return (
    <div>
      <div style={{ paddingBottom: "16px" }}>
        <input
          onChange={handleChange}
          type="text"
          name="note_title"
          placeholder="Title"
          className={style.title}
        />
      </div>
      <textarea
        className={style.textarea}
        onChange={handleChange}
        name="note_text"
        placeholder="Text"
      />
    </div>
  );
}
