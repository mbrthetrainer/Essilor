import React, { Component } from 'react'

export class Courses extends Component {
    courseList:string[]=["Java","Python","SQL","React","Angular"]
  render() {
    return (
      <div>
        <table className='table table-bordered table-hover'>
            <thead>
                <tr className='table-success'>
                    <th>Id</th>
                    <th>Course Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.courseList.map((course,index)=>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{course}</td>
                    </tr>)
                }
            </tbody>
        </table>

      </div>
    )
  }
}

export default Courses