import React, { Component } from 'react'

export class RefDemo extends Component {

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
        <input type="text" ref={this.nameref}/>
        <br/>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default RefDemo