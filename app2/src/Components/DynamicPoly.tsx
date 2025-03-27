import React, { Component } from 'react'

class Parent{
    display(){
        return "Some Code From Parent Class will Execute Here"
    }
}
class Child extends Parent{
    override display(){
        return "Some Code From Child Class will Execute Here"
    }
}
export class DynamicPoly extends Component {
    parent=new Parent()
    child=new Child()
  render() {
    return (
      <div>
        <h1>{this.parent.display()}</h1>
        <h1>{this.child.display()}</h1>
      </div>
    )
  }
}

export default DynamicPoly