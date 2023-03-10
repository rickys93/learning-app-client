import React, { useState } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, act, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { UserContext,PopupContext } from '../../App'

import { BrowserRouter , useNavigate } from "react-router-dom";
import * as router from 'react-router'


import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Quizcard from ".";


describe('Quizcard Component', () => {




    // render(<Answers/>)

afterEach(() => {

    cleanup()
})




it('is displaying correct information', async () => {
    


    const flashcards = [{ question: "first", answers: [{answer:"three", correct: true},{answer:"four", correct: false}]} ]
    // fetch.mockResolvedValue(createFetchResponse(flashcards))
   
const loading = false

  
const counter = 2
    const next = 0
    const limit = 2
    const length = 10
   await act (async()=>{render(<BrowserRouter>
    <PopupContext.Provider
        value={{ openPopup:() => {}, closePopup:() => {}, setPopupContent:() => {} }}
    >
        <Quizcard  flashcards={flashcards} next = {next} length={length} limit={limit} counter={counter} loading={loading} useVavigate={useNavigate}/>
    </PopupContext.Provider>
</BrowserRouter> )}) 
   
   expect(screen.getByText('first')).toBeInTheDocument();
  
})

it('is redirecting after clicking a button', async () => {
    


    const flashcards = [{ question: "first", answers: [{answer:"three", correct: true},{answer:"four", correct: false}]} ]
    // fetch.mockResolvedValue(createFetchResponse(flashcards))
   
const loading = false
const navigate = vi.fn()
     vi.spyOn(router, 'useNavigate').mockImplementation(()=> navigate)
  
const counter = 2
    const next = 0
    const limit = 2
    const length = 10
   await act (async()=>{render(<BrowserRouter>
    <PopupContext.Provider
        value={{ openPopup:() => {}, closePopup:() => {}, setPopupContent:() => {} }}
    >
        <Quizcard  flashcards={flashcards} next = {next} length={length} limit={limit} counter={counter} loading={loading} useVavigate={useNavigate}/>
    </PopupContext.Provider>
</BrowserRouter> )}) 
   
  
  await userEvent.click(screen.getByText('Quit'))
  expect(navigate).toHaveBeenCalled()
})
    })
