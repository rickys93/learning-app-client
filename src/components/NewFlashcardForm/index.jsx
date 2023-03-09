import React, { useState, useContext } from "react";
import './style.css'
import { UserContext, PopupContext } from "../../App";
import { Category } from "..";

export default function NewFlashcardForm({categoryData, handleDeleteButton}) {
  const { openPopup, setPopupContent } = useContext(PopupContext)
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  // function handleBackClick() {
  //   setPopupContent(<Category categoryData={categoryData} handleDeleteButton={handleDeleteButton}/>)
  // }

  function handleAnswer1(e) {
    setAnswer1(e.target.value);
  }
  function handleAnswer2(e) {
    setAnswer2(e.target.value);
  }
  function handleAnswer3(e) {
    setAnswer3(e.target.value);
  }
  function handleAnswer4(e) {
    setAnswer4(e.target.value);
  }
  function handleCorrectAnswer(e) {
    setCorrectAnswer(e.target.value);
  }
  function handleQuestion(e) {
    setQuestion(e.target.value);
  }

  return (
    <div className="add-question-form">
      {/* <button
        onClick={handleBackClick}
      >&#8592;</button> */}
      <h1>Add New Question</h1>
      <form action="">
        <div>
          <h3>Category: {categoryData.name}</h3>
          
          <label htmlFor="question">
            Question:<br/>
            <input
              type="text"
              value={question}
              placeholder="Enter Question"
              onChange={handleQuestion}
            />
          </label>
          <br />
          <label htmlFor="answer1">
            1st Answer:<br/>
            <input
              type="text"
              value={answer1}
              placeholder="First Answer"
              onChange={handleAnswer1}
            />
          </label>
          <br />
          <label htmlFor="answer2">
            2nd Answer:<br/>
            <input
              type="text"
              value={answer2}
              placeholder="Second Answer"
              onChange={handleAnswer2}
            />
          </label>
          <br />
          <label htmlFor="answer3">
            3rd Answer:<br/>
            
            <input
              type="text"
              value={answer3}
              placeholder="Third Answer"
              onChange={handleAnswer3}
            />
          </label>
          <br />
          <label htmlFor="answer4">
            4th Answer:<br/>
            <input
              type="text"
              value={answer4}
              placeholder="Fourth Answer"
              onChange={handleAnswer4}
            />
          </label>
          <br />
          <label htmlFor="correctAnswer">
            Correct Answer:<br/>
            <input
              type="text"
              value={correctAnswer}
              placeholder="Correct Answer"
              onChange={handleCorrectAnswer}
            />
          </label>
          <br />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
