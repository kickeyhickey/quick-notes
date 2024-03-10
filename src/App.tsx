import { IonApp, setupIonicReact } from "@ionic/react";
import React from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import HkyRouter from "./router/router";
// import { AllNotesPage } from "./pages/notes/all-notes.page";

setupIonicReact();

const App: React.FC = () => (
  <IonApp
    style={{
      width: "100vw",
      height: "100vh",
    }}
  >
    <HkyRouter />
  </IonApp>
);

export default App;
