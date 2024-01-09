import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

import { useState } from "react";
import WelcomeMessage from "./components/welcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (todoItemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: todoItemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTotoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTotoItems);
  };
  return (
    <center className="todo-container ">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
