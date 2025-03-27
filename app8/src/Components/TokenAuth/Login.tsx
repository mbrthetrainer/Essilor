import React, { ChangeEvent, Component, FormEvent, FormHTMLAttributes } from 'react'
import { login } from './AuthService'
interface mystate{
    email:string
    password:string
}
export class Login extends Component<{},mystate> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         email:'eve.holt@reqres.in',password:'cityslicka'
      }
    }
   changeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
      this.setState({
        [e.target.name]:e.target.value
        } as Pick<mystate, keyof mystate>
        )
   }
   submitHandler=async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const {email,password}=this.state
        const token=await login(email,password)
        if(token)
        {
            console.log('Login is Successfull')
        }
        else{
            console.log('Invald Credentials')
        }
   }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.submitHandler}>
            <input type="email" name="email" defaultValue={this.state.email}
            onChange={this.changeHandler}/>
            <br/>
            <input type="text" name="password" defaultValue={this.state.password}
             onChange={this.changeHandler}/>
             <br/>
             <input type="reset"/>
             <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Login