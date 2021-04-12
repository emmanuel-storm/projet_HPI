import React from "react";
import { useForm } from "react-hook-form";
import { fetchURL } from "./constant";

function AddTask(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data =>
    fetch(fetchURL, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data, (data.isComplete = false))
    }).then(res => props.refresh());

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Add a task"
        {...register("description", { required: true, maxLength: 80 })}
      />
      <input
        type="datetime-local"
        placeholder="Date"
        {...register("createdAt", { required: true, maxLength: 100 })}
      />

      <input type="submit" />
    </form>
  );
}

export default AddTask;
