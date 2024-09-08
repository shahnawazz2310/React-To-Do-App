import AddTodo from "./assets/Components/AddTodo";
import AppName from "./assets/Components/AppName";
import "./App.css";
import TodoItems from "./assets/Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./assets/Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newTodoItems);
    console.log(alert(`New Item ${itemName} is Added`));
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.logp(alert(`Item ${todoItemName} is Deleted`));
  };

  return (
    <div className="Todo-container">
      <center>
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </div>
  );
}

export default App;
