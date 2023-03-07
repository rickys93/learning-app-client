import React, {useEffect, useState} from 'react'

export default function Flashcard({id, limit}) {
    const [flashcards, setFlashcards] = useState([])
const [ flip, setFlip] = useState(false)
const [next, setNext] = useState(0)
const  [length, setLength] = useState()
const [loading, setLoading] = useState(true);


const counter = next+1

useEffect(() => {

  
  async function loadCards() {

      const response = await fetch(`http://localhost:3000/questions/categories/${id}`);
      const data = await response.json();
     
     const shuffled = data.sort(()=> 0.5 - Math.random())
     let selected = shuffled.slice(0, limit)
      setLength(selected.length)
      setFlashcards(selected);

      setLoading(false);
  };

  loadCards();

}, [id])

  const handleNext= ()=>
{setNext(prev => prev +1)

}
const handlePrev = ()=>{
  setNext(prev => prev-1)
}
 
   function displayCard(){
 
    return (
      <>
      <div
      className = {`card ${flip ? 'flip' : ''}`}
       onClick={( )=> setFlip(!flip)}>
        
        <div className='front'>
        <div className='counter'>{`${counter}/${length}`}</div>
        {flashcards[next].question}
        </div>
        <div className='back'>
          { flashcards[next].answers.filter(a => a.correct == true)[0].answer }</div>
      </div>
      <div className='button_container'>
      <button className='prev_btn' disabled= {next===0 ?  true: false } onClick={handlePrev}>Prev</button>
  <button className='next_btn'   onClick={handleNext}>Next</button>
  </div>
  
      </>
    )
   }   
  return loading ? <h2><em>loading...</em></h2> : displayCard();
}
// const sample= [
//   {
//     "id": 5,
//     "category_id": 3,
//     "question": "What is the capital of France?",
//     "answers": [
//       {
//         "id": 11,
//         "question_id": 5,
//         "answer": "Paris",
//         "correct": true
//       },
//       {
//         "id": 12,
//         "question_id": 5,
//         "answer": "London",
//         "correct": false
//       }
//     ] }
//   ]
