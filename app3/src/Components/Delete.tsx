import React, { Component } from 'react'

export class Delete extends Component {
    componentDidMount(): void {
        const id=window.location.pathname.split('/')[2]
        console.log(id)
        if(id)
        {
            fetch('https://reqres.in/api/users/'+id,{method:'DELETE'})
            .then(res=>{
                if(res.status==204)
                {
                    alert('User Deleted Successfully!')
                    window.location.href='../'
                }
            })
        }
    }
  render() {
    return (
      <div>Delete</div>
    )
  }
}

export default Delete