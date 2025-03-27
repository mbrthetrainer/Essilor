import React, { Component } from 'react'
import { fetchProtectedData } from './AuthService'

interface mystate{
    data:string
}
export class Dashboard extends Component<{},mystate> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         data:'Checking Authentication....'
      }
    }
    async componentDidMount() {
        const token=localStorage.getItem("token")
        if(!token)
        {
            this.setState({data:'Access Denied. Please Login'})
            return
        }
        const _data=await fetchProtectedData()
        this.setState({data:_data})
    }
  render() {
    return (
      <div>
        <h1>User Data:</h1>
        <pre>{this.state.data}</pre>
      </div>
    )
  }
}

export default Dashboard