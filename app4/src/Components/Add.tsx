import { ChangeEvent, Component, FormEvent } from 'react'
import User from './User'
import axiosObj from './AxiosProps'

export class Add extends Component<{},User> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         first_name:'',last_name:'',email:''
      }
    }
    changeHandler=(e:ChangeEvent<HTMLInputElement>)=>
    {
        const {name,value}=e.target        
        this.setState({
            [name]:value
        } as Pick<User,keyof User>)
    }
    submitHandler=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(this.state)
        axiosObj.post('users',JSON.stringify(this.state))
        .then(res=>{
            console.log('response is:',res)
            if(res.status==201)
            {
                alert('User Data Saved Successfully!')
                window.location.href='./'
            }
            else{
                alert('OOPS Something Went Wrong!')
            }
        })
    }

  render() {
    return (
      <div className='container'>
        <h1 className='alert alert-success my-3'>Add User</h1>
        <form onSubmit={this.submitHandler}>
            <div className='row'>
                <div className='col'>
                    <input type="text" name="first_name" className='form-control' 
                    placeholder='Enter First Name' onChange={this.changeHandler}
                    defaultValue={this.state.first_name}/>
                </div>
                <div className='col'>
                <input type="text" name="last_name" className='form-control' 
                    placeholder='Enter Last Name' onChange={this.changeHandler}
                    defaultValue={this.state.last_name}/>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col'>
                    <input type='text' name='email' className='form-control'
                    placeholder='Enter E-Mail' onChange={this.changeHandler}
                    defaultValue={this.state.email}/>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col'>
                    <input type="reset" className='btn btn-warning'/>
                    <input type="submit" className='btn btn-success mx-3'/>
                </div>
            </div>
        </form>
      </div>
    )
  }
}

export default Add