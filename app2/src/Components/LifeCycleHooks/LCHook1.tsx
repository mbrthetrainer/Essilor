import React, { Component } from 'react'

type mystate={
    count:number
}
type myprop={
    initialvalue:number
}
export class LCHook1 extends Component<myprop,mystate> {
    constructor(props:myprop) {
        console.log("-------Constructor Invoked!------")
      super(props)
    
      this.state = {
         count:0
      }
    }
    static getDerivedStateFromProps(nextProp:myprop,prevState:mystate)
    {
        //prevState.count=nextProp.initialvalue
        console.log("-------getDerivedStateFromProps Invoked!-------")
        return null
    }
    componentDidMount(): void {
        console.log("-------componentDidMount Invoked!-------")
    }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }

    shouldComponentUpdate(nextProps: Readonly<myprop>, nextState: Readonly<mystate>, nextContext: any): boolean {
        console.log('-------shouldComponentUpdate Invoked!---------')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<myprop>, prevState: Readonly<mystate>) {
        console.log('Props',prevProps)
        console.log('State',prevState)
        console.log('-------getSnapshotBeforeUpdate---------')
        return null
    }
    componentDidUpdate(prevProps: Readonly<myprop>, prevState: Readonly<mystate>, snapshot?: any): void {
        console.log("------componentDidUpdate-------")
    }
    componentWillUnmount(): void {
        console.log('-------Component Unmounted-------')
    }
  render() {
    console.log("------Render Invoked!-----------")
    return (
      <div>
        <h1>Counter:{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default LCHook1