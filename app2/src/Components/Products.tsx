import React from 'react'
class Product
{
    id!:number
    name!:string    
}

function Products(props:Product) {
  return (
    <div>Product Details:
        <h1>{props.id}</h1>
        <h1>{props.name}</h1>
    </div>
  )
}

export default Products