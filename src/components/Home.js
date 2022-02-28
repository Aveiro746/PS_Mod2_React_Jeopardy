const Home = (props) => {
    return (
        <div>
            <h1>Welcome to Jeopardy! </h1>
            <p>{props.jeopardy ? props.jeopardy.category.title: "nothing to show yet"}</p>
        </div>
    )
}

export default Home;