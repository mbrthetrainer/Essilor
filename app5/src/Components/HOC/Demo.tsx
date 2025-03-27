import React, { Component } from 'react'
import HOC from './HOC'

export class Demo extends Component {
  render() {
    return (
      <div>Demo Component</div>
    )
  }
}

export default HOC(Demo)