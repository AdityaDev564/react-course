
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    if(counter === 20)
      setCounter(20);
    else{
      // setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);

    }
  }

  const decreaseCounter = () => {
    if(counter === 0)
      setCounter(0);
    else{
      setCounter(counter - 1);
    }
    
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseCounter}>Increase Value</button>
      <button onClick={decreaseCounter}>Decrease Value</button>
    </>
  )
}

export default App
