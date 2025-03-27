import React, { Component } from 'react'

type mystate={
  id:number
  name:string
  city:string
  age:number
}
export class FormHandling2 extends Component<{},mystate> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         id:0,name:'',city:'',age:0
      }
    }
    changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{        
        const {name,value}=e.target
        const _value=name=="id"||name=="age"?Number(value):value
        console.log(_value)
        this.setState({
            [name]:_value
        } as Pick<mystate,keyof mystate>)
    }
    submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            Id:<input type="number" name="id" defaultValue={this.state.id} 
            onChange={this.changeHandler}/>
            <br/>
            Name:<input type="text" name="name" defaultValue={this.state.name} 
            onChange={this.changeHandler}/>
            <br/>
            City:<input type="text" name="city" defaultValue={this.state.city} 
            onChange={this.changeHandler}/>
            <br/>
            Age:<input type="number" name="age" defaultValue={this.state.age} 
            onChange={this.changeHandler}/>
            <br/>
            <input type="reset"/>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default FormHandling2