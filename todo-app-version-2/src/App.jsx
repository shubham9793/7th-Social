import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "4/10/2024",
    },
    {
      name: "Goto College",
      dueDate: "10/10/2024",
    },
    {
      name: "Play BGMI",
      dueDate: "Right Now",
    },
  ];

  return (
    <center className="todo-container ">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
