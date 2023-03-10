import React, { useContext } from 'react'

import { PopupContext } from '../../App'

import './style.css'

function Popup({isOpen, setIsOpen, content}) {
    const { closePopup, openPopup } = useContext(PopupContext)

    return isOpen ? (
        <div className='popup'>
            <div className='popup-container'>
                <button
                    className='close-button'
                    onClick={closePopup}
                >
                    X
                </button>
                <div className="popup-content">
                    {content}
                </div>
            </div>
        </div>
    ) : null
}

export default Popup