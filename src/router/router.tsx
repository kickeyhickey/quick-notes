import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AllNotesPage } from "../pages/notes/all-notes.page";
import React from "react";
import { AddNotePage } from "../pages/add-note/add-note.page";

export default function HkyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllNotesPage />} />
        <Route path="/add-note" element={<AddNotePage />} />
      </Routes>
    </BrowserRouter>
  );
}
