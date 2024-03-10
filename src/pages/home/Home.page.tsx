import { IonButton, IonModal } from "@ionic/react";
import "./Home.module.css";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ExploreContainer } from "./components/ExploreContainer.component";
import DropDown from "../../components/drop-down/dropdown.component";

interface notesObjectProps {
  note_title: string;
  note_text: string;
}

export function Home(): JSX.Element {
  const navigate = useNavigate();
  const [newNote, setNewNote] = useState<notesObjectProps>({
    note_title: "",
    note_text: "",
  });
  const [errorText, setErrorText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    newNote[e.target.name as keyof notesObjectProps] = e.target.value;
    console.warn(newNote, "name");

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
        console.warn(response);

        response
          .json()
          .then(function (data) {
            console.log(data, "data");
          })
          .catch(function (err) {
            setErrorText(err);
            console.log(err);
          });
      });
    }
  };

  return (
    <div>
      <header
        style={{
          position: "absolute",
          width: "100vw",
          top: 0,
          backgroundColor: "red",
          marginTop: "32px",
          height: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <DropDown />
        </div>
      </header>
      <div>
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
      </div>
      <footer
        style={{
          bottom: 0,
          position: "absolute",
          width: "100%",
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
      </footer>
    </div>
  );
}
