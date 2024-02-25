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
// import { AllNotesPage } from "./pages/notes/all-notes.page";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home.page";
import { AllNotesPage } from "./pages/notes/all-notes.page";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <BrowserRouter>
      <Routes>
        <Route path="archive" element={<AllNotesPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </IonApp>
);

export default App;
