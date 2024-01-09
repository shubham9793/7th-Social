import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemContextProvider from "./store/todo-items-store";

// Component Function
function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container ">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
