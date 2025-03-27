import { Component } from 'react'
import User from './User'
import axiosObj from './AxiosProps'

type mystate={
    users:User[]
}
export class Dashboard extends Component<{},mystate> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
  componentDidMount(): void {
      axiosObj.get('users').then(res=>{
        console.log(res.data)
        this.setState({users:res.data})
      })
  }  
  render() {
    return (
      <div className='container my-3'>
            <h1 className='alert alert-success'>User Data</h1>
            <a href={'add'} className='btn btn-success my-3'>Add User</a>
            <table className='table table-bordered table-hover my-3'>
                <thead>
                    <tr className='table-success'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users?
                        this.state.users.map((x,i)=>
                        <tr key={i}>
                            <td>{x.id}</td>
                            <td>{x.first_name} {x.last_name}</td>
                            <td>{x.email}</td>
                            <td>
                                <a href={`edit/${x.id}`} className='btn btn-warning'>Edit</a>
                                <a href={`delete/${x.id}`} className='btn btn-danger mx-2'>Delete</a>
                            </td>
                        </tr>):
                        <tr>
                            <td colSpan={4}>
                                No Data Found
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
      </div>
    )
  }
}

export default Dashboard