import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import {Account, NotFound, LandingPage, FlashcardPage, QuizzPage} from "./pages";


import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<LandingPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/flashcards" element={<FlashcardPage />} />
        <Route path="/quiz" element={<QuizzPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
