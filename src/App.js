import React, { useState, useEffect, Fragment } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    const fretchTask = async () => {
      const result = await fetch(
        "https://6053736845e4b30017291b83.mockapi.io/tasks"
      );

      setTask(result.task);
    };
    fretchTask();
  });

  let itemsToRender;
  if (task) {
    itemsToRender = task.map(item => {
      return <div key={item.id}>{item.description}</div>;
    });
  }

  return (
    <Fragment>
      <div>{itemsToRender}</div>
    </Fragment>
  );
}

export default App;
