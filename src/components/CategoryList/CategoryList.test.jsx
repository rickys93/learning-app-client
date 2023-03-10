import React, { useState, useContext } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { screen, render, cleanup, fireEvent, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { UserContext,PopupContext } from '../../App'

import { BrowserRouter } from "react-router-dom";



import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import CategoryList from ".";


describe('Answers Component', () => {




    // render(<Answers/>)

afterEach(() => {

    cleanup()
})


it('should display two buttons', () => {
    const categories = [{ id: 1, name: "one", description: "first" }, { id:2, name: "two", description: "second" }]
    
    //    const {container} =  render(<Answers/>)
    const { getByText } = 
    render(
        <BrowserRouter>
            <PopupContext.Provider
                value={{ openPopup:() => {}, closePopup:() => {}, setPopupContent:() => {} }}
            >
                <CategoryList categories={categories} />
            </PopupContext.Provider>
        </BrowserRouter>
    );

    categories.forEach(a => {
        const check = getByText(a.name);
        expect(check).toBeInTheDocument()
    })


})

it("should call clickCategory callback", async() => {
    const clickCategory = vi.fn();
    const categories = [{ id: 1, name: "one", description: "first" }]
    await act (async()=>{ render(
        
        <BrowserRouter>
            <PopupContext.Provider
                value={{ openPopup:() => {}, closePopup:() => {}, setPopupContent:() => {} }}
            >
                 <CategoryList categories={categories} clickCategory={clickCategory} />
            </PopupContext.Provider>
        </BrowserRouter>
       
    );}) 
    
    
        const button = await screen.getByTestId('0')
      expect(button).toBeInTheDocument()
        //  await userEvent.click(button);
        // expect(clickCategory).toHaveBeenCalledTimes(1);
    
    
  
   
  });

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
