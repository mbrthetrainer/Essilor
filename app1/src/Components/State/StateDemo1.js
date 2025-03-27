import React, { Component } from 'react'

export class StateDemo1 extends Component {
    constructor() {    
    super()
      this.state = {
         name:"Guest"
      }
    }
    changeUserID()
    {
        this.setState({name:'Admin'})
    }
  render() {
    return (
      <div>
        <h1>Welcome, {this.state.name}</h1>
        <button onClick={()=>this.changeUserID()}>Login</button>
      </div>
    )
  }
}

export default StateDemo1