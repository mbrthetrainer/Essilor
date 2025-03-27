import React from "react";

const defVal={userid:''}
const UserContext=React.createContext(defVal)

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}