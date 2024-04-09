import { IonButton, IonModal, IonText } from "@ionic/react";
import "./add-note.module.css";
import { useState } from "react";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { TextForms } from "./components/text-forms.component";
import DropDown from "../../components/drop-down/dropdown.component";
import { Header } from "../../components/header/header.component";
import { NotesPage } from "../../components/notes-page/notes-page.component";

interface notesObjectProps {
  note_title: string;
  note_text: string;
}

export function AddNotePage(): JSX.Element {
  const navigate = useNavigate();
  const [newNote, setNewNote] = useState<notesObjectProps>({
    note_title: "",
    note_text: "",
  });
  const [errorText, setErrorText] = useState<string>("");

  const handleChange = (e: any) => {
    newNote[e.target.name as keyof notesObjectProps] = e.target.value;

    setNewNote(newNote);
  };

  const addNote = () => {
    if (newNote.note_title && newNote.note_text) {
      const request = new Request("http://localhost:3000/new-note", {
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
      <Header addNote={addNote} backButton>
        <IonText>Add Note</IonText>
      </Header>
      <h1>{newNote.note_title}</h1>

      <TextForms handleChange={handleChange} />
      {errorText && (
        <IonModal>
          <h2 style={{ padding: "16px" }}>{errorText}</h2>
        </IonModal>
      )}
    </NotesPage>
  );
}
