import { useState, useCallback, memo } from "react";

const Component = memo(({increment}) => {
    console.log("rendered");
    return(
        <button>Increment count</button>
    )
});

function Callback(){
    const [mode, setMode]= useState(false);
    const [count, setCount]= useState(0);

    const increment = useCallback(() => {
        setCount((c)=> c + 1);
    }, [] );

    return(
        <div style={{
            background: mode ? "black" : "white",
            color: mode ? "white" : "black"
        }}>
            <h1>{count}</h1>
            <button onClick={() => setMode(!mode)}>Toggle theme</button>
            <Component increment={increment}/>
        </div>
        
    );
}

export default Callback;