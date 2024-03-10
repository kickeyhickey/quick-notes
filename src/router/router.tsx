import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home.page";
import { AllNotesPage } from "../pages/notes/all-notes.page";

export default function HkyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="archive" element={<AllNotesPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
