import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonModal,
  IonText,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { NotesPage } from "../../components/notes-page/notes-page.component";

export function AllNotesPage() {
  const [notesArray, setNotesArray] = useState<string[]>([]);
  const [errorText, setErrorText] = useState<string>("");

  useEffect(() => {
    getNotes();
    console.warn(
      "notes",
      notesArray.map((v) => v)
    );
  }, []);

  const getNotes = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/notes");

      const notes = await response.json();
      console.warn(
        "response",
        notes.map((v: any) => v.title)
      );
      setNotesArray(notes);
    } catch (error: any) {
      console.error(error);
      setErrorText(error.body);
    }
  };

  return (
    <NotesPage>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IonCard style={{ width: "600px", height: "600px" }}>
          <IonCardTitle style={{ padding: "16px" }}>Catagories</IonCardTitle>
          <IonCardContent style={{ display: "flex", flexDirection: "column" }}>
            <IonText>yoyoyo</IonText>
            {notesArray &&
              notesArray.map((note: any, index: number): JSX.Element => {
                return (
                  <IonText key={`note.title${index}`}>{note.title}</IonText>
                );
              })}
          </IonCardContent>
        </IonCard>
      </div>
      {errorText && (
        <IonModal>
          <h2 style={{ padding: "16px" }}>{errorText}</h2>
        </IonModal>
      )}
    </NotesPage>
  );
}