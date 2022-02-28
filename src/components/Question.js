const Question = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Question:</h1>
            {props.jeopardy ? props.jeopardy.question: "no question" }
        </div>
    )
}

export default Question;