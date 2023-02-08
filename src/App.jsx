import "./App.css"
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
const App = () => {
  

  return (
     <div className="app-ui">
      <h1>My Todo App</h1>
      <Form/>
      <TodoList/>
    </div> 
  );
}
 
export default App;