import React, { Component } from 'react'

interface myProps{
    id:number
    name?:string
    children?:React.ReactNode
}

export class PropsDemo extends Component<myProps> {
  render() {
    return (
      <div>
        <h1>Name:{this.props.name}</h1>
        <h1>Id:{this.props.id}</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default PropsDemo