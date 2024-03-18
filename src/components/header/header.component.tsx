import { IonButton, IonIcon, IonText } from "@ionic/react";
import IconArrowBack from "../../images/arrow-back-outline.svg";
import { useNavigate } from "react-router";
import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  backButton?: boolean;
}

export function Header({ children, backButton }: HeaderProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      style={{
        marginBottom: "48px",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          width: "auto",
          height: "35px",
          padding: 0,
          alignItems: "center",
        }}
      >
        {backButton ? (
          <div
            style={{ display: "flex", flex: 1, justifyContent: "flex-start" }}
          >
            <IonButton fill="clear" onClick={() => navigate("/")}>
              <IonIcon src={IconArrowBack} />
            </IonButton>
          </div>
        ) : (
          <div></div>
        )}
        <div style={{ flex: 1 }}>{children}</div>
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
}
