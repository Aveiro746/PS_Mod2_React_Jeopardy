import { Link } from 'react-router-dom'


const Home = (props) => {
    

    return (
        <div>
            <h1>Welcome to Jeopardy! </h1>
            <button id= "Btn"> <Link to = "/grid">Start!</Link></button> 
            
        </div>
    )
}

export default Home;

//dynamically change value to whatever question is @ the div (?) 

// TODO: make on click for each div to send to answer component 
    // figure out how to use answer component to submit JUST one element of data for answer for SPECIFIC tile
    // 

// TODO:consider toggle to change class names and show question using hover flip css animation 
    //make onclick for div thatll lead to answer component {?} for that speicifc question. 


//next btn to take you back to grid component with clicked div unclickable(?)