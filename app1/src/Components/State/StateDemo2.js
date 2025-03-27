import React, { useState } from 'react'

function StateDemo2() {
    const [count,modifycount]=useState(0)
    function increment()
    {
        modifycount(count+1)
    }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default StateDemo2