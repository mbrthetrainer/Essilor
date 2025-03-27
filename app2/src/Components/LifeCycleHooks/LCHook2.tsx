import React, { useEffect, useState } from 'react'

function LCHook2() {
    const [count,setcounter]=useState(0)
    useEffect(()=>{
        console.log('Use Effect is Invoked!')
    },[count])
    const increment=()=>{
        setcounter(count+1)
    }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default LCHook2