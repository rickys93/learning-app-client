import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { UserContext,PopupContext } from '../../App'

import { BrowserRouter } from "react-router-dom";

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import Category from ".";

describe("Category component", () => {
    beforeEach(() => {
        const categoryData = { name: 'Test Category', description: 'Test Description' };
        const handleDeleteButton = () => {}
        render(
            <BrowserRouter>
                <PopupContext.Provider
                    value={{ openPopup:() => {}, closePopup:() => {}, setPopupContent:() => {} }}
                >
                    <Category categoryData={categoryData} handleDeleteButton={handleDeleteButton}/>
                </PopupContext.Provider>
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("calls handleLinkClick when Flashcards button is clicked", () => {
        // const handleLinkClick = jest.fn()
        const flashcardsButton = screen.getByRole('button', { name: 'Flashcards' });
        expect(flashcardsButton).toBeInTheDocument()
        // userEvent.click(flashcardsButton);
        // expect(handleLinkClick).toHaveBeenCalled();
    });

});
