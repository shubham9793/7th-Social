import { useRef, useState } from "react";
import { MdAddChart } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");

  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleTodoName = (event) => {
  //   const newValue = event.target.value;
  //   setTodoName(newValue);
  // };

  // const handledueDate = (event) => {
  //   const newValue = event.target.value;
  //   setDueDate(newValue);
  // };

  // const handleAddButtonClicked = (event) => {
  //   onNewItem(todoName, dueDate);
  //   setDueDate("");
  //   setTodoName("");
  //   event.preventDefault();
  // };

  const handleAddButtonClicked = (event) => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";

    onNewItem(todoName, dueDate);
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
            //onChange={handleTodoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            id="date"
            ref={dueDateElement}
            //onChange={handledueDate}
          />
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
