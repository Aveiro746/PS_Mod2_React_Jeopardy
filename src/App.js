import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import Question from './components/Question';
import Score from './components/Score';
import Home from './components/Home';
import Navbar from './components/Navbar';

// make a func thatll make an api call 
//api will return a question from api
//when you receive question set jeopardy to api response
function App() {
  const [jeopardy, setjeopardy] = useState (null)

  useEffect ( () => {
      async function fetchData(){
    const res = await axios.get('https://jservice.io/api/random')
    const jeopardyObject = await res
    setjeopardy(jeopardyObject.data[0])
  

      }
      fetchData()
  }, [])
 
async function fetchApi(){
  const res = await axios.get('https://jservice.io/api/random')
  setjeopardy(res.data[0])
}

  return (
    <div className="App">
      <div>

        <Navbar />

      <Switch>
      <Route exact path="/">
        <Home jeopardy={jeopardy} />
      </Route>

      <Route path="/question"> 
        <Question jeopardy = {jeopardy} questioncall = {fetchApi}/>
      </Route>

      <Route path="/score">
        <Score jeopardy={jeopardy}/>
      </Route>
      </Switch>

      
      
      </div>

    </div>
  );
}

export default App;
