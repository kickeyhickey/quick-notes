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
import style from "./all-notes.module.css";
import { BodyText, TitleText } from "../../components/common/text.component";
import OutlinedButton from "../../components/common/button/outlined-button.component";

interface Notes {
  title: string;
  note: string;
  id: number;
}

export function AllNotesPage() {
  const [notesArray, setNotesArray] = useState<Notes[]>([]);
  const [errorText, setErrorText] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
        <div id="open-modal">
          <OutlinedButton
            onClick={() => setIsModalOpen(!isModalOpen ? true : false)}
          >
            <BodyText>All Catagories</BodyText>
          </OutlinedButton>
        </div>
      </Header>
      <div className={style.container}>
        {notesArray &&
          notesArray.map((note: Notes, index: number): JSX.Element => {
            return (
              <HkyCard key={`${note}${index}`} id={note.id}>
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
