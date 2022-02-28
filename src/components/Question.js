import { Link } from "react-router-dom";

const Question = (props) => {
    console.log(props)
    function refreshPage() {
        window.location.reload(false)
    }
    return(
        <div>
            <h1>Question:</h1>
            {props.jeopardy ? props.jeopardy.question: "Loading" }
            <div>
                <button id= "nextBtn"> <Link to = "/score">Answer!</Link></button> 
                <button onClick={refreshPage}> Click for new question!</button>
            </div>
        </div>
    )
}

export default Question;