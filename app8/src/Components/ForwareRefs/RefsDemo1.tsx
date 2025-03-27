import React, { Component } from 'react'
import Child from './Child'

export class RefDemo1 extends Component {

  nameref=React.createRef<HTMLInputElement>()

  componentDidMount(): void {
      console.log(this.nameref.current)
      if(this.nameref.current)
      {
        this.nameref.current.placeholder="Enter Your Name Here"
        this.nameref.current.focus()
      }
  }

  clickHandler=()=>{
    if(this.nameref.current)
    {
        alert('Text Entered:'+this.nameref.current.value)
    }
  }
  render() {
    return (
      <div>
        <Child ref={this.nameref}/>
        <br/>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default RefDemo1