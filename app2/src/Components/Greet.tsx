import React from 'react'
import {format} from 'date-fns'

function Greet() {
    // bigint,number,string,bool,null
    const a:number=10
    const score:number=15.26
    const country:string="India"
    // const doj:Date=new Date('2016-08-28 14:26:22')
    const doj:Date=new Date()
  return (
    <div>
        <h1>{a}</h1>
        <h1>Score:{score}</h1>
        <h1>Country:{country}</h1>
        <h1>DOJ:{doj.toString()}</h1>
        <h1>DOJ:{format(doj,"dd/MM/yyyy HH:mm:ss")}</h1>
        <h1>{doj.toLocaleDateString('en-US',{timeZone:'UTC'})}</h1>
        <h1>{doj.toLocaleTimeString('en-US',{timeZone:'UTC'})}</h1>
        <h1>{doj.toLocaleString('en-US',{timeZone:'UTC'})}</h1>
        <h1>{doj.toLocaleString('en-GB',{timeZone:'europe/london'})}</h1>
        <h1>{doj.toLocaleString('en-IN',{timeZone:'asia/kolkata'})}</h1>
        <h1>{doj.toLocaleString('en-JP',{timeZone:'asia/Tokyo'})}</h1>
    </div>
  )
}

export default Greet