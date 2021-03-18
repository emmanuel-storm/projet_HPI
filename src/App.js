import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    fetch("https://6053736845e4b30017291b83.mockapi.io/tasks")
      .then(response => {
        return response.json();
      })
      .then(result => {
        setTask([task, result]);
      });
  });

  return;
}

export default App;
