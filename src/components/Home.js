import { Link } from 'react-router-dom'


const Home = (props) => {
    console.log(props.jeopardy)

    return (
        <div>
            <h1>Welcome to Jeopardy! </h1>
            <button id= "Btn"> <Link to = "/question">Start!</Link></button> 
            
        </div>
    )
}

export default Home;