import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import { Button } from "react-bootstrap";
import { bool } from "prop-types";
//pour la date
// import moment from "moment";
// import "bootstrap/dist/css/bootstrap.min.css";

const fetchURL = "https://6053736845e4b30017291b83.mockapi.io/tasks";
const getItems = () => fetch(fetchURL).then(res => res.json());

function create(e) {
  // entité d'ajout - POST   ===>   e.preventDefault() a été mis dans le onChange de input car sinon
  //erreur : e.preventDefault() is not a function

  //creer l'entité
  fetch(fetchURL, {
    method: "POST",
    body: JSON.stringify({
      tache: null,
      date: null, // sera rajoutée d'elle seule sans que l'utilisateur la rentre, la date et l'heure comme sur createdAt de l'api
      isComplete: bool
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  // ajouter dans la liste des taches
}

function update(e) {
  // entité de mise à jour - PUT
  e.preventDefault();

  //ça mettra à jour les entrées avec PUT
  fetch(fetchURL, {
    method: "PUT",
    body: JSON.stringify({
      tache: null,
      date: null,
      isComplete: bool
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function supp(e) {
  //entité pour supprimer - DELETE
  e.preventDefault();

  // supprime les entités

  fetch(`${fetchURL}/${e.id}`, {
    // {task.id}
    method: "DELETE"
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function CurrentTasks() {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState("");

  // afficher la date dans un format plus lisible

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
      <form>
        <label htmlFor="tache">
          Add a Tache:
          <input
            name="add-task"
            type="text"
            className="add-task"
            value={task}
            onChange={e =>
              setTask(e.preventDefault(), { tache: e.target.value })
            }
            required
          />
        </label>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={e => create(e)}
        >
          Add
        </button>
        <button className="btn btn-danger" type="button" onClick={e => supp(e)}>
          Delete
        </button>
      </form>
      {/* <TaskForm data={data} /> */}

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
                {item.description}
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
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CurrentTasks;
