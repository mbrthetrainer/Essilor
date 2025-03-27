import React from 'react'
import {IncAction,DecAction} from './Actions'
import { connect } from 'react-redux'
import { RootState } from './Store'

interface props{
    local_variable:number
    IncAction:(value:number)=>void
    DecAction:(value:number)=>void
}
const Demo:React.FC<props> = ({local_variable,IncAction,DecAction}) => {
  return (
    <div>
        <h1>Counter:{local_variable}</h1>
        <button onClick={()=>DecAction(1)}>Decrement</button>
        <button onClick={()=>IncAction(1)}>Increment</button>
    </div>
  )

 
}

const mapStateToProps=(state:RootState)=>({
    local_variable:state
})
export default connect(mapStateToProps,{IncAction,DecAction}) (Demo)