import { toast } from "sonner";
import { useEffect, useState } from "react";
import useServer from "../hooks/useServer";

function Todos() {
  const [todos, setTodos] = useState([]);
  const { get, delete: detroy } = useServer();

  const getTodos = async () => {
    const { data } = await get({ url: "/todos/" });
    console.log(data);
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    const { data } = await detroy({ url: `/todos/${id}` });
    console.log(data);
    if (!data.deleted) return toast.error("El ToDo no pudo ser borrado");

    toast.success("El toDo fue borrado con exito");
    const filteredToDos = todos.filter((todo) => todo.id !== data.id);
    setTodos(filteredToDos);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content} <span onClick={() => deleteTodo(todo.id)}>❌</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
