import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import format from "date-fns/format";

function CurrentTasks() {
  const fetchURL = "https://6053736845e4b30017291b83.mockapi.io/tasks";
  const getItems = () => fetch(fetchURL).then(res => res.json());

  const addTask = description => {
    const newItems = [{ description }, ...items];
    setItems(newItems);
  };
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(data =>
      setItems(
        data.sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
        })
      )
    );
  }, []);
  console.log(items);

  return (
    <div className="app">
      <TaskForm addTask={addTask} />
      <h1>CURRENT TASKS</h1>
      <ul className="todo-list">
        {items
          .filter(item => item.isComplete === false)
          .map(item => (
            <li className="todo" key={item.id}>
              <p>
                {format(new Date(item.createdAt), "dd/MM/yyyy kk:mm")} -{" "}
                {item.description}
              </p>
            </li>
          ))}
      </ul>
      <h1>COMPLETED TASKS</h1>
      <ul className="todo-list">
        {items
          .filter(item => item.isComplete === true)
          .map(item => (
            <li className="todo" key={item.id}>
              <p>
                {format(new Date(item.createdAt), "dd/MM/yyyy kk:mm")} -{" "}
                {item.description}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CurrentTasks;
