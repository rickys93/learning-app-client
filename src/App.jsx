import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, Popup } from "./components";

import {
  NotFound,
  LandingPage,
  FlashcardPage,
  Categories,
  QuizPage,
  AboutUsPage,
  NewFlashcard,
} from "./pages";

import "./index.css";

export const UserContext = createContext();
export const PopupContext = createContext(null);

export default function App() {
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const contextValue = {
    user,
    setUser,
  };

  const openPopup = (content) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setPopupContent(null);
    setIsOpen(false);
  };

  useEffect(() => {
    // function to check whether the token stored in local memory matches a user id and if so, log in
    async function authenticate() {
      const token = localStorage.getItem("token");
      if (token) {
        const options = {
          headers: {
            Authorization: token,
          },
        };

        const authResponse = await fetch(
          "http://localhost:3000/users/authorize",
          options
        );
        if (authResponse.status === 200) {
          const data = await authResponse.json();
          setUser(data.user);
        }
      }
    }

    authenticate();
  }, []);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup, setPopupContent }}>
      <UserContext.Provider value={contextValue}>
        <div className="App">
          <Popup isOpen={isOpen} setIsOpen={setIsOpen} content={popupContent} />
          <Routes>
            <Route path="/" element={<NavBar user={user} />}>
              <Route index element={<LandingPage />} />
              <Route path="categories" element={<Categories />} />
              <Route
                path="/flashcards/:categoryId"
                element={<FlashcardPage />}
              />
              <Route path="/quiz/:categoryId" element={<QuizPage />} />
              <Route path="about" element={<AboutUsPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </PopupContext.Provider>
  );
}
