import React, { useContext } from 'react'

import { PopupContext } from '../../App'

import './style.css'

function Popup({isOpen, setIsOpen, content}) {
    const { closePopup, openPopup } = useContext(PopupContext)

    return isOpen ? (
        <div className='popup'>
            <div className='popup-content'>
                <button
                    className='close-button'
                    onClick={closePopup}
                >
                    X
                </button>
                {content}
            </div>
        </div>
    ) : null
}

export default Popup