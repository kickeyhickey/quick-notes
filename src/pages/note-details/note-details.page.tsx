import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router";
import { NotesPage } from "../../components/notes-page/notes-page.component";
import { Header } from "../../components/header/header.component";
import { IonText, IonModal } from "@ionic/react";
import { TextForms } from "../add-note/components/text-forms.component";

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
  const [errorText, setErrorText] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();
  const { id } = useParams();

  const getNote = async (): Promise<void> => {
    let noteId: number;
    if (id) {
      noteId = JSON.parse(id);
      try {
        const response = await fetch(`http://localhost:3001/notes/${noteId}`);

        const note = await response.json();
        console.warn("getnote", note);

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
      console.warn("Error", error);
    }
  };

  useEffect(() => {
    if (id) {
      getNote();
    }
  }, []);

  const handleChange = (e: any) => {
    fetchedNote[e.target.name as keyof NoteProps] = e.target.value;
    setFetchedNote(fetchedNote);
  };

  return (
    <NotesPage>
      <Header onClick={editNote} backButton></Header>

      <TextForms note={fetchedNote} handleChange={handleChange} />
      {errorText && (
        <IonModal>
          <h2 style={{ padding: "16px" }}>{errorText}</h2>
        </IonModal>
      )}
    </NotesPage>
    // <NotesPage>
    //   <Header isDelete backButton deleteNote={deleteNote} />
    //   {note &&
    //     note.map((note: NoteProps, i: number) => {
    //       return (
    //         <HkyCard id={note.id} key={`${note}${i}`}>
    //           <div className={style.padding}>
    //             <TitleText>{note.title}</TitleText>
    //           </div>
    //           <Border />
    //           <CardBody>
    //             <BodyText>{note.note}</BodyText>
    //           </CardBody>
    //         </HkyCard>
    //       );
    //     })}
    // </NotesPage>
  );
}
