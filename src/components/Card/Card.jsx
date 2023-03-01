import React from 'react'
import './Card.css'



function Card({ data }) {
    return (
      <div className='card'>
        <h2>{data.phrase}</h2>
        
      </div>
    );
  }
  
  export default Card;
  