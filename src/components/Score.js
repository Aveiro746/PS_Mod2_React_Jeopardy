import {useState} from 'react';

const Score = (props) => {
    const [score , setScore] = useState(0)
    const currentValue = props.jeopardy.value

        return(
            <div>
                <h1>{score}</h1>
                <button onClick={e => setScore(score + currentValue)}>Increase</button>
                <button onClick={e => setScore(score - currentValue )}>Decrease</button>
                
            </div>
        )
    
}

export default Score;