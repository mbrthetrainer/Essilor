import React, { Component } from 'react'

type myprops={
    isloggedInn:boolean
}
export class CRender2 extends Component<myprops> {   
   
  render() {
    return (
      <div>
        {
            this.props.isloggedInn?
            <div>
                <h1>Welcome Admin</h1>
            </div>:
            <div>
                <h1>Welcome Guest</h1>
            </div>
        }
      </div>
    )
  }
}

export default CRender2