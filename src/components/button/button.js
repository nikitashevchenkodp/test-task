import React from 'react'
import './button.css'

const Button = ({children, onClick, disabled}) => {
  return (
    <button disabled = {disabled} className='button' onClick={onClick}>
        {children}
    </button>
  );
}

export default Button