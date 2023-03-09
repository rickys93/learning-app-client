import React, { useState } from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'




import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Answers from ".";


describe('Answers Component', () => {




    // render(<Answers/>)

afterEach(() => {

    cleanup()
})


it('should display two buttons', () => {
    const answers = [{ answer: "one", correct: "false" }, { answer: "two", correct: "true" }]
    const score = 0
    const selected = false
    const next = 0
    const limit = 1
    //    const {container} =  render(<Answers/>)
    const { getByText } = render(<Answers answers={answers} limit={limit} next={next}/>)
    answers.forEach(a => {
        const check = getByText(a.answer);
        expect(check).toBeInTheDocument()
    })

})

it('should display two buttons', () => {
    const answers = [{ answer: "one", correct: "false" }, { answer: "two", correct: "true" }]
    const score = 0
    const selected = false
    const next = 0
    const limit = 0
   
    render(<Answers answers={answers} limit={limit} next={next} score = {score}/>)
    
        const check = screen.getByText('Your final score is 0/0')
        expect(check).toBeInTheDocument()
   

})  
    })
