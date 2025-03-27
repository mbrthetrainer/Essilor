import React, { Component } from 'react'

export class Sample extends Component {
    a:number=16
    arr:number[]=[10,20,30,40,50,60]
  render() {
    return (
      <div>
        <h1>{this.a}</h1>
        <h1>{this.arr}</h1>
        
        <ol>
            {
                this.arr.map((x,i)=>
                    <li key={i}>{x}</li>
                )
            }
        </ol>
      </div>
    )
  }
}

export default Sample