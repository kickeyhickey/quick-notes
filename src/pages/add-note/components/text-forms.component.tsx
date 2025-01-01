import style from "./text-forms.module.css";
import * as React from "react";

interface TextFormProps {
  handleChange: (e: any) => void;
  note?: any;
}

export function TextForms({ handleChange, note }: TextFormProps): JSX.Element {
  console.warn("here", note);

  return (
    <div>
      <>
        <div style={{ paddingBottom: "16px" }}>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Title"
            className={style.title}
            defaultValue={note?.title}
          />
        </div>
        <textarea
          placeholder="Note"
          className={style.textarea}
          onChange={handleChange}
          name="note"
          defaultValue={note?.note}
        />
      </>
    </div>
  );
}
