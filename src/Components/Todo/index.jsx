import "./Todo.css";

const Todo = () => {
  return (
    <li className="todo-ui">
      <div className="todo-content">
        <h2></h2>
        <p></p>
      </div>
      <div className="btn-container">
        <button className="btn-ui">Delete</button>
        <button className="btn-ui">Edite</button>
        <button className="btn-ui">Checked</button>
      </div>
    </li>
  );
};

export default Todo;
