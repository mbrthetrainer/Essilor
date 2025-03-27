import { Component } from 'react'
import axiosObj from './AxiosProps'

export class Delete extends Component {
    componentDidMount(): void {
        const id=window.location.pathname.split('/')[2]
        axiosObj.delete('users/'+id).then(res=>{
            if(res.status==200)
            {
                alert('User Deleted Successfully!')
            }
            else{
                alert('OOPS Something Went Wrong!')
            }
        window.location.href='../'
        })
        
    }
  render() {
    return (
      <div>Delete</div>
    )
  }
}

export default Delete