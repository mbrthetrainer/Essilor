import React, { Component } from 'react'
import THead from './THead'
import TBody from './TBody'

export class Table extends Component {
  render() {
    return (
      <div>
        <table border={1}>
            <THead></THead>
            <TBody></TBody>
        </table>
      </div>
    )
  }
}

export default Table