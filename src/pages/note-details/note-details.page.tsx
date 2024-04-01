import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NotesPage } from "../../components/notes-page/notes-page.component";
import { Header } from "../../components/header/header.component";
import BackArrow from "../../images/arrow-back-outline.svg";
import { BodyText, TitleText } from "../../components/common/text.component";
import HkyCard from "../../components/hky-card/hky-card.component";
import { CardBody } from "../../components/hky-card/card-body/card-body.component";
import Border from "../../components/common/border-line/border.component";

interface NoteProps {
  title: string;
  note: string;
  id: number;
}

export default function NoteDetailsPage() {
  const [note, setNote] = useState<any>([]);
  const { id } = useParams();

  const getNote = async (): Promise<void> => {
    let noteId: number;
    if (id) {
      noteId = JSON.parse(id);
      console.warn(typeof noteId);
      try {
        const response = await fetch(`http://localhost:3000/notes/${noteId}`);

        const note = await response.json();
        setNote(note);
      } catch (error: any) {
        console.warn(error);
      }
    }
  };

  useEffect(() => {
    if (id) {
      getNote();
    }
  }, []);

  return (
    <NotesPage>
      <Header backButton />
      {note &&
        note.map((note: NoteProps, i: number) => {
          return (
            <HkyCard id={note.id}>
              <div
                style={{
                  padding: "16px",
                }}
              >
                <TitleText>{note.title}</TitleText>
              </div>
              <Border />
              <CardBody>
                <BodyText>{note.note}</BodyText>
              </CardBody>
            </HkyCard>
          );
        })}
    </NotesPage>
  );
}
