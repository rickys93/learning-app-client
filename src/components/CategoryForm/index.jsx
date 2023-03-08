import React from "react";

export default function CategoryForm(
  category,
  setCategory,
  answer1,
  setAnswer1,
  answer2,
  setAnswer2,
  answer3,
  setAnswer3,
  answer4,
  setAnswer4,
  correctAnswer,
  setCorrectAnswer,
  question,
  setQuestion
) {
  function handleCategory(e) {
    setCategory(e.target.value);
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
    <form action="">
      <div>
        <label htmlFor="category-list">
          Select Category:
          <select
            name="category-list"
            id="category-list"
            value={category}
            onChange={handleCategory}
          >
            Select a Category:
            <option value="Art">Art</option>
            <option value="History">History</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
            <option value="Music">Music</option>
            <option value="English">English</option>
            <option value="Math">Math</option>
          </select>
        </label>
        <br />
        <label htmlFor="question">
          Enter Question:
          <input
            type="text"
            value={question}
            placeholder="Enter Question"
            onChange={handleQuestion}
          />
        </label>
        <br />
        <label htmlFor="answer1">
          1st Answer:
          <input
            type="text"
            value={answer1}
            placeholder="First Answer"
            onChange={handleAnswer1}
          />
        </label>
        <br />
        <label htmlFor="answer2">
          2nd Answer:
          <input
            type="text"
            value={answer2}
            placeholder="Second Answer"
            onChange={handleAnswer2}
          />
        </label>
        <br />
        <label htmlFor="answer3">
          3rd Answer:
          <input
            type="text"
            value={answer3}
            placeholder="Third Answer"
            onChange={handleAnswer3}
          />
        </label>
        <br />
        <label htmlFor="answer4">
          4th Answer:
          <input
            type="text"
            value={answer4}
            placeholder="Fourth Answer"
            onChange={handleAnswer4}
          />
        </label>
        <br />
        <label htmlFor="correctAnswer">
          Correct Answer:
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
  );
}
