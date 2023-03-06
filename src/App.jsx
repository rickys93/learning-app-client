import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import {NotFound, LandingPage, FlashcardPage} from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        {/* <Route path="/flashcards" element={<FlashcardPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
