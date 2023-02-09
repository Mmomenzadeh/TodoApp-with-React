import { useContext } from "react";
import { TodoContext } from "../../Context";
import "./Todo.css";

const Todo = ({todoItem}) => {

  const {todoObject, settodoObject, dispatch ,settodoInEditeMode ,todoInEditeMode} = useContext(TodoContext)

  const handleTodoDelete =(id)=>{
    dispatch({
      type : "delete_todo",
      payload : {
        id
      }
    })
  }
  const handleTodoEdite =(id)=>{
    settodoObject(todoItem)
    settodoInEditeMode(id)
  

  }
  const handleTodoCheck =(id)=>{

  }

  return (
    <li className="todo-ui">
      <div className="todo-content">
        <h2>{todoItem.title}</h2>
        <p>{todoItem.desc}</p>
      </div>
      <div className="btn-container">
        <button className="btn-ui" onClick={()=>handleTodoDelete(todoItem.id)}>Delete</button>
        <button className="btn-ui" onClick={()=>handleTodoEdite(todoItem.id)}>Edite</button>
        <button className="btn-ui" onClick={()=>handleTodoCheck(todoItem.id)}>Checked</button>
      </div>
    </li>
  );
};

export default Todo;
