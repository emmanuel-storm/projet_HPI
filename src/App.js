import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import "./App.css";
import { getItems } from "./constant";
import DisplayTask from "./DisplayTask";
// import AddTask from "./AddTask";
// import DeleteTask from "./DeleteTask";

function App() {
  // currentTask parceque quand j'avais refactor mon code j'avais crée plusieurs fichiers js pour bien presenter mon code
  const [items, setItems] = useState([]); // pour gerer la recuperation et l'affichage des données de l'api
  const getList = () => {
    getItems().then(data =>
      setItems(
        data.sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
        })
      )
    );
  };
  // afficher la date dans un format plus lisible

  useEffect(() => {
    // componentDidMount() pour le react-based avec les classes
    getList();
  }, []);
  console.log(items);
  return (
    <>
      <DisplayTask items={items} refresh={getList} />
      <AddTask refresh={getList} />
    </>
  );
}

export default App;
