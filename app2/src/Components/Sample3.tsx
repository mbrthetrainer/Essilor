import React, { Component } from 'react'

class Employee{
    id:number
    name:string
    salary:number
    constructor(_id:number,_name:string,_salary:number)
    {
        this.id=_id
        this.name=_name
        this.salary=_salary
    }
}
export class Sample3 extends Component {
    Employees:Employee[]=[
        new Employee(1,"Employee-1",65000),
        new Employee(2,"Employee-2",77000),
        new Employee(3,"Employee-3",48000),
        new Employee(4,"Employee-4",65000),
    ]
  render() {
        {
        console.log(this.Employees.filter(x=>x.salary>=50000))
        console.log(this.Employees.find(x=>x.name=="Employee-3"))
        console.log(this.Employees.reduce((sum,x)=>sum+x.salary,0))
        console.log(this.Employees.length)
        console.log(this.Employees.sort((a,b)=>a.salary-b.salary))
         }
    return (
      <div className='container'>
        <table className='table table-hover table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.Employees.map((emp,i)=>
                    <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.salary}</td>
                    </tr>)
                }
            </tbody>
        </table>
        <h1>{this.Employees.at(0)?.name}</h1>
        
      </div>
    )
  }
}

export default Sample3