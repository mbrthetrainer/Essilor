import React, { Component } from 'react'

export class ChildC extends Component {
  render() {
    console.log("---------Child Render Invoked!---------")
    return (
      <div>ChildC</div>
    )
  }
}

export default ChildC