import React from 'react'
import './Button.css'


const Button = ({onClick}) => {
  return (
   <button className='button__generator' onClick={onClick}>See another</button>
  )
}

export default Button