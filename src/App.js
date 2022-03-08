import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';
import Question from './components/Question';
import Score from './components/Score';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Footer from './components/Footer'

// "https://jservice.io//api/category?id=<categoryID>"
// fetch Video games  1892 
//fetch Tv Cartoons 1348
//fetch American History 780

function App() {
  const [videoGames, setvideoGames] = useState(null)
  const [cartoons, setcartoons] = useState(null)
  const [history, sethistory] =useState(null)

  useEffect( () =>{
    async function fetchhistory(){
      const res = await axios.get("https://jservice.io//api/category?id=780")
      sethistory(res.data)
      console.log(history)
    }
    fetchhistory()
  }, [])

  useEffect( () =>{
    async function fetchGames(){
      const res =  await axios.get("https://jservice.io//api/category?id=1892")
      setvideoGames(res.data)
      
    }
    fetchGames()
  }, [])
  
  useEffect( () =>{
    async function fetchCartoons(){
      const res = await axios.get("https://jservice.io//api/category?id=1348")
      setcartoons(res.data)
      
    }
    fetchCartoons()
  }, [])




  return (
    <div className="App">
      <div>

        <Navbar />

      <Switch>

      <Route exact path="/">
        <Home  history = {history} cartoons = {cartoons} videoGames={videoGames} history = {history}/>
      </Route>

      <Route path = "/grid">
        <Grid history = {history} cartoons = {cartoons} videoGames={videoGames} history = {history}/>
      </Route>

      <Route path="/question"> 
        <Question  />
      </Route>

      <Route path="/score">
        <Score />
      </Route>

      </Switch>
      <Footer />

      
      
      </div>

    </div>
  );
}

export default App;
