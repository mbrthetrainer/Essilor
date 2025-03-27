import React from 'react'

function Product(props) {
  return (
    <div>
        <h1>Product Details:</h1>
        <h1>Id:{props.id}</h1>
        <h2>Name:{props.name}</h2>
        <h2>Price:{props.price}</h2>
        <hr/>
    </div>
  )
}

export default Product