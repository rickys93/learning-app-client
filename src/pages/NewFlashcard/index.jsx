import React, { useState } from "react";
import { NewFlashcardForm } from "../../components";

export default function NewFlashcard() {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  return (
    <main>
      <h1>Add New Question</h1>
      <NewFlashcardForm
        category={category}
        setCategory={setCategory}
        question={question}
        setQuestion={setQuestion}
        answer1={answer1}
        setAnswer1={setAnswer1}
        answer2={answer2}
        setAnswer2={setAnswer2}
        answer3={answer3}
        setAnswer3={setAnswer3}
        answer4={answer4}
        setAnswer4={setAnswer4}
        correctAnswer={correctAnswer}
        setCorrectAnswer={setCorrectAnswer}
      />
    </main>
  );
}
