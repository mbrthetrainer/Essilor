import React, { Component } from 'react'

export class Sample1 extends Component {
    arr:(string|number|boolean)[]=[10,20,"abc",60,"xyz"]

    arr1:Array<string>=["C","Java","PHP","Python"]

  render() {
    return (
      <div>
        <ul>
            {
                this.arr.map(x=>
                    <li>{x}</li>
                )
            }
        </ul>
        <ul>
            {
                this.arr1.map(x=><li>{x}</li>)
            }
        </ul>
      </div>
    )
  }
}

export default Sample1