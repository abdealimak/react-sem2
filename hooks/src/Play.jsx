//useRef
import { useState, useRef } from "react";

function App (){

  const [number, setNumber] = useState(0)
  //const [timerId, setTimerId] = useState(null)
  const timerId = useRef(null)

  function handleStart(){
    timerId.current = setInterval(() => {
      setNumber((prevnumber) => prevnumber +1)
    }, 1000)
    //setTimerId(Id)
    }

    function handleStop(){
      clearInterval(timerId.current)
      //setTimerId(null)
    }

    
  return(
    <>
    {/* onClick start a timer */}
    <p>{number}</p>
    <button onClick={handleStart}> Start </button>
    <button onClick={handleStop}> Stop </button>
    </>
  )
}

export default App;