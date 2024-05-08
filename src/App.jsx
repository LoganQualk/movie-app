import { useState, useRef, useEffect } from 'react'
import { getMovie } from './components/api'
import './App.css'

function App() {
  const title = useRef(null); //this isn't the starting value of the input - it is the starting value of the reference - use at a specific moment -- useState is when things are constantly changing
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [win, setWin] = useState(0);
  const [images, setImage] = useState([]);

  useEffect(() => {
    if (guesses >= 3) {
      if (score > 224 && score < 251) {
        setWin(1);
      } else {
        const imagesContainer = document.getElementById("imagesContainer");
        setWin(-1);
        // console.log(images);
      }
      // console.log(win);
      // setGuesses(0);
      // setScore(0);
      // setWin(false); // probably want to move all of this to a button like "start new game"
    }
    // console.log(guesses);
    // console.log(images);
  }, [guesses])
  
  // useEffect(() => {
  //   console.log(win);
  // }, [win])

  const handleSearch = async () => {
    if (guesses >= 3) {
      searchText.value = 'Please restart the game';
    } else {
      let result = await getMovie(title.current.value);
      const searchText = document.getElementById("searchInput");
      if (title.current.value === '' || title.current.value === ' ' || title.current.value === null) {
        alert("Please enter a value!");
      } else {
        setScore(score + parseInt(result.Metascore));
        setGuesses(guesses + 1); //setScore and setGuesses should be separated --- could make another useEffect that looks at score that calls setGuesses
        setImage(images => [...images, `${result.Poster}`]);
      }
      searchText.value = '';
    }
    // console.log(images);
    // console.log(guesses);
  }

  const handleRestart = async () => {
    const imagesContainer = document.getElementById("imagesContainer");
    // imagesContainer.remove();
    setGuesses(0);
    setImage([]);
    setWin(0);
    setScore(0);
    let searchText = document.getElementById("searchInput");
    searchText.value = '';
  }

  return (
    <div className='mainContainer flex flex-column justify-center'>
      <div className='flex flex-column justify-center searchContainer text-center'>
        <h1 id='mainHeader' className='whiteText'>Welcome to my movie app. Search for a movie, the goal is to get between 225 and 250 Metacritic score. You only get 3 guesses!</h1>
        <input ref={title} type="text" id="searchInput" />
        <button id="searchButton" onClick={handleSearch}>Search</button>
        <br />
        <div id='scoreHeader' className='whiteText'>SCORE: {score}</div>
        <br />
        <div id='guessesHeader' className='whiteText'>GUESSES: {guesses}</div>
        <br />
        {/* <div id='winHeader' className='whiteText'>WIN: {win.toString().toLocaleUpperCase()}</div> */}
        {win === 1 && <div id='winnerText' className='whiteText'>YOU WIN!!!</div>}
        {win === -1 && <div id='loserText' className='whiteText'>You Lose</div>}
        <button id="restartButton" onClick={handleRestart}>Restart Game</button>
      </div>
      <div id="imagesContainer">
        {images.map((image, index) => (
          <img className='moviePosters' key={index} src={image} alt="" /> //if you use curly braces then you have to use return because it will return with an object in it -- if you use parens then there is no object and you are just returning it by itself
        ))} 
      </div>
    </div>

  )
}

export default App
