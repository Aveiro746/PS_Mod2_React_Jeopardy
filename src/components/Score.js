import React from 'react';
import {useState} from 'react';

const Score = (props) => {
    // const [score , setScore] = useState(0);
    
   
    return(
        <div>
            
            <h1>{props.jeopardy ? props.jeopardy.answer: "no answer"}</h1>
            <h4>Value: {props.jeopardy ? props.jeopardy.value : "no value"}</h4>
            {/* <button onClick={e => setScore(score + props.jeopardy.value )}>Increase</button>
            <button onClick={e => setScore(score - props.jeopardy.value )}>Decrease</button> */}
            
        </div>
        
    )
   }


export default Score;