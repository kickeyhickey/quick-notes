import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router";
import { NotesPage } from "../../components/notes-page/notes-page.component";
import { Header } from "../../components/header/header.component";
import { TextForms } from "../add-note/components/text-forms.component";
import { IonFooter } from "@ionic/react";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { NxtIconButton } from "../../components/common/button/icon-button/icon-button.component";

export interface NoteProps {
  title: string;
  note: string;
}

interface FetchedNoteTypes {
  title: string;
  note: string;
  id: number | null;
}

export default function NoteDetailsPage() {
  const [fetchedNote, setFetchedNote] = useState<FetchedNoteTypes>({
    title: "",
    note: "",
    id: null,
  });
  const navigate: NavigateFunction = useNavigate();
  const { id } = useParams();

  const getNote = async (): Promise<void> => {
    let noteId: number;
    if (id) {
      noteId = JSON.parse(id);
      try {
        const response = await fetch(`http://localhost:3001/notes/${noteId}`);

        const note = await response.json();

        setFetchedNote(note[0]);
      } catch (error: any) {
        console.warn(error);
      }
    }
  };

  const deleteNote = async (): Promise<void> => {
    if (id) {
      try {
        let noteId = JSON.parse(id);

        const response = await fetch(`http://localhost:3001/notes/${noteId}`, {
          method: "DELETE",
        });

        if (response.status !== 200 && response.status !== 304) {
          alert("Something went wrong with DELETE");
          return;
        }
        navigate("/");
      } catch (error: any) {
        console.warn("Error", error);
      }
    }
  };

  const editNote = async (): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:3001/notes/${id}`, {
        method: "PUT",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(fetchedNote),
      });

      if (response.status !== 200 && response.status !== 304) {
        alert("Something went wrong with UPDATE");
        return;
      }
      navigate("/");
    } catch (error: any) {
      console.warn("Error", error.message);
    }
  };

  useEffect(() => {
    if (id) {
      getNote();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetchedNote[e.target.name as keyof NoteProps] = e.target.value;
    setFetchedNote(fetchedNote);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      editNote();
    }
    DeleteSweepIcon;
  };

  return (
    <NotesPage>
      <Header onClick={editNote} backButton></Header>
      <TextForms
        onKeyDown={onKeyDown}
        note={fetchedNote}
        handleChange={handleChange}
      />

      <IonFooter style={{ backgroundColor: "gray" }} translucent={true}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <NxtIconButton
            style={{ width: "100%" }}
            onClick={deleteNote}
            icon={<DeleteSweepIcon color="error" />}
          />
        </div>
      </IonFooter>
    </NotesPage>
  );
}
