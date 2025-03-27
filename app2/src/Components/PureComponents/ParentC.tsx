import React, { Component, PureComponent } from 'react'
import ChildC from './ChildC'
import ChildC2 from './ChildC2'

type mystate={
    name:string
}
export class ParentC extends Component<{},mystate> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         name:'Steve'
      }
    }
    componentDidMount(): void {
        setInterval(() => {
            this.setState({name:'Steve'})
        }, 2000);
    }
  render() {
    console.log("--------Parent Render Invoked!------------")
    return (
      <div>
        <h1>Welcome,{this.state.name}</h1>
        <ChildC></ChildC>
        <ChildC2></ChildC2>
      </div>
    )
  }
}

export default ParentC