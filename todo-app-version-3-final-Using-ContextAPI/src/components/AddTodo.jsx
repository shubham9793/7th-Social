import { useContext, useRef } from "react";
import { MdAddChart } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const contextObj = useContext(TodoItemsContext);
  const addNewItem = contextObj.addNewItem;

  const handleAddButtonClicked = (event) => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    addNewItem(todoName, dueDate);
    event.preventDefault();
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            id="todo"
            placeholder="Enter TODO here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" id="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            {/* // Icon Name */}
            <MdAddChart />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
