import React, { Component } from 'react'

type myprops={
    isloggedInn:boolean
}
export class CRender1 extends Component<myprops> {
  render() {
    if(this.props.isloggedInn)
    {
        return(
            <h1>Welcome Admin</h1>
        )
    }
    else{
        return(
            <h1>Welcome Guest</h1>
        )
    }
  }
}

export default CRender1