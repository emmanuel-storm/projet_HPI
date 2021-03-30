import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import { Button, Card, Form } from "react-bootstrap";
//pour la date
import moment from "moment";
// import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ item, index, markTask, removeTask }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: item.isComplete ? "line-through" : "" }}>
        {" "}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTask(index)}>
          {" "}
          ✓{" "}
        </Button>{" "}
        {""}
        <Button variant="outline-danger" onClick={() => removeTask(index)}>
          {" "}
          ✕{" "}
        </Button>
      </div>
    </div>
  );
}

function TaskForm({ addTask }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          {" "}
          <b>Add task</b>{" "}
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="add new task"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function CurrentTasks() {
  // ajouter une tache

  const addTask = (description, createdAt) => {
    const newItems = [{ description, createdAt }, ...items];
    createdAt = "22 / 03 / 2001 - 13:43:45";
    setItems(newItems);
  };

  // marquer une tache comme complete ou !

  const markTask = index => {
    const newItems = [...items];
    newItems[index].isComplete = true;
    setItems(newItems);
  };

  // supprimer une tache

  const removeTask = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const fetchURL = "https://6053736845e4b30017291b83.mockapi.io/tasks";
  const getItems = () => fetch(fetchURL).then(res => res.json());

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
      <h1>CURRENT TASKS</h1>
      <ul className="todo-list">
        <TaskForm addTask={addTask} />
        {items
          .filter(item => item.isComplete === false)
          .map(item => (
            <li className="todo" key={item.id}>
              <p>
                {format(new Date(item.createdAt), "dd/MM/yyyy kk:mm:ss")} -{" "}
                {item.description}
              </p>
              <Todo
                key={item}
                item={item}
                // todo={todo}
                markTask={markTask}
                removeTask={removeTask}
              />
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
