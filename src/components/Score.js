import React from 'react';
import { Link } from 'react-router-dom';

const Score = (props) => {
   
    
   
    return(
        <div>
            
            <h1>{props.jeopardy ? props.jeopardy.answer: "no answer"}</h1>

            <h4>Value: {props.jeopardy ? props.jeopardy.value : "no value"}</h4>
           
            <button ><Link to ="/question">Play again?</Link></button>
           
            
        </div>
        
    )
   }


export default Score;