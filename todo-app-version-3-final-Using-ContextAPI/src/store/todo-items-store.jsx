import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext([]);

// Pure Function
const todoItemReducer = (currentTodoItem, action) => {
  let newTodoItem = currentTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItem = [
      ...currentTodoItem,
      { name: action.paylod.itemName, dueDate: action.paylod.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItem = currentTodoItem.filter(
      (item) => item.name !== action.paylod.itemName
    );
  }
  return newTodoItem;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      paylod: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      paylod: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemContextProvider;
