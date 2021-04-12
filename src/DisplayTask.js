import format from "date-fns/format";
import React from "react";
import { fetchURL } from "./constant";
import { data } from "browserslist";

function DisplayTask({ items, refresh }) {
  const deleteAction = item => {
    fetch(fetchURL + "/" + item.id, {
      method: "DELETE"
    }).then(res => refresh());
  };

  const completeAction = item => {
    fetch(fetchURL + "/" + item.id, {
      method: "PUT",
      body: JSON.stringify(item, (item.isComplete = true))
    }).then(res => refresh);
  };

  const uncompleteAction = () => {
    // todo
    refresh();
  };

  return (
    <div className="app">
      <h1>CURRENT TASKS</h1>

      {/* l'affichage des taches de l'api dans des listes  */}

      <ul className="todo-list">
        {items
          .filter(item => item.isComplete === false) // pour mettre que les taches en cours (isComplete: false) dans la liste Current tasks
          .map((
            item,
            idx //// j'ai rajouté idx car quand j'appellais key={item.id} il y"avait des erreurs d'elements avec la meme clé
          ) => (
            <li className="todo" key={idx}>
              <p>
                {format(new Date(item.createdAt), "dd/MM/yyyy kk:mm:ss")} -{" "}
                {item.description}{" "}
                <button onClick={() => completeAction(data)}>✓</button>{" "}
                <button onClick={() => deleteAction(item)}>X</button>
              </p>
              {/* enlevé la balise Todo */}
            </li>
          ))}
      </ul>
      <h1>COMPLETED TASKS</h1>
      <ul className="todo-list">
        {items
          .filter(item => item.isComplete === true) // pour mettre que les taches trerminées (isComplete: true) dans la liste Completed tasks
          .map((item, idx) => (
            <li className="todo" key={idx}>
              <p>
                {format(new Date(item.createdAt), "dd/MM/yyyy kk:mm")} -{" "}
                {item.description}
                <button onClick={() => uncompleteAction()}>↺</button>{" "}
                <button onClick={() => deleteAction(item)}>X</button>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DisplayTask;
