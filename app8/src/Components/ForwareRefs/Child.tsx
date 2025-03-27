import { forwardRef } from "react";

const Child=forwardRef<HTMLInputElement,{}>((props,ref)=>(
   <input type="text" ref={ref}/>
))

export default Child