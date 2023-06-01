import { useState } from "react";

function GetTask() {
  const [task, setTask] = useState([
    {
      id: 1,
      task: "Ir a la compra",
      done: false,
    },
    {
      id: 2,
      task: "Hacer ejercicios de react",
      done: true,
    },
  ]);


  return task;
}

export default GetTask;
