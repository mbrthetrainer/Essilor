import React, { Component } from 'react'

export class Employee extends Component {
  render() {
    return (
      <div>
        <h1>Employee Details:</h1>
        <h2>Id:{this.props.id}</h2>
        <h2>Name:{this.props.name}</h2>
        <h2>Designation:{this.props.designation}</h2>
        <hr/>
      </div>
    )
  }
}

export default Employee