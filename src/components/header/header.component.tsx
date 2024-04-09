import { IonButton, IonIcon } from "@ionic/react";
import IconArrowBack from "../../images/arrow-back-outline.svg";
import { useNavigate } from "react-router";
import React, { ReactNode } from "react";
import TrashBinImg from "../../images/trash-bin-outline.svg";
import CheckMarkImg from "../../images/check-o.svg";
import style from "./header.module.css";

interface HeaderProps {
  children?: ReactNode;
  backButton?: boolean;
  isDelete?: boolean;
  deleteNote?: () => void;
  addNote?: () => void;
}

export function Header({
  addNote,
  deleteNote,
  children,
  backButton,
  isDelete,
}: HeaderProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.headerBody}>
        {backButton ? (
          <div className={style.buttonContainer}>
            <IonButton fill="clear" onClick={() => navigate("/")}>
              <IonIcon src={IconArrowBack} />
            </IonButton>
          </div>
        ) : (
          <div></div>
        )}
        <div style={{ flex: 1 }}>{children}</div>
        <div style={{ flex: 1 }}></div>
        {isDelete && (
          <IonButton fill="clear" onClick={deleteNote}>
            <IonIcon src={TrashBinImg} />
          </IonButton>
        )}
        {addNote && (
          <IonButton fill="clear" onClick={addNote}>
            <IonIcon src={CheckMarkImg} />
          </IonButton>
        )}
      </div>
    </div>
  );
}
