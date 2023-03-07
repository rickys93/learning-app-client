import React, {useEffect, useState} from 'react'
import Answers from '../Answers'
import { useNavigate } from 'react-router-dom'

export default function QuizzCard({id, limit}) {
    const [flashcards, setFlashcards] = useState([])
const [ flip, setFlip] = useState(false)
const [next, setNext] = useState(0)
const  [length, setLength] = useState()
const [loading, setLoading] = useState(true);
const [score, setScore]= useState(0)
const [selected, setSelected] = useState()
const counter = next+1
let navigate= useNavigate()

useEffect(() => {

  
  async function loadCards() {

      const response = await fetch(`http://localhost:3000/questions/categories/${id}`);
      const data = await response.json();
     
     const shuffled = data.sort(()=> 0.5 - Math.random())
     let selected = shuffled.slice(0, limit)
      setLength(selected.length)
      setFlashcards(selected);
      console.log(flashcards)
      setNext(0)
      setSelected()
      setLoading(false);
  };

  loadCards();

}, [id])

  const handleNext= ()=>
{setNext(prev => prev +1)
    setSelected()

}
const handleQuit = ()=>{
  let path = "/categories"
  navigate(path)
}
 
   function displayCard(){

    if (next!==length){return (
        <>
        <div
        className = 'card'
         >
          
          <div className='front'>
          <div className='counter'>{`${counter}/${length}`}</div>
          {flashcards[next].question}
          </div>
          
        </div>
        <div> <Answers answers={flashcards[next].answers} score={score} setScore={setScore} selected ={selected} setSelected={setSelected} next={next} limit={length} /></div>
        <div className='button_container'>
        <button className='prev_btn' onClick={handleQuit}>Quit</button>
    <button className='next_btn' disabled= {next===limit ?  true: false }  onClick={handleNext}>Next</button>
    </div>
    
        </>
      )
     }  else {
        
    return (
        <>
       
        <div> <Answers  score={score} setScore={setScore} selected ={selected} setSelected={setSelected} next={next} limit={length} /></div>
        </>
      )
     } 
    }
    

  return loading ? <h2><em>loading...</em></h2> :  displayCard() 
}
