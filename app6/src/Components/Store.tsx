import { applyMiddleware, createStore } from "redux";
import Reducer from "./Reducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


export type RootState=ReturnType<typeof Reducer>

const middleware:any[]=[thunk]
const Store=createStore(Reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default Store