import React from 'react'
import './style.css'

function FormComplete({message, handleBackClick}) {
  return (
    
    <div className='form-complete'>

        {handleBackClick ?
            <button
              onClick={handleBackClick}
            >&#8592;</button>
            : null
        }

        <h2>{message}</h2>
    </div>
  )
}

export default FormComplete