import React from 'react'
import './style.css'

function FormComplete({formName}) {
  return (
    <div className='form-complete'>
        <h2>{formName} added successfully!</h2>
    </div>
  )
}

export default FormComplete