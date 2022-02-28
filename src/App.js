import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import Question from './components/Question';
import Score from './components/Score';
import Home from './components/Home';
import Navbar from './components/Navbar';



function App() {
  const [jeopardy, setjeopardy] = useState (null)

  useEffect ( async () => {
    const res = await axios.get('http://jservice.io/api/random')
    const jeopardyObject = await res
    setjeopardy(jeopardyObject.data[0])
    console.log(jeopardy)
    
  }, [])
 

  return (
    <div className="App">
      <div>

        <Navbar />

      <Switch>
      <Route exact path="/">
        <Home jeopardy={jeopardy}/>
      </Route>

      <Route path="/question"> 
        <Question jeopardy = {jeopardy}/>
      </Route>

      <Route path="/score" component={Score} />
      </Switch>

      
      
      </div>

    </div>
  );
}

export default App;
