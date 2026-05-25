import { useState, useMemo} from "react";
import Callback from "./Callback";

function App (){
  const [theme, setTheme] = useState(false)
  const [number, setNumber] = useState(0)

  const colors = {
    background : theme? "black" : "white",
    color : theme? "white" : "black"
  }

  const heavyResult = useMemo(() => {
    let result = 0;
    for (let i =0; i <= 1000000000; i++){
      result = i + number;
    }
    //setNumber(result);
    return result;
  },[number]);
  return(
    // <div style = {colors}>
    // <h1>{heavyResult}</h1>
    // <button onClick={() => setTheme(!theme)}>Toggle theme</button>
    // <button onClick={ () => setNumber(number + 1)}>Calculate</button>
    // </div>
    <Callback/>
  )
}

export default App;