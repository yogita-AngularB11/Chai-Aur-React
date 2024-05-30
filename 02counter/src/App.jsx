import { useState } from 'react'


import './App.css'

function App() {

  let [count, setCount] = useState(10);

  
    function addCount() {
      if (count<20) {
      setCount(count + 1);
    }
    else{
      alert('No further Increment Allowed');
    }
  }
 

  function removeCount() {
    if (count>0) {
    setCount(count - 1)
    } else{
      alert('No further Decrement Allowed');
    }
  }
  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Current Count :{count}</h2>
      <br />
      <button onClick={addCount} style={{ border: '1px solid green' }}>Increase Count::{count}</button>
      <br />
      <br />
      <button onClick={removeCount} style={{ border: '1px solid red' }} >Decrease Count::{count}</button>

      <br/>
      <br/>
      <footer>Current Count :{count} </footer>

    </>
  )
}

export default App
