import React, { useEffect, useRef, useState } from 'react'
import { Flashcard } from '../../components'
import "./flashcard.css"

export default function FlashcardPage() {
  const [categories, setCategories]= useState([])
  const [amount, setAmount] = useState()
  const [cat , setCat] = useState(1)
const categoryEl = useRef()
const amountEl = useRef()
useEffect(()=>{

 
  async function loadCategories() {

    const response = await fetch(`http://localhost:3000/categories`);
    const data = await response.json();
   console.log(data)
    
    setCategories(data);

    
};

loadCategories();

},[])

function handleSubmit(e){
  e.preventDefault()
setAmount(amountEl.current.value)
setCat(categoryEl.current.value)
console.log(cat)

}

  return (
    <>
    <form className='header' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor = 'category'>Category</label>
        <select id = "category" ref={categoryEl}>
        {categories.map(category =>{
          return <option value={category.id} key = {category.id}>{category.name}</option>
        })}
        </select>
      </div>
      <div className='form-group'>
        <label htmlFor = 'amount'>Number of Questions</label>
        <input type = "number" id = "amount" min = "1" step = "1" defaultValue = {10} ref={amountEl}></input>
      </div>
      <div className='form-group'>
        <button className='generate_btn'>Generate</button>
      </div>

    </form>
    <div ><Flashcard id = {cat} limit = {amount}/></div>
    </>
  )
}
