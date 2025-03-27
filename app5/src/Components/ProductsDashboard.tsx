import { Component } from 'react'

type myprops={
  id:number
  name:string
  price:number
  category:string
}
export class ProductsDashboard extends Component<myprops> {
    constructor(props:myprops) {
      super(props)
    
      this.state = {
      }
    }
  render() {
    if(this.props.category!='Electronics')
    {
        throw new Error("Invalid Category")
    }
    return (
      <div>
        <div>
            <strong>Id:</strong>{this.props.id} <br/>
            <strong>Name:</strong>{this.props.name} <br/>
            <strong>Price:</strong>{this.props.price} <br/>
            <strong>Category:</strong>{this.props.category} <br/>
            <hr/>
        </div>
      </div>
    )
  }
}

export default ProductsDashboard