import { useState, useRef, useEffect } from 'react'
import { getMovie } from './components/api'
import './App.css'

function App() {
  const title = useRef(null); //this isn't the starting value of the input - it is the starting value of the reference - use at a specific moment -- useState is when things are constantly changing
  const [updated, setUpdated] = useState(null);
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (guesses >= 3) {
      console.log(`Your score was: ${score} after ${guesses} guesses`);
      setGuesses(0);
      setScore(0);
      setWin(false);
    }
  }, [guesses])

  // const searchInput = document.getElementById("searchInput");
  // searchInput.addEventListener("keydown", function(e) {
  //   if (e.key === "Enter") {
  //     handleClick;
  //   }
  // })

  const handleClick = async () => {
    let result = await getMovie(title.current.value);
    setUpdated(result);
    // console.log(score);
    setScore(score + parseInt(result.Metascore));
    // console.log(result.Metascore);
    // console.log(score);
    setGuesses(guesses+1);
    if (score > 224 && score < 251) {
        setWin(true);
        console.log(win);
    } else {
        console.log(win);
    }
  }

  return (
    <div>
      <h1>Hey Simon</h1>
      <input ref={title} type="text" id="searchInput"/>
      <button onClick={handleClick}>Search</button>
      <br />
      <div>SCORE: {score}</div>
      <br />
      <div>GUESSES: {guesses}</div>
      <br />
      <div>WIN: {win}</div>
    </div>
    
  )
}

export default App
