import React, { useState, useEffect } from "react";
import "./App.css";

const fetchURL = "https://6053736845e4b30017291b83.mockapi.io/tasks";
const getItems = () => fetch(fetchURL).then(res => res.json());

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);
  console.log(items);
  return (
    <div className="app">
      <div className="todo">
        {items.map(item => (
          <div key={item.id}>{item.description}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
