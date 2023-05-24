//No es obligatorio que tenga extension jsx pero si es recomendable

import { useState } from "react";

function ToDoComponent() {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]); //Devuelve un un array de dos objetos. Dentro de useState([]) podemos pasarle el estado inicial, en este caso será un estado inicial vacio, por tanto un array vacio

  //todoList -> Es la variable que va a contener el estado, que va a tener la informacion

  //setTodoList -> Funcion. Esta funcion me permitirá cambiar el valor de dicha variable. Nos permite añadir o quitar propiedades

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const items = [item, ...todoList];
    setTodoList(items)
    setItem("")

    // setTodoList({ item: "" });

    // console.log(item);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="todoitem"
          value={item}
          onChange={handleChange}
          placeholder="¿Qué tarea vas a realizar?"
        />

        <button type="submit">Agregar tarea</button>
      </form>

      <ul>
        {todoList && todoList.map((todo, index) => (
          <li key={`${index} ${todo}`}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoComponent;
