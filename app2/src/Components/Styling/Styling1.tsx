import React, { Component } from 'react'
import './mystyle.css'
import demostyle from './styles.module.css'

export class Styling1 extends Component {
  render() {
    const redText={
        color:'red',
        backgroundColor:'yellow',
        fontSize:'72px'
    }
    return (
      <div>
        <h1 style={redText}>Heading Text Here</h1>
        <h1 className='success'>Sample Text Here</h1>
        <h1 className='error'>Sample Text Here</h1>

        <h1 className={demostyle.success}>Sample Text Here</h1>
        <h1 className={demostyle.error}>Sample Text Here</h1>
      </div>
    )
  }
}

export default Styling1