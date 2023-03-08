import React from "react";
import { Link } from "react-router-dom";

import'./style.css'

export default function CategoryList(props) {
  const { categories } = props;
  return (
    <div className="categories-list">
      {categories.map((category) => (
        <div
          key={category.id}
          to={`/Quiz/${category.id}`}
          className="category-box"
        >
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <div className="choice-box">
          <Link to={`/flashcards/${category.id}`}>Learn</Link>
          <Link to={`/quiz/${category.id}`}>Quiz</Link>
          </div>
        </div>
      ))}
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
