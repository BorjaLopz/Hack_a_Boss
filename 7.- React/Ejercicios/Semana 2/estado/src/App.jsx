import Checkbox from "./components/Checkbox/Checkbox";
import NewTask from "./components/NewTask/NewTask";
import TaskList from "./components/TaskList/TaskList";
import GetTask from "./hooks/GetTask/GetTask";

import "./style.css";
import { useState } from "react";

function App() {
  const tasks = GetTask();

  const [allTasks, setTask] = useState(tasks);
  // console.log(allTasks);

  const handleChangeCheckbox = (index) => {
    setTask([
      ...allTasks.slice(0, index),
      { ...allTasks[index], done: !allTasks[index].done },
      ...allTasks.slice(index + 1),
    ]);
  };

  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = [
      ...allTasks,
      { id: allTasks[allTasks.length - 1].id + 1, task: item, done: false },
    ];
    setTask(items);

    // console.log(items);

    setItem("");
  };

  return (
    <>
    {/* MOSTRAR LAS TAREAS CON SU ELEMENTO CHECKBOX */}
      {
        <TaskList
          data={allTasks}
          render={(task, index) => {
            return (
              <li key={task.id}>
                <Checkbox
                  key={task.task}
                  checkHandler={() => handleChangeCheckbox(index)}
                  done={task.done}
                  label={task.task}
                  index={index}
                />
              </li>
            );
          }}
        />
      }
      {/* AÑADIR NUEVA TAREA */}
      <NewTask item={item} handleChange={handleChange} handleSubmit={handleSubmit}/>

    </>
  );
}

export default App;
