import React, { useState } from 'react'

function One() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>Sample Text</h1>
        <input type="text" name="name" id="id" data-testid="name"/>
    </div>
  )
}

export default One