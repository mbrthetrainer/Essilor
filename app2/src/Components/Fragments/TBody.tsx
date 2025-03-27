import React, { Component } from 'react'

export class TBody extends Component {
  render() {
    return (
      <React.Fragment>
        <tbody>
            <tr>
                <td>1001</td>
                <td>Java</td>
            </tr>
            <tr>
                <td>1002</td>
                <td>React</td>
            </tr>
            <tr>
                <td>1003</td>
                <td>Angular</td>
            </tr>
        </tbody>
      </React.Fragment>
    )
  }
}

export default TBody