import React, { useState, useContext } from 'react'

import { UserContext, PopupContext } from '../../App';
import { FormComplete } from '..'
import './style.css'

function NewCategoryForm({myCategories, setMyCategories}) {
    const { user } = useContext(UserContext)
    const { setPopupContent } = useContext(PopupContext)
    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("")

    async function handleSubmit(e) {
        const formData = JSON.stringify(
            {
                name:categoryName,
                description:description,
                user_id:user.id
            }
        ) 
        console.log('formData', formData)
        e.preventDefault()
        const options = {
            method:"POST",
            body:formData,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const response = await fetch("http://localhost:3000/categories", options)
        console.log('response', response)
        if (response.status === 201) {
            const data = await response.json()
            console.log('data', data)
            setPopupContent(<FormComplete formName={"Category"}/>)
            console.log('categories', [...myCategories, data])
            setMyCategories(prev => [...prev, data])
        }

    }
    function handleCategoryName(e) {
        setCategoryName(e.target.value);
    }
    function handleDescription(e) {
        setDescription(e.target.value);
    }
    return (
        <div className='category-form'>
            <h2>Add New Category</h2>
            <form 
                onSubmit={handleSubmit}
            >
                <label htmlFor="category-name">
                    Enter Category Name:
                    <input
                        type="text"
                        id="category-name"
                        value={categoryName}
                        placeholder="Enter Category"
                        onChange={handleCategoryName}
                        required
                    />
                </label>
                <label htmlFor="desciption">Description:
                    <textarea 
                        id="desciption" 
                        name="desciption" 
                        rows="4" 
                        cols="40"
                        value={description}
                        onChange={handleDescription}
                        required
                    />
                </label>
                <button 
                    type="submit"
                    className='button-colours'
                >Add</button>
            </form>
        </div>
    )
}

export default NewCategoryForm