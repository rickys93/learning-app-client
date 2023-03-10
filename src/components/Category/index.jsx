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
                <div className='cat-descr'>
                    {categoryData.description}
                </div>
                <div className='b-cont'>
                    <button className='b'
                        onClick={() => handleLinkClick(`/flashcards/${categoryData.id}`)}
                    >Learn</button>
                    <button  className='b'
                        onClick={() => handleLinkClick(`/quiz/${categoryData.id}`)}
                    >Quiz</button>
                </div>
                <div className='c-cont'>
                <button className='c'
                        onClick={handleAddNewQuestion}
                    >Add Custom Question</button>
                    {categoryData.user_id ? (
                        <button className='b'
                        onClick={() => handleDeleteButton(categoryData.id)}
                        >Delete
                        </button>
                    ): null}
                    
                </div>
            </div>
        </>
    )
}
console.log(Category)

export default Category
