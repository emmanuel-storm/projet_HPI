import React, { useState, useEffect } from "react";

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

export default TaskForm;
