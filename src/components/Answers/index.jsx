import React, {useState} from 'react'
import "./answers.css"

const Answers = ({answers, score, setScore, selected, setSelected, next, limit}) => {
    

const handleSelect = (o) =>{
    if(selected===o && selected.correct ===true){
        return "select"
    } else if(selected === o && selected.correct !== true){
        return "wrong"
    } else if(o.correct === true){
        return "select"
    }
}
const handleCheck = (o)=>{
    setSelected(o)
    if (o.correct === true)
    setScore(score +1)
}

 
function displayResult(){
    return(
        <div className='result'>
        <span className='score_title'>Your final score is<br/> {`${score}/${limit}`}</span>
    </div>
    )
    
   } 
   const displayAnswers = ()=>{
    return (
        <>
        <div className='answers'>
        <div className='options'>
            {answers.map(o => <button 
            onClick={()=>{handleCheck(o)}} 
            className={`singleOption ${selected && handleSelect(o)}`} 
            key={o} 
            disabled={selected}>{o.answer}</button>)}
        </div>
        </div>
        </>
      )
   }
  return next!==limit? displayAnswers(): displayResult()
}

export default Answers
