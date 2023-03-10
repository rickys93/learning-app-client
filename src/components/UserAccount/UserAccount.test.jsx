import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import jest from 'jest-mock'

import { render } from "../../testing/test-utils";

import { Login } from '..'

import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

import UserAccount from ".";

describe("Category component", () => {
    beforeEach(() => {
        
    });

    afterEach(() => {
        cleanup();
    });

    it("renders welcome message when user is given", () => {
        const user = {
            first_name:"Test User"
        }
        render(<UserAccount/>, {user})
        const welcomeMessage = screen.getByText(`Welcome, ${user.first_name}!`);
        const logoutButton = screen.getByRole("button", { name: "Log Out" })
        expect(welcomeMessage).toBeInTheDocument()
        expect(logoutButton).toBeInTheDocument()

    });

    it("renders log in and sign up button when no user is given", () => {
        const user = {
            
        }
        render(<UserAccount/>, {user})
        const logInButton = screen.getByRole("link", { name: "Log In" })
        const signUpButton = screen.getByRole("link", { name: "Sign Up" })
        expect(logInButton).toBeInTheDocument()
        expect(signUpButton).toBeInTheDocument()
    });
    it("opens the login popup when the login link is clicked", () => {
        const openPopupMock = jest.fn();
        const user = {

        }
        render(<UserAccount/>, { user, popup:{openPopup: openPopupMock} })
    
        userEvent.click(screen.getByText("Log In"));
        expect(openPopupMock).toHaveBeenCalledTimes(1);
      });
    

})