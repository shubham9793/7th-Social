import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  const deleteItem = contextObj.deleteItem;

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((items, index) => (
          <TodoItem
            key={index}
            todoDate={items.dueDate}
            todoName={items.name}
            onDeleteClick={deleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
