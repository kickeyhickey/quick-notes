import { IonModal } from "@ionic/react";
import React from "react";

export function HkyModal(): JSX.Element {
  return (
    <IonModal trigger="open-modal" initialBreakpoint={1} breakpoints={[0, 1]}>
      <div className="block">Block of Content</div>
    </IonModal>
  );
}
