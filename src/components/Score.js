import {useState} from 'react';

const Score = (props) => {
    const [score , setScore] = useState()
    

        return(
            <div>
                
                <h1>{score}</h1>
                <h4>{props.jeopardy ? props.jeopardy.value : "no value"}</h4>
                <button onClick={e => setScore(score + props.jeopardy.value || 0)}>Increase</button>
                <button onClick={e => setScore(score - props.jeopardy.value || 0 )}>Decrease</button>
                
            </div>
        )
    
}

export default Score;