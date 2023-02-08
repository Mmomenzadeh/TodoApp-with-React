import { useContext } from "react";
import { TodoContext } from "../../Context";
import Todo from "../Todo";
import "./TodoList.css";
const TodoList = () => {
  const { todoState } = useContext(TodoContext);
  return (
    <ul className="todoList-ui">
      {todoState.map((todoItem) => {
        return (
          <div key={todoItem.id}>
            <Todo  todoItem={todoItem} />
            <div className="line"></div>
          </div>
        );
      })}
    </ul>
  );
};

export default TodoList;
