import React, { Component } from 'react'

interface IBank
{
    getROI():number
}
class HDFC implements IBank
{
    getROI(): number {
        return 6.5
    }    
}
class CITI implements IBank
{
    getROI(): number {
        return 7.2
    }    
}
export class InterfaceDemo extends Component {
    hdfc:IBank=new HDFC()
    citi:IBank=new CITI()
  render() {
    return (
      <div>
        <h1>HDFC:{this.hdfc.getROI()}</h1>
        <h1>CITI:{this.citi.getROI()}</h1>
      </div>
    )
  }
}

export default InterfaceDemo