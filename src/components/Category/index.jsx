import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { UserContext, PopupContext } from "../../App";
import { NewFlashcardForm } from '..'
import './style.css'

function Category({ categoryData, handleDeleteButton }) {
    const { openPopup, closePopup, setPopupContent } = useContext(PopupContext)
    const navigate = useNavigate()

    const handleAddNewQuestion = () => {
        setPopupContent(<NewFlashcardForm categoryData={categoryData} handleDeleteButton={handleDeleteButton}/>)
    }

    const handleLinkClick = (url) => {
        closePopup()
        navigate(url)
    }

    return (
        <>
            <div className='category-container'>
                <h2>{categoryData.name}</h2>
                <div>
                    {categoryData.description}
                </div>
                <div className='game-button-container'>
                    <button
                        className="button-colours"
                        onClick={() => handleLinkClick(`/flashcards/${categoryData.id}`)}
                    >Flashcards</button>
                    <button
                        className="button-colours"
                        onClick={() => handleLinkClick(`/quiz/${categoryData.id}`)}
                    >Quizcards</button>
                </div>
                <div className='game-button-container'>
                    {categoryData.user_id ? (
                        <button
                            onClick={() => handleDeleteButton(categoryData.id)}
                            className="button-colours"
                        >Delete
                        </button>
                    ): null}
                    <button
                        className="button-colours"
                        onClick={handleAddNewQuestion}
                    >Add Custom Question</button>
                </div>
            </div>
        </>
    )
}

export default Category