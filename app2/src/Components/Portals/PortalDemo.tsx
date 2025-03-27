import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class PortalDemo extends Component {
  
  render() {
    const element=document.getElementById('test')

    if(!element) {return null}
    else{
    return ReactDOM.createPortal(
      <div>PortalDemo</div>,element
    )
  }
}
}

export default PortalDemo