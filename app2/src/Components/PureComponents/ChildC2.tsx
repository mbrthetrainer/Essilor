import React from 'react'

function ChildC2() {
    console.log("----------Functional Child Component----------")
  return (
    <div>ChildC2</div>
  )
}

export default React.memo(ChildC2)