import React, { Component } from 'react'

type mystate={
    isloggedInn:boolean
}

export class CRender4 extends Component<{},mystate> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         isloggedInn:false
      }
    }
  render() {
    const user=this.state.isloggedInn?"Admin":"Guest"
    return (
      <div>
       <h1>Welcome, {user}</h1>
      </div>
    )
  }
}

export default CRender4