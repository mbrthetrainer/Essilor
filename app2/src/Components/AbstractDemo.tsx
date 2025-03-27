import React, { Component } from 'react'

abstract class Arithematic{
    sum(a:number,b:number):number
    {
        return a+b;
    }
    abstract mul(a:number,b:number):number;
    
}
class Sample extends Arithematic
{
    mul(a: number, b: number): number {
        return a*b
    }
    
}
export class AbstractDemo extends Component {
    s1=new Sample()
  render() {
    return (
      <div>
        <h1>{this.s1.sum(56,89)}</h1>
        <h1>{this.s1.mul(56,89)}</h1>
      </div>
    )
  }
}

export default AbstractDemo