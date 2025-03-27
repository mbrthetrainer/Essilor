import React, { Component } from 'react'

type Product={
    id:number
    name:string
    price:number
}
export class Sample2 extends Component {
    products:Product[]=[
        {id:1001,name:'Test1',price:3000},
        {id:1002,name:'Test2',price:4500},
        {id:1003,name:'Test3',price:6000},
        {id:1004,name:'Test4',price:9000},
        {id:1005,name:'Test5',price:3500}
    ]
  render() {
    return (
      <div className='container mt-3'>
        <div className='mb-3 alert alert-warning'>Product Details</div>
        <table className='table table-bordered table-hover'>
            <thead>
                <tr className='table-warning'>
                    <th>Sno</th>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.products.map((product,index)=>
                    <tr>
                        <td>{index+1}</td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>)
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default Sample2