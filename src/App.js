import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import Question from './components/Question';
import Category from './components/Category';
import Points from './components/Points';
import Score from './components/Score';



function App() {
  const [jeopardy, setjeopardy] = useState ([])

  useEffect ( async () => {
    const res = await axios.get('http://jservice.io/api/random')
    const jeopardyObject = await res
    setjeopardy(jeopardyObject.data[0])
    console.log(jeopardy)
    
  }, [])
 

  return (
    <div className="App">
      <h1>Jeopardy!</h1>
      <div>
      <Question jeopardy = {jeopardy} />
      {/* <Category jeopardy = {jeopardy} /> */}
      <Points jeopardy = {jeopardy} />
      <Score jeopardy = {jeopardy} />
      
      </div>

    </div>
  );
}

export default App;
