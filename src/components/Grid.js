import { Link } from "react-router-dom"

const Grid = (props) =>{
  

    return(
        
        <div>
    <div className="board">
        <div className="row categories">
            <div className="tile">Video Games</div>
            <div className="tile">American History</div>
            <div className="tile">Cartoons</div>
            
        </div>
        <div className="row clues">
            <div className="tile" >
                <div className="question-value" >{props.videoGames ? props.videoGames.clues[0].value:"no value"}</div>
                {/* <div className="question-answer">{props.videoGames ? props.videoGames.clues[0].answer:"no answer"}</div> */}
            </div>
            <div className="tile">
                <div className="question-value">{props.history ? props.history.clues[0].value:"no value"}</div>
            </div>
            <div className="tile">
                <div className="question-value">{props.cartoons ? props.cartoons.clues[0].value:"no value"}</div>
            </div>
            
        </div>
        <div className="row clues">
            <div className="tile">
                <div className="question-value">{props.videoGames ? props.videoGames.clues[1].value:"no value"}</div>
            </div>
            <div className="tile">
                <div className="question-value">{props.history ? props.history.clues[1].value:"no value"}</div>
            </div>
            <div className="tile">
                <div className="question-value">{props.cartoons ? props.cartoons.clues[1].value:"no value"}</div>
            </div>
           
        </div>
        <div className="row clues">
            <div className="tile">
                <div className="question-value">{props.videoGames ? props.videoGames.clues[2].value:"no value"}</div>
            </div>
            <div className="tile">
                <div className="question-value">{props.history ? props.history.clues[2].value:"no value"}</div>
            </div>
            <div className="tile">
                <div className="question-value">{props.cartoons ? props.cartoons.clues[2].value:"no value"}</div>
            </div>
            
        </div>
    
        </div>
    </div>
    )
}

export default Grid;