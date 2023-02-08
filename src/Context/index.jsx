import React, { createContext, useReducer, useState } from "react";
import { Reducer } from "../Reducer/Reducer";

 export const TodoContext = createContext({
    todoObject:"" , settodoObject:()=>{},
    todoState :[] , dispatch:(command)=>[]
 })


 const TodoContextProvider=({children})=>{
   const [todoState , dispatch] = useReducer(Reducer , [])
    const initialValue={
        title : "",
        desc : "",
        id : "",
        checked : false
    }
    const [todoObject , settodoObject ]=useState(initialValue)
    return <TodoContext.Provider value={{ todoObject , settodoObject ,todoState , dispatch}}>{children}</TodoContext.Provider>
 }

 export default TodoContextProvider