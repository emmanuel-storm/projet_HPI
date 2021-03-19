import React, { useState, useEffect } from "react";
import "./App.css";

const fetchURL = "https://6053736845e4b30017291b83.mockapi.io/tasks";
const getItems = () => fetch(fetchURL).then(res => res.json());

function TaskForm({ addTask }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="addTask"
        value={value}
        placeholder="add a task"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const addTask = description => {
    const newItems = [...items, { description }];
    setItems(newItems);
  };
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="app">
      <TaskForm addTask={addTask} />
      <h1>CURRENT TASKS</h1>
      <ul className="todo-list">
        {items.map(item => (
          <li className="todo" key={item.id}>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
