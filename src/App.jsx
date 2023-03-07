import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";


import {NotFound, LandingPage, FlashcardPage, Categories, Login, Signup, QuizzPage} from "./pages";

import "./index.css";

export const UserContext = createContext()

export default function App() {
    const [user, setUser] = useState({})
    const contextValue = {
        user, setUser
    }

  useEffect(() => {
    // function to check whether the token stored in local memory matches a user id and if so, log in 
        async function authenticate() {
            const token = localStorage.getItem("token")
            if (token) {
                const options = {
                headers: {
                    Authorization: token
                    },
                };
            
                const authResponse = await fetch("http://localhost:3000/users/authorize", options);
                if (authResponse.status === 200) {
                    const data = await authResponse.json();
                    setUser(data.user)
                }
            }
        }

        authenticate()
  }, [])
  
  return (
        <UserContext.Provider value={contextValue}>
        <Routes>
            <Route path="/" element={<NavBar user={user} />}>
                <Route index element={<LandingPage />} />
                <Route path="categories" element={<Categories />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/flashcards/:categoryId" element={<FlashcardPage />} />
                <Route path="/quiz" element={<QuizzPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          </UserContext.Provider>
      
        
       
        
       
     
  );
}
