
import { useState} from 'react';

function Counter() {
    const [count, setCount]=useState(0);

    const handleInc=()=>
    {
        setCount(count+2)
    }
    const handleDec=()=>
    {
        setCount(count-1)
    }
    const handleDouble=()=>
    {
        setCount(count*2)
    }
  return (
   <>
   <h1>Counter</h1>
   <h1 style={color}>{count}</h1>
   <button onClick={()=>handleInc()}>Increment</button>
   <button onClick={()=>handleDec()}>Decrement</button>
   <button onClick={()=>handleDouble()}>Double</button>
   </>
   color = count%2===0 ? "#87ffc5":
   "#7f7bff"
  )
}

export default Counter