import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom'
import UserAccount from '../UserAccount';
import App from '../../App';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import NavBar from '.';

const UserContext = React.createContext({
    user: {
      name: 'Test User',
      email: 'test@example.com',
    },
});

const PopupContext = React.createContext()

describe("NavBar component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <App>
                    <UserContext.Provider value={{ user: { name: 'Test User' }, setUser:() => {} }}>
                        <PopupContext.Provider value={{ openPopup:() => {}, closePopup:() => {}, setPopupContent:() => {} }}>
                            <NavBar />
                            <UserAccount />
                        </PopupContext.Provider>
                    </UserContext.Provider>
                </App>
            </BrowserRouter>
        )
    })

    afterEach(() => {
        cleanup()
    })

    it('displays a NavBar with 2 children', () => {
        const nav = screen.getByRole("navigation")

        expect(nav).toBeInTheDocument()
        expect(nav.childNodes.length).toBe(2)
    })
    
    it('displays a NavBar with 2 children', () => {
        const nav = screen.getByRole("navigation")

        expect(nav).toBeInTheDocument()
        expect(nav.childNodes.length).toBe(2)
    })
})