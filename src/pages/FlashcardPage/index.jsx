import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Flashcard } from '../../components'
import "./flashcard.css"

export default function FlashcardPage() {
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
    <form className='header' >
      <div className='form-group'>
      <h2>{name}</h2>
      </div>
      <div className='form-group'>
        <label htmlFor = 'amount'>Number of Questions</label>
        <input type = "number" id = "amount" min = "1" step = "1" defaultValue = {10} ref={amountEl}></input>
      </div>
      <div className='form-group'>
        <button className='generate_btn' onClick={handleSubmit}>Generate</button>
      </div>

    </form>
    
  <div ><Flashcard id = {cat} limit = {amount}/></div>

    </>
  );
}
