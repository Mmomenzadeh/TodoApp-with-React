import { useContext } from "react";
import { TodoContext } from "../../Context";
import "./Todo.css";

const Todo = ({ todoItem }) => {
  const {
    todoObject,
    settodoObject,
    dispatch,
    settodoInEditeMode,
    todoInEditeMode,
    isChecked,
    setIsChecked,
  } = useContext(TodoContext);

  const handleTodoDelete = (id) => {
    dispatch({
      type: "delete_todo",
      payload: {
        id,
      },
    });
  };
  const handleTodoEdite = (id) => {
    settodoObject(todoItem);
    settodoInEditeMode(id);
  };
  const handleTodoCheck = (id ,status) => {
    dispatch({
      type : "check_todo",
      payload:{
        id,status
      }
    })

  };

  return (
    <li className="todo-ui">
      <div className="todo-content">
        <h2 style={{textDecoration : todoItem.checked ? "line-through" : null}}>{todoItem.title}</h2>
        <p style={{color: todoItem.checked ? "#737474" : "#fff" }}>{todoItem.desc}</p>
      </div>
      <div className="btn-container">
        <button
          className="btn-ui"
          onClick={() => handleTodoDelete(todoItem.id)}
        >
          Delete
        </button>
        <button className="btn-ui" onClick={() => handleTodoEdite(todoItem.id)}>
          Edite
        </button>
        {todoItem.checked ? (
          <button
            className="btn-ui"
            style={{ width: "100px"}}
            onClick={() => handleTodoCheck(todoItem.id, false)}
          >
            UnChecked
          </button>
        ) : (
          <button
            className="btn-ui"
            onClick={() => handleTodoCheck(todoItem.id, true)}
          >
            Checked
          </button>
        )}
      </div>
    </li>
  );
};

export default Todo;
