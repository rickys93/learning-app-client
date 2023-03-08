import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { NewCategoryForm } from '../../components'
import { UserContext, PopupContext } from "../../App";
import { NewFlashcard } from "../../pages";

import "./style.css";

export default function CategoryList({categories, setMyCategories, defaultCategories}) {
  const {user, setUser} = useContext(UserContext)
  const { setPopupContent, closePopup, openPopup } = useContext(PopupContext)

  const openAddNewCategory = () => {
    openPopup(<NewCategoryForm myCategories={categories} setMyCategories={setMyCategories}/>)
  }

  return (
    <div className="categories-list">
      {categories.map((category) => 
        
        <div
          key={category.id}
          // to={`/quiz/${category.id}`}
          className="category-box"
        >
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <div className="choice-box">
          <Link to={`/flashcards/${category.id}`}>Learn</Link>
          <Link to={`/quiz/${category.id}`}>Quiz</Link>
          {!defaultCategories ? (
            <button>Delete</button>
          ): null}
          </div>
          
        </div>)
        }
      
      {!defaultCategories ? (
        <div className="category-box">
          <button
            className="add-category-button"
            onClick={openAddNewCategory}
          >
            +
          </button>
        </div>
      ) : null}

      
    </div>
  
)
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
