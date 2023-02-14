import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleClick = () => {
    setUpdated(message);
    console.log(message);
  }

  return (
    <div>
      <h1>Hey Simon</h1>
      <input type="text" id="searchInput" onChange={handleChange} defaultValue={message}/>
      <button onClick={handleClick}>Search</button>
    </div>
    
  )
}

export default App
