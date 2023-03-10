import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Flashcard } from '../../components'
import "./flashcard.css"

export default function FlashcardPage() {
  const navigate = useNavigate()
  const [name, setName]= useState()
  const { categoryId } = useParams()
  const [amount, setAmount] = useState()
  const [cat , setCat] = useState(categoryId)
  const categoryEl = useRef()
  const amountEl = useRef()
  
 
  useEffect(()=>{

  
    async function loadCategories() {

      const response = await fetch(`http://localhost:3000/categories`);
      const data = await response.json();
    console.log(data)
      
    setName(data.filter(c => c.id==cat)[0].name)

      
  };

loadCategories();

},[])

function handleSubmit(e){
  e.preventDefault()
  console.log("in")
setAmount(amountEl.current.value)

console.log(cat)


}

  return (
    <> 
      <div className='form-group'>
        <h2 className='game-title'>
          <button
            className='go-back-button'
            onClick={() => navigate(-1)}
          >&#8592;</button>
          {name} Flashcards
        </h2>
      </div>
      <form className='header' >
     
      <div className='form-group'>
        <label htmlFor = 'amount'>Number of Questions</label>
        <input type = "number" id = "amount" min = "1" step = "1" defaultValue = {10} ref={amountEl}></input>
      </div>
      <div className='form-group'>
        <button className='generate_btn' onClick={handleSubmit}>Generate</button>
      </div>

    </form>
    
  <div className='card-container'><Flashcard id = {cat} limit = {amount}  /></div>

    </>
  );
}
