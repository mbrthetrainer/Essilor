import React, { Component } from 'react'

class Demo{
    print():string
    print(msg:string):string
    print(msg?:string):string
    {
       if(msg && msg.length>0)
       {
        return `Message Received:${msg}`
       }
       else{
        return "This is Default Message"
       }
    }
}
export class StaticPoly extends Component {
  render() {
    return (
      <div>StaticPoly</div>
    )
  }
}

export default StaticPoly