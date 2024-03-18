import { IonButton, IonModal, IonText } from "@ionic/react";
import { useEffect, useState } from "react";
import { NotesPage } from "../../components/notes-page/notes-page.component";
import React from "react";
import DropDown from "../../components/drop-down/dropdown.component";
import { Header } from "../../components/header/header.component";
import HkyCard from "../../components/hky-card/hky-card.component";
import FabButton from "../../components/fab-button/fab-button.component";
import { HkyTabs } from "../../components/tabs/tabs.component";
import { HkyModal } from "../../components/modal/hky-modal.component";

interface Notes {
  title: string;
  note: string;
}

export function AllNotesPage() {
  const [notesArray, setNotesArray] = useState<Notes[]>([]);
  const [errorText, setErrorText] = useState<string>("");
  const [isNewNote, setIsNewNote] = useState<boolean>(false);
  const [isNewToDo, setIsNewToDo] = useState<boolean>(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/notes");

      const notes = await response.json();
      console.warn(
        "response",
        notes.map((v: Notes) => v.title)
      );
      setNotesArray(notes);
    } catch (error: any) {
      console.error(error);
      setErrorText(error.body);
    }
  };

  return (
    <NotesPage>
      <Header>
        <IonButton id="open-modal">
          <IonText>All Catagories</IonText>
        </IonButton>
      </Header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {notesArray &&
          notesArray.map((note: Notes, index: number): JSX.Element => {
            return (
              <HkyCard key={`${note}${index}`}>
                <IonText key={`note.title${index}`}>{note.title}</IonText>
              </HkyCard>
            );
          })}
        <div style={{ padding: "16px", margin: "32px" }}>
          <FabButton />
        </div>
      </div>
      <HkyTabs />
      {errorText && (
        <IonModal>
          <h2 style={{ padding: "16px" }}>{errorText}</h2>
        </IonModal>
      )}
      <HkyModal />
    </NotesPage>
  );
}
