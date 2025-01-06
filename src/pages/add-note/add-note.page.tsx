import { IonButton, IonModal, IonText } from "@ionic/react";
import "./add-note.module.css";
import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { TextForms } from "./components/text-forms.component";
import DropDown from "../../components/drop-down/dropdown.component";
import { Header } from "../../components/header/header.component";
import { NotesPage } from "../../components/notes-page/notes-page.component";

export interface NotesObjectProps {
  title: string;
  note: string;
}

export function AddNotePage(): JSX.Element {
  const navigate = useNavigate();
  const [newNote, setNewNote] = useState<NotesObjectProps>({
    title: "",
    note: "",
  });
  const [errorText, setErrorText] = useState<string>("");

  const handleChange = (e: any) => {
    console.warn("handle", e.target.value);

    newNote[e.target.name as keyof NotesObjectProps] = e.target.value;

    setNewNote(newNote);
  };

  console.log("here");

  const addNote = () => {
    if (newNote.title && newNote.note) {
      console.warn("e", newNote);
      const request = new Request("http://localhost:3001/notes", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(newNote),
      });
      fetch(request).then((response) => {
        response
          .json()
          .then(function (data) {
            console.log(data, "data");
            navigate("/all-notes");
          })
          .catch(function (err) {
            setErrorText(err);
            console.log(err);
          });
      });
    }
  };

  return (
    <NotesPage>
      {/* <Header onClick={addNote} backButton>
        <IonText>Add Note</IonText>
      </Header> */}

      <TextForms handleChange={handleChange} />
      {errorText && (
        <IonModal>
          <h2 style={{ padding: "16px" }}>{errorText}</h2>
        </IonModal>
      )}
    </NotesPage>
  );
}
