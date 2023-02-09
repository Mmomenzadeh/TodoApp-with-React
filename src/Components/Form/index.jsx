import { useContext } from "react";
import { TodoContext } from "../../Context";
import "./Form.css";
const Form = () => {
  const { todoObject, settodoObject, dispatch, todoInEditeMode ,settodoInEditeMode } =
    useContext(TodoContext);

  const handlecreateTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "create_todo",
      payload: {
        title: todoObject.title,
        desc: todoObject.desc,
      },
    });
    settodoObject({
      title: "",
      desc: "",
      id: "",
      checked: "",
    });
  };

  const handleUpdateTodo =(e)=>{
    e.preventDefault();
    settodoInEditeMode(false)
    dispatch({
      type:"edite_todo",
      payload :{
        title :todoObject .title,
        desc : todoObject.desc,
        id : todoInEditeMode
      }
    })
    settodoObject({
      title: "",
      desc: "",
      id: "",
      checked: "",
    });
  }
  return (
    <div className="form-ui">
      <div className="input-container">
        <div className="input-form">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) =>
              settodoObject({ ...todoObject, title: e.target.value })
            }
            value={todoObject.title}
          />
        </div>
        <div className="input-form">
          <label>Describe</label>
          <input
            type="text"
            placeholder="Describe"
            onChange={(e) =>
              settodoObject({ ...todoObject, desc: e.target.value })
            }
            value={todoObject.desc}
          />
        </div>
      </div>
      {!todoInEditeMode ? (
        <button className="form-btn-ui" onClick={handlecreateTodo}>
          Submit
        </button>
      ) : (
        <button className="form-btn-ui" onClick={handleUpdateTodo }>
          Save
        </button>
      )}
    </div>
  );
};

export default Form;
