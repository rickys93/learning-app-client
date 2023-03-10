import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { NewCategoryForm, Category } from '../../components'
import { UserContext, PopupContext } from "../../App";
import { NewFlashcard } from "../../pages";

import "./style.css";

export default function CategoryList({categories, setMyCategories, defaultCategories}) {
   
    const { openPopup } = useContext(PopupContext)

    const openAddNewCategory = () => {
        openPopup(<NewCategoryForm myCategories={categories} setMyCategories={setMyCategories}/>)
    }

    const handleDeleteButton = async (id) => {
        const options = {
        method:"DELETE"
        }
        const response = await fetch(`http://localhost:3000/categories/${id}`, options)
        console.log('response', response)
        if (response.status === 204) {
        const updatedMyCategories = categories.filter(category => category.id !== id)
        setMyCategories(updatedMyCategories)
        }

    }
        
    const clickCategory = (id) => {
        // add get full event details here
        const categoryData = categories.filter(cat => cat.id === id)[0]
        openPopup(<Category categoryData={categoryData} handleDeleteButton={handleDeleteButton}/>)
        }

    return (
        <div className="categories-list">
        {categories.map((category) => (
            <div data-testid ={'0'}
            key={category.id}
            onClick={() => clickCategory(category.id)}
            className="category-box"
            >
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            </div>
        ))}
        {!defaultCategories ? (
            <div 
                className="category-box"
                onClick={openAddNewCategory}
            >
            <button
                className="add-category-button"
            ><div className="plus">+</div>
            </button>
            </div>
        ) : null}
        </div>
    );
}

// import React from "react";
// import { useHistory } from 'react-router-dom';

// export default function CategoryList(props) {
//   const { categories } = props;
//   const history = useHistory();

//   const handleQuizClick = (id) => {
//     history.push(`/quiz/${id}`);
//   };

//   const handleFlashcardClick = (id) => {
//     history.push(`/flashcard/${id}`);
//   };

//   return (
//     <div>
//       {categories.map((category) => (
//         <div
//           key={category.id}
//           style={{
//             border: "1px solid gray",
//             padding: "10px",
//             margin: "10px",
//           }}
//         >
//           <h3>{category.name}</h3>
//           <p>{category.description}</p>
//           <div className="category-buttons">
//             <button onClick={() => handleQuizClick(category.id)}>Quiz</button>
//             <button onClick={() => handleFlashcardClick(category.id)}>Flashcard</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
