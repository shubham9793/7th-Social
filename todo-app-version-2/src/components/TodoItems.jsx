import TodoItem from "./TodoItem";

import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((items, index) => (
          <TodoItem
            key={index}
            todoDate={items.dueDate}
            todoName={items.name}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
