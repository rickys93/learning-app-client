import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { QuizCard } from '../../components'
// import "./flashcard.css"

export default function QuizPage() {
    const navigate = useNavigate()
    const { categoryId } = useParams()
    const [name, setName]= useState()
    const [amount, setAmount] = useState()
    const [cat , setCat] = useState(categoryId)
    const [next, setNext] = useState(0)
    const [selected, setSelected] = useState()
    
    const amountEl = useRef()

    const [flashcards, setFlashcards] = useState([])
    const [length, setLength] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadCategories() {
            const response = await fetch(`http://localhost:3000/categories`);
            const data = await response.json();
           
            setName(data.filter(c => c.id==cat)[0].name)
           
        };

        loadCategories();

    },[])


    async function loadCards(e) {
        e.preventDefault()
      
        const amount = amountEl.current.value
        setAmount(amount)
        const response = await fetch(`http://localhost:3000/questions/categories/${cat}?limit=${amount}`);
        console.log('response', response)
        const data = await response.json();

        console.log('data', data)
        
        const shuffled = data.sort(() => 0.5 - Math.random())
        setLength(shuffled.length)
        setFlashcards(shuffled);
        console.log(flashcards)
        setNext(0)
        setSelected()
        setLoading(false);
    };

    return (
        <>
            <div className='form-group'>
            <h2 className='game-title'>
                <button
                    className='go-back-button'
                    onClick={() => navigate(-1)}
                >&#8592;</button>
                {name} Quiz
            </h2>
            </div>
            <form className='header'>
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
            <div className='quiz'><QuizCard flashcards = {flashcards} length = {length} amount={amount} loading = {loading} next={next} setNext={setNext} selected={selected} setSelected={setSelected}/></div>
        </>
    )
}
