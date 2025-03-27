import React, { Component } from 'react'
import ComponentC from './ComponentC'

export class ComponentB extends Component {
  render() {
    return (
      <div>
        ComponentB
        <br/>
        <ComponentC/>
    </div>
    )
  }
}

export default ComponentB