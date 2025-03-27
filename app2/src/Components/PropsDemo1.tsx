import React from 'react'

interface myProps{
    id:number
    name?:string
    children?:React.ReactNode
}

function PropsDemo1(props:myProps) {
  return (
    <div>
        <h1>Id:{props.id}</h1>
        <h2>Name:{props.name}</h2>
        {props.children}
    </div>
  )
}

export default PropsDemo1