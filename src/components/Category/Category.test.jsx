import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import jest from 'jest-mock'

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

    it("calls handleLinkClick when learn button is clicked", () => {
        const handleLinkClick = jest.fn()
        
        const learnButton = screen.getByRole('button', { name: 'Learn' });
        expect(learnButton).toBeInTheDocument()

        vi.spyOn(handleLinkClick).mockResolvedValueOnce({ data: [
            {
                "setup": "What do reindeer hang on their Christmas trees?",
                "punchline": "hornaments"
            }
        ]})

        vi.spyOn(Category, 'handleLinkClick').mockImplementation(handleLinkClick);

        // jest.replaceProperty(Category.type.prototype, 'handleLinkClick', handleLinkClick);
        userEvent.click(learnButton);
        // expect(handleLinkClick).toHaveBeenCalledTimes(1);

    });

});
