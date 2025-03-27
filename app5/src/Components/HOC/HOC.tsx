import React from "react";


const HOC=(Component:React.ComponentType)=>{
   return(
    class extends React.Component{
        state={
            isAuthorized:true
        }
        render(): React.ReactNode {
            return(
                this.state.isAuthorized?<Component/>:
                <h1>Sorry! You Are not Authorized</h1>
            )
        }
    }
   )
}
export default HOC