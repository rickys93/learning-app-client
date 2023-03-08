import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { QuizCard } from '../../components'
// import "./flashcard.css"

export default function QuizPage() {
    const { categoryId } = useParams()
    const [categories, setCategories]= useState([])
    const [amount, setAmount] = useState()
    const [cat , setCat] = useState(categoryId)
    const [next, setNext] = useState(0)
    const [selected, setSelected] = useState()
    const categoryEl = useRef()
    const amountEl = useRef()

    const [flashcards, setFlashcards] = useState([])
    const [length, setLength] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadCategories() {
            const response = await fetch(`http://localhost:3000/categories`);
            const data = await response.json();
            console.log('data', data)
            setCategories(data);
        };

        loadCategories();

    },[])


    async function loadCards(e) {
        e.preventDefault()
        const catId = categoryEl.current.value
        const amount = amountEl.current.value
        setAmount(amount)
        const response = await fetch(`http://localhost:3000/questions/categories/${cat}?limit=${amount}`);
        console.log('response', response)
        const data = await response.json();

        console.log('data', data)
        
        const shuffled = data.sort(() => 0.5 - Math.random())
        setLength(shuffled.length)
        setFlashcards(shuffled);
        setNext(0)
        setSelected()
        setLoading(false);
    };

    return (
        <>
            <form className='header'>
                <div className='form-group'>
                    <label htmlFor = 'category'>Category</label>
                    <select 
                        id = "category" 
                        ref={categoryEl}
                        value={categoryId}
                    >
                        {categories.map(category =>  
                            <option value={category.id} key = {category.id}>{category.name}</option>
                        )}
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor = 'amount'>Number of Questions</label>
                    <input type = "number" id = "amount" min = "1" step = "1" defaultValue = {10} ref={amountEl}></input>
                </div>
                <div className='form-group'>
                    <button 
                        className='generate_btn'
                        onClick={loadCards}
                    >Generate</button>
                </div>
            </form>
            <div><QuizCard flashcards = {flashcards} length = {length} amount={amount} loading = {loading} next={next} setNext={setNext} selected={selected} setSelected={setSelected}/></div>
        </>
    )
}
