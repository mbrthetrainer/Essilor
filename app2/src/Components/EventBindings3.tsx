import React, { Component } from 'react'

type MystateValues={
    count:number
}
export class EventBindings3 extends Component<{},MystateValues> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    changeValue(){
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        <h1>Counter:{this.state.count}</h1>
        <button onClick={this.changeValue.bind(this)}>Increment</button>
      </div>
    )
  }
}

export default EventBindings3