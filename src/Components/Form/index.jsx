import { useContext } from "react";
import { TodoContext } from "../../Context";
import "./Form.css";
const Form = () => {
  const { todoObject, settodoObject, dispatch } = useContext(TodoContext);

  const createTodo = (e) => {
    e.preventDefault();
    dispatch({
      type: "create_todo",
      payload: {
        title: todoObject.title,
        desc: todoObject.desc,
      },
    });
  };
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
          />
        </div>
      </div>
      <button className="form-btn-ui" onClick={createTodo}>
        Submit
      </button>
    </div>
  );
};

export default Form;
