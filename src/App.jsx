import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
