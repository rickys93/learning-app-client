import React, { useState, useContext } from "react";
import './style.css'
import { UserContext, PopupContext } from "../../App";
import { Category, FormComplete } from "..";

export default function NewFlashcardForm({categoryData, handleDeleteButton}) {
  const { openPopup, setPopupContent } = useContext(PopupContext)
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()

    const questionData = {
      category_id:categoryData.id,
      question
    }
    const answerData = [
      {answer:answer1, correct:false},
      {answer:answer2, correct:false},
      {answer:answer3, correct:false},
      {answer:correctAnswer, correct:true},
    ]
    const data = JSON.stringify({
      question:questionData,
      answers:answerData
    })
    const options = {
      method:"POST",
      body:data,
      headers: {
          'Content-Type': 'application/json'
      },
    } 
    const response = await fetch("https://learning-app-server.onrender.com/questions", options)
    if (response.status === 201) {
        const data = await response.json()
        setPopupContent(<FormComplete message={"Question added succesfully!"} handleBackClick={handleBackClick}/>)
        setMyCategories(prev => [...prev, data])
    }

  }  

  function handleBackClick() {
    setPopupContent(<Category categoryData={categoryData} handleDeleteButton={handleDeleteButton}/>)
  }

  function handleAnswer1(e) {
    setAnswer1(e.target.value);
  }
  function handleAnswer2(e) {
    setAnswer2(e.target.value);
  }
  function handleAnswer3(e) {
    setAnswer3(e.target.value);
  }
  function handleCorrectAnswer(e) {
    setCorrectAnswer(e.target.value);
  }
  function handleQuestion(e) {
    setQuestion(e.target.value);
  }

  return (
    <div className="add-question-form">
      <button
        onClick={handleBackClick}
      >&#8592;</button>
      <h1>Add New Question</h1>
      <form 
        onSubmit={handleSubmit}
      
      >
        <div>
          <h3>Category: {categoryData.name}</h3>
          
          <label htmlFor="question">
            Question:<br/>
            <input
              type="text"
              value={question}
              placeholder="Enter Question"
              onChange={handleQuestion}
              required
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
              required
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
              required
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
              required
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
              required
            />
          </label>
          <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
