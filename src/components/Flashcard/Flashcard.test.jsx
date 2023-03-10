import React, { useState } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'




import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Flashcard from ".";


describe('Flashcard Component', () => {




    // render(<Answers/>)

afterEach(() => {

    cleanup()
})


it('is calling api', async () => {
    


    const flashcards = [{ question: "first", answers: [{answer:"three", correct: true},{answer:"four", correct: false}]} ]
    // fetch.mockResolvedValue(createFetchResponse(flashcards))
   
const loading = false
    const id = 1
    const fetchDataMock = vi.spyOn(global, 'fetch').mockResolvedValue({
        json: vi.fn().mockResolvedValue(flashcards),
      });
  
     
      
  

    const next = 0
    const limit = 2
    
   await act (async()=>{render(<Flashcard id={id} flashcards={flashcards} next = {next}/> )}) 
   
   expect(fetchDataMock).toHaveBeenCalled()
   

})

it('is displaying correct information', async () => {
    


    const flashcards = [{ question: "first", answers: [{answer:"three", correct: true},{answer:"four", correct: false}]} ]
    // fetch.mockResolvedValue(createFetchResponse(flashcards))
   
const loading = false
    const id = 1
    const fetchDataMock = vi.spyOn(global, 'fetch').mockResolvedValue({
        json: vi.fn().mockResolvedValue(flashcards),
      });
  
    
      
  

    const next = 0
    const limit = 2
    
   await act (async()=>{render(<Flashcard id={id} flashcards={flashcards} next = {next} /> )}) 
   
   expect(screen.getByText('first')).toBeInTheDocument();
  
})

// it('should display two buttons', () => {
//     const answers = [{ answer: "one", correct: "false" }, { answer: "two", correct: "true" }]
//     const score = 0
//     const selected = false
//     const next = 0
//     const limit = 0
   
//     render(<Answers answers={answers} limit={limit} next={next} score = {score}/>)
    
//         const check = screen.getByText('Your final score is 0/0')
//         expect(check).toBeInTheDocument()
   

// })  
    })
