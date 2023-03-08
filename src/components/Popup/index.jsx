import React from 'react'

function Popup({isOpen, content}) {
  return isOpen ? (
    <div className='popup'>
        <div className='popup-content'>{content}</div>
    </div>
  ) : null
}

export default Popup