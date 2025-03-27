import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentD extends Component {
  render() {
    return (
      <div>
        ComponentD
        <br/>
        <UserConsumer>
            {
              ({userid})=>
                <h1>Welcome {userid||"Guest"}</h1>
              
            }
        </UserConsumer>
    </div>
    )
  }
}

export default ComponentD