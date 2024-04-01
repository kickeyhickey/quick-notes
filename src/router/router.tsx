import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AllNotesPage } from "../pages/notes/all-notes.page";
import React from "react";
import { AddNotePage } from "../pages/add-note/add-note.page";
import NoteDetailsPage from "../pages/note-details/note-details.page";

export default function HkyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllNotesPage />} />
        <Route path="/add-note" element={<AddNotePage />} />
        <Route path="/notes/:id" element={<NoteDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
