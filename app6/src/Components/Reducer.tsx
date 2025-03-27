
const count=0
type myactions={
    type:string
    payload:number
}
const Reducer=(state=count,action:myactions)=>{
  const {type,payload}=action
  switch(type)
  {
    case "increment":
        return state+payload
    case "decrement":
        return state-payload
    default:
        return state
  }
}

export default Reducer