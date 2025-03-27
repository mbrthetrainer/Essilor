import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo1() {
    const element=document.getElementById('test')

    if(!element) 
     {
            return null
    }
    else{
    return ReactDOM.createPortal(
      <div>PortalDemo</div>,element
    )
  }
}

export default PortalDemo1