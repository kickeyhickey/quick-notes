import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonText,
} from "@ionic/react";
import React from "react";
import style from "./fab-button.module.css";

import {
  add,
  chevronBack,
  chevronDown,
  chevronForward,
  chevronUp,
} from "ionicons/icons";

export default function FabButton() {
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
        <IonFabButton>
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
