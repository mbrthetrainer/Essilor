import React, { Component } from 'react'

type mystate={
    id:number
    name:string
    city:string
    age: number
    errors:{[key:string]:string}
}
export class FormHandling1 extends Component<{},mystate> {
    constructor(props:{}) {
      super(props)
    
      this.state = {
         id:0,name:'',city:'',age:0,errors:{}
      }
    }

    validateInput=(field:string,value:any)=>{
        let error=""
        if(field=="id" && (value<0 || !value)){error="Id is Required & Should be Greater than Zero"}
        if(field=="name" && !value.trim()){error="Name is Required"}
        if(field=="city" && !value.trim()){error="City is Required"}
        if(field=="age" && (value<0 || !value)){error="Age is Should be Greater than Zero"}

        this.setState((prevState)=>({
            errors:{...prevState.errors,[field]:error}
        }))
    }


    idChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const _id=Number(e.target.value)
        console.log(_id)
        this.setState({id:_id},()=>this.validateInput("id",this.state.id))
    }
    nameChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const _name=e.target.value
        this.setState({name:_name},()=>this.validateInput("name",this.state.name))
    }
    cityChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const _city=e.target.value
        this.setState({city:_city},()=>this.validateInput("city",this.state.city))
    }
    ageChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const _age=Number(e.target.value)
        this.setState({age:_age},()=>this.validateInput("age",this.state.age))
    }
   submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(this.state)

        const {id,name,city,age} =this.state
        this.validateInput("id",id)
        this.validateInput("name",name)
        this.validateInput("city",city)
        this.validateInput("age",age)
        
       
        if(!this.state.errors){ 
            if(Object.values(this.state.errors).some((error)=>error))
            {
                console.log('Form Has Errors')
                return
            }
            else{         
            console.log('Form Submitted Successfully')
            console.log(this.state)
            }
    }
   }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            Id:<input type="number" defaultValue={this.state.id} onChange={this.idChangeHandler}/>
            {this.state.errors.id && <span style={{color:'red'}}>{this.state.errors.id}</span>}
            <br/>
            Name:<input type="text" defaultValue={this.state.name} onChange={this.nameChangeHandler}/>
            {this.state.errors.name && <span style={{color:'red'}}>{this.state.errors.name}</span>}
            <br/>
            City:<input type="text" defaultValue={this.state.city} onChange={this.cityChangeHandler}/>
            {this.state.errors.city && <span style={{color:'red'}}>{this.state.errors.city}</span>}
            <br/>
            Age:<input type="number" defaultValue={this.state.age} onChange={this.ageChangeHandler}/>
            {this.state.errors.age && <span style={{color:'red'}}>{this.state.errors.age}</span>}
            <br/>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default FormHandling1