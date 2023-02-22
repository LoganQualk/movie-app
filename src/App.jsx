import { useState, useRef } from 'react'
import { getMovie } from './components/api'
import './App.css'

function App() {
  const title = useRef(null); //this isn't the starting value of the input - it is the starting value of the reference - use at a specific moment -- useState is when things are constantly changing
  const [updated, setUpdated] = useState(null);

  const handleClick = async () => {
    let result = await getMovie(title.current.value);
    setUpdated(result);
    console.log(result);
  }

  return (
    <div>
      <h1>Hey Simon</h1>
      <input ref={title} type="text" id="searchInput"/>
      <button onClick={handleClick}>Search</button>
    </div>
    
  )
}

export default App
