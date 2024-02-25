import {
  IonButton,
  IonContent,
  IonFooter,
  IonModal,
  IonPage,
} from "@ionic/react";
import "./Home.module.css";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ExploreContainer } from "./components/ExploreContainer.component";

export function Home(): JSX.Element {
  const navigate = useNavigate();
  const [newNote, setNewNote] = useState<any>({
    note_title: "",
    note_text: "",
  });
  const [notesArray, setNotesArray] = useState<string[]>([]);
  const [errorText, setErrorText] = useState<string>("");

  useEffect(() => {
    getNotes();
    console.warn("notes", notesArray);
  }, []);

  const getNotes = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/notes");
      const notes = await response.json();
      setNotesArray(notes);
    } catch (error: any) {
      console.error(error);
      setErrorText(error.body);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    newNote[e.target.name] = e.target.value;
    setNewNote(newNote);
  };

  const addNote = () => {
    const request = new Request("http://localhost:3000/new-note", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(newNote),
    });
    fetch(request).then((response) => {
      console.warn(response);

      response
        .json()
        .then(function (data) {
          console.log(data, "data");
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <h1>{newNote.note_title}</h1>
        <ExploreContainer
          label={newNote.note_title}
          text={newNote.note_text}
          title={"Hickey Notes"}
          handleChange={handleChange}
          addNote={addNote}
        />
        {errorText && (
          <IonModal>
            <h2 style={{ padding: "16px" }}>{errorText}</h2>
          </IonModal>
        )}
      </IonContent>
      <IonFooter
        style={{
          paddingBottom: "32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IonButton
          onClick={() => navigate("/archive")}
          style={{ width: "400px" }}
        >
          All Notes
        </IonButton>
      </IonFooter>
    </IonPage>
  );
}
