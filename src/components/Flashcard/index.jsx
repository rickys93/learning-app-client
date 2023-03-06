import React, {useState} from 'react'

export default function Flashcard() {
    const [flashcard, setFlashcard] = useState(samlple)

    const sample= [
        {
          "id": 5,
          "category_id": 3,
          "question": "What is the capital of France?",
          "answers": [
            {
              "id": 11,
              "question_id": 5,
              "answer": "Paris",
              "correct": true
            },
            {
              "id": 12,
              "question_id": 5,
              "answer": "London",
              "correct": false
            }
          ]
        }
      ]
  return (
    <div>{flashcard.question}</div>
  )
}
