import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Product{
    id:number
    name:string
    price:number
}
interface CartState{
    items:Product[]
}

const initialState:CartState={
    items:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Product>)=>{
            state.items.push(action.payload)
        },
        removeFromCart:(state,action:PayloadAction<Product>)=>{
            state.items=state.items.filter((x)=>x.id!==action.payload.id)
        }
    }
})

export default cartSlice.reducer
export const {addToCart,removeFromCart}=cartSlice.actions
