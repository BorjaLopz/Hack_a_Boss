import { useState } from "react";
import UsersForm from "../UsersForm/UsersForm";

function Users() {
  const [users, setUsers] = useState([
    { firstName: "juan", lastName: "juan", email: "prueba@prueba.com" },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState({});

  const editButtonHandler = (index) => {
    const user = users[index];
    console.log(index);
    setIsEditing(true);
    setEditingUser(user);
  };

  const createUserHandler = (user) => {
    console.log(user);
    setUsers([...users, user])
  }

  const editUserHandler = (user) => {
    const userIndex = users.findIndex(usr => usr.email === user.email)  //Obtenemos el indice de dicho usuario
    users[userIndex] = user;
    setUsers([...users]);
  }

  const usr = isEditing ? editingUser : {firstName: "", lastName: "", email: ""};
  const method = isEditing ? editUserHandler : createUserHandler;

  return (
    <>
      <div className="container mt-5">
        {/* {isEditing ? <UsersForm user={editingUser} /> : <UsersForm />} */}
        {<UsersForm key={usr?.email} user={usr} handleSubmit={method}/>}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.email}>
                <th scope="row">{index + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => editButtonHandler({ index })}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
