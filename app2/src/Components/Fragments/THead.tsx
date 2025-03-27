import React, { Component } from 'react'

export class THead extends Component {
  render() {
    return (
      <React.Fragment>
        <thead>
            <tr>
                <th>Sno</th>
                <th>Course Name</th>
            </tr>
        </thead>
      </React.Fragment>
    )
  }
}

export default THead