import React, {useEffect, useState} from 'react'
import Answers from '../Answers'
import { useNavigate } from 'react-router-dom'

export default function QuizCard({flashcards, length, loading, amount, next, setNext, selected, setSelected}) {
    const [flip, setFlip] = useState(false)
    
    const [score, setScore]= useState(0)
    
    const counter = next+1
    let navigate= useNavigate()

    const handleNext = () => {
        setNext(prev => prev +1)
        setSelected()
    }
    const handleQuit = () => {
        let path = "/categories"
        navigate(path)
    }
    
    function displayCard(){

        if (next!==length){return (
            <><div>
                <div
                    className = 'card'
                >
                    
                <div className='front'>
                    <div className='counter'>{`${counter}/${length}`}</div>
                        {flashcards[next].question}
                    </div>
                    
                </div>
                <div> <Answers answers={flashcards[next].answers} score={score} setScore={setScore} selected ={selected} setSelected={setSelected} next={next} limit={length} />
                </div>
                <div className='button_container'>
                    <button className='prev_btn' onClick={handleQuit}>Quit</button>
                    <button className='next_btn' disabled= {next===amount ?  true: false }  onClick={handleNext}>Next</button>
                </div>
                </div>
            </>
        )
        } else {
            
            return (
                <>
                    <div> <Answers  score={score} setScore={setScore} selected ={selected} setSelected={setSelected} next={next} limit={length} /></div>
                </>
                )
        } 
        }
    

  return loading ? <h2><em>Please choose number of questions.</em></h2> :  displayCard() 
}
