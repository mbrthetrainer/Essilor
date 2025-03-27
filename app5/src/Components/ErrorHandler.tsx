import React, { Component } from 'react'

type myprops={
    children:React.ReactNode
}
type mystate={
    hasError:boolean
}
export class ErrorHandler extends Component<myprops,mystate> {
    constructor(props:myprops) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error:Error):mystate{
        return {hasError:true}
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log('Error Occured')
        console.log('Error is:',error)
        console.log('Error Info:',errorInfo)
    }
  render() {
    if(this.state.hasError)
    {
        return(<h1>OOPS Some Error Occured Here</h1>)
    }
    return this.props.children
  }
}

export default ErrorHandler