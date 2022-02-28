import { Link } from 'react-router-dom'

const Home = (props) => {
    console.log(props.jeopardy)
    return (
        <div>
            <h1>Welcome to Jeopardy! </h1>
            <p>{props.jeopardy ? props.jeopardy.category.title: "loading"}</p>
            <button id= "startBtn"> <Link to = "/question">Start!</Link></button> 
            
        </div>
    )
}

export default Home;