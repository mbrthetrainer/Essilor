import React, { ChangeEvent, Component, FormEvent } from 'react'
import User from './User'


export class Edit extends Component<{},User> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         id:0,first_name:'',last_name:'',email:''
      }
    }
    componentDidMount(): void {
        const id=window.location.pathname.split('/')[2]
        console.log(id)
        fetch('https://reqres.in/api/users/'+id,{method:'GET'})
        .then(res=>{return res.json()})
        .then(result=>{
            console.log(result.data)
            const {id,first_name,last_name,email,avatar}=result.data
            this.setState({
                id:id,first_name:first_name,last_name:last_name,
                email:email
            })
        })
    }


    changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        const val=name=='id'? Number(value):value
        this.setState({[name]:val
        } as Pick<User, keyof User>)
    }
    submitHandler=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(this.state)
        fetch('https://reqres.in/api/users/'+this.state.id,{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
        }).then(res=>{
            if(res.status==200)
            {
                alert('User Details Saved Successfully!')
                window.location.href='../'
            }else{
                alert('OOPS! Something Went Wrong!')
            }
        })
    }
  render() {
    return (
      <div className='container'>
        <h1 className='alert alert-success mt-3'>Edit User</h1>
        <form onSubmit={this.submitHandler}>
            <div className='row my-3'>
                <div className='col'>
                    <input type="text" name="first_name" placeholder='Enter First Name'
                    className='form-control' defaultValue={this.state.first_name} 
                    onChange={this.changeHandler}/>
                </div>
                <div className='col'>
                    <input type="text" name="last_name" placeholder='Enter Last Name'
                    className='form-control' defaultValue={this.state.last_name} 
                    onChange={this.changeHandler}/>
                </div>
            </div>

            <div className='row my-3'>
                <div className='col'>
                    <input type="text" name="email" placeholder='Enter E-Mail'
                    className='form-control' defaultValue={this.state.email} 
                    onChange={this.changeHandler}/>
                </div>
            </div>

            <div className='row my-3'>
                <div className='col'>
                    <input type="reset" className='btn btn-danger'/>
                    <input type="submit" className='btn btn-success mx-3'/>
                </div>
            </div>
        </form>
      </div>
    )
  }
}

export default Edit