import { Link } from "react-router-dom";


const Question = (props) => {
    

    return(
        <div>
            <h1>Category:</h1>
            <p>{props.jeopardy ? props.jeopardy.category.title: "loading"}</p>
            <h2>Question:</h2>
            {props.jeopardy ? props.jeopardy.question: "Loading" }
            <div>
                <button id= "Btn"> <Link to = "/score">Answer!</Link></button> 
                    <div>
                        <button id= "Btn"onClick={props.questioncall}> Click for new question!</button>
                    </div>
            </div>
        </div>
    )
}

export default Question;