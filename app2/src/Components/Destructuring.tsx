import React, { Component } from 'react'

class Product{
    id!:number
    barcode!:string
    name!:string
    category!:string
    price!:number
}
export class Destructuring extends Component<Product> {   
  render() {
    const {name,price}=this.props
    return (
      <div>
        Name:{name}
        <br/>
        Price:{price}
      </div>
    )
  }
}

export default Destructuring