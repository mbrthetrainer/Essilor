import { Dispatch } from "redux"

export const IncAction=(value:number)=>
    {
        return (dispatch:Dispatch)=>{
        dispatch({
            type:'increment',
            payload:value
        })
    }
}

export const DecAction=(value:number)=>
    {
        return (dispatch:Dispatch)=>{
    dispatch({
        type:'decrement',
        payload:value
    })
}
}

