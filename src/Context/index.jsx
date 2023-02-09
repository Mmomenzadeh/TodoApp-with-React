import React, { createContext, useReducer, useState } from "react";
import { Reducer } from "../Reducer/Reducer";

export const TodoContext = createContext({
  todoObject: "",
  settodoObject: () => {},
  todoState: [],
  dispatch: (command) => [],
  todoInEditeMode: false,
  settodoInEditeMode: () => {},
  isChecked: false,
  setIsChecked: () => {},
});

const TodoContextProvider = ({ children }) => {
  const [todoState, dispatch] = useReducer(Reducer, []);
  const initialValue = {
    title: "",
    desc: "",
    id: "",
    checked: false,
  };
  const [todoObject, settodoObject] = useState(initialValue);
  const [todoInEditeMode, settodoInEditeMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <TodoContext.Provider
      value={{
        todoObject,
        settodoObject,
        todoState,
        dispatch,
        todoInEditeMode,
        settodoInEditeMode,
        isChecked, setIsChecked
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
