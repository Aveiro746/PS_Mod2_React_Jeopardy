import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Score = (props) => {
    // const [score , setScore] = useState(0);
    function refreshPage() {
        window.location.reload(false)
    }
   
    return(
        <div>
            
            <h1>{props.jeopardy ? props.jeopardy.answer: "no answer"}</h1>
            <h4>Value: {props.jeopardy ? props.jeopardy.value : "no value"}</h4>
            {/* <button onClick={e => setScore(score + props.jeopardy.value )}>Increase</button>
            <button onClick={e => setScore(score - props.jeopardy.value )}>Decrease</button> */}
            <button ><Link to ="/question">Play again?</Link></button>
            {/* <button id= "nextBtn"> <Link to = "/score">Answer!</Link></button>  */}
            
        </div>
        
    )
   }


export default Score;