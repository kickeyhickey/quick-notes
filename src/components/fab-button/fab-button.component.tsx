import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonText,
} from "@ionic/react";
import React from "react";
import style from "./fab-button.module.css";

import { add, chevronBack, navigate } from "ionicons/icons";
import { NavigateFunction, useNavigate } from "react-router";

export default function FabButton() {
  const navigate: NavigateFunction = useNavigate();

  return (
    <IonFab
      className={style.buttonMargin}
      color="white"
      slot="fixed"
      vertical="bottom"
      horizontal="end"
    >
      <IonFabButton className={style.button}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="start">
        <IonFabButton onClick={() => navigate("/add-note")}>
          <IonIcon icon={chevronBack}></IonIcon>
          <IonText color={"white"}>Note</IonText>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={chevronBack}></IonIcon>
          <IonText color={"white"}>To-Do</IonText>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  );
}
