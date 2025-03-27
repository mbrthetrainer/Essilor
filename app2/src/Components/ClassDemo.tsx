import React, { Component } from 'react'

class Employee{
    ECode!:number;
    Name!:string
     constructor(_ecode:number,_name:string)
     {
        this.ECode=_ecode
        this.Name=_name
     }
    display()
    {
        return `${this.ECode}-${this.Name}`
    }
}
export class ClassDemo extends Component {
    emp:Employee=new Employee(23657,"John");
        
    
  render() {
    return (
      <div>
        <h1>{this.emp.display()}</h1>
      </div>
    )
  }
}

export default ClassDemo