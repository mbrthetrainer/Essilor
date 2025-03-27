import React, { Component } from 'react'
import { RootState } from '../Redux/Store'
import { connect } from 'react-redux'

interface Props{
  itemCount:number
  CartTotal:number
}
export class Navbar extends Component<Props> {     
  render() {    
    return (
      <div>
        <div className="navbar navbar-dark bg-dark">
            <div className='navbar-nav p-2 d-inline mx-auto'>
                <span className='btn btn-primary'>Total Items:{this.props.itemCount}</span>
                <span className='btn btn-primary mx-2'>Cart Total:{this.props.CartTotal}</span>
            </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state:RootState)=>
({
  itemCount:state.cart.items.length,
  CartTotal:state.cart.items.reduce((total,x)=>total+x.price,0)
})
export default connect(mapStateToProps)(Navbar)