import React, { Component } from 'react'

class Parent
{
    print()
    {
        return "This is From Parent Class"
    }
}
class Child extends Parent{
    display()
    {
        return "This is From Child Class"
    }
}
export class InheritanceSample extends Component {
    cld:Child=new Child()
  render() {
    return (
      <div>
        <h1>{this.cld.print()}</h1>
        <h1>{this.cld.display()}</h1>
      </div>
    )
  }
}

export default InheritanceSample