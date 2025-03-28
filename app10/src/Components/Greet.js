import React, { useState } from 'react'

function Greet(props) {
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>Hello User!</h1>
        <h1>Welcome,{props.name}</h1>
        <h1>Counter:{count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Greet