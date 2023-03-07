import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";

import {Account, NotFound, LandingPage, FlashcardPage, Categories} from "./pages";

import "./index.css";

export const UserContext = createContext()

export default function App() {
  const [user, setUser] = useState({})
  const contextValue = {
    user, setUser
  }
  console.log('user', user)
  return (
    <UserContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<NavBar user={user} />}>
          <Route index element={<LandingPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/flashcards" element={<FlashcardPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}
