import React, { Component } from 'react'
import ProductsData from '../Data/ProductsData.json'
import {connect} from 'react-redux'
import {addToCart,removeFromCart} from '../Redux/Reducer'


interface Product{
  id:number
  name:string
  price:number
  imgurl:string
}

interface Props{
  addToCart:(product:Product)=>void
  removeFromCart:(product:Product)=>void
}
export class Demo extends Component<Props> {
  render() {
    return (
      <div className='container'>
        {
            ProductsData.Products?
            <div className='row'>{
                ProductsData.Products.map((x,i)=>
                    <div className='col-3' key={i}>
                        <div className='card'>
                            <img src={x.imgurl} className='img-card' style={{"height":"150px","width":"125px"}}/>
                            <div className='card-title'>
                                <h4>{x.name} | {x.price}</h4>
                            </div>
                            <div className='card-body'>
                                <button className='btn btn-warning' onClick={()=>this.props.removeFromCart(x)}>Remove</button>
                                <button className='btn btn-primary mx-1' onClick={()=>this.props.addToCart(x)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
                :<div>--No Data Found--</div>
        }
      </div>
    )
  }
}

const mapDispatchToProps={
  addToCart,removeFromCart
}

export default connect(null,mapDispatchToProps)(Demo)