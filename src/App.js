import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentTasks from "./CurrentTasks";
import TaskFom from "./TaskForm";

function App() {
  return (
    <>
      <CurrentTasks />
      <TaskFom />
    </>
  );
}

export default App;
