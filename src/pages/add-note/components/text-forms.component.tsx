import style from "./text-forms.module.css";
import * as React from "react";

interface TextFormProps {
  handleChange: (e: any) => void;
  note?: any;
  onKeyDown?: (e: any) => void;
}

export function TextForms({
  handleChange,
  note,
  onKeyDown,
}: TextFormProps): JSX.Element {
  return (
    <div>
      <>
        <div>
          <input
            style={{
              outline: ".2px solid white",
              padding: "8px",
              marginBottom: "16px",
            }}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            type="text"
            name="title"
            placeholder="Title"
            className={style.title}
            defaultValue={note?.title}
          />
        </div>
        <textarea
          style={{
            outline: ".2px solid white",
            padding: "8px",
            marginBottom: "16px",
          }}
          onKeyDown={onKeyDown}
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
