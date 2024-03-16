import { IonModal } from "@ionic/react";
import React from "react";

interface HkyModalProps {
  open: boolean;
}

export function HkyModal({ open }: HkyModalProps): JSX.Element {
  return (
    <IonModal isOpen={open} initialBreakpoint={1} breakpoints={[0, 1]}>
      <div className="block">Block of Content</div>
    </IonModal>
  );
}
