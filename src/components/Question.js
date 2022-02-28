import { Link } from "react-router-dom";

const Question = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Question:</h1>
            {props.jeopardy ? props.jeopardy.question: "Loading" }
            <div>
                <button id= "nextBtn"> <Link to = "/score">Answer!</Link></button> 
            </div>
        </div>
    )
}

export default Question;