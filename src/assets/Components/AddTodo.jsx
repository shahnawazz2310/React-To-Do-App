import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row new-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Your Todo Here"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input type="date" 
          value={todoDate} 
          onChange={handleDateChange}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success new-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
