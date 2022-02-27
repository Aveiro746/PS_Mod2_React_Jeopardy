const Question = (props) => {
    console.log(props.jeopardy)
    return(
        <div>
            <h1>Question:</h1>
            {props.jeopardy.question}
        </div>
    )
}

export default Question;