import { useState } from "react";

function UsersForm({ user, handleSubmit }) {
  const [currentUser, setCurrentUser] = useState(user);

  const formSubmit = (e) => {
    e.preventDefault();
    handleSubmit(currentUser);
  };

  const inputHandlerChange = ({ target }) => {
    const { name, value } = target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  return <form
        onSubmit={formSubmit}
        className="mb-5"
        style={{ maxWidth: "400px", textAlign: "center", margin: "0 auto" }}
      >
        <div>
          <label htmlFor="firstName" className="form-label">
            Nombre
          </label>{" "}
          {""}
          <input
            type="text"
            name="firstName"
            value={currentUser.firstName}
            onChange={inputHandlerChange}
            className="form-control"
          />{" "}
          {""}
        </div>

        <div>
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>{" "}
          {""}
          <input
            type="text"
            name="lastName"
            value={currentUser.lastName}
            onChange={inputHandlerChange}
            className="form-control"
          />{" "}
          {""}
        </div>

        <div>
          <label htmlFor="email">Email</label> {""}
          <input
            type="text"
            name="email"
            value={currentUser.email}
            onChange={inputHandlerChange}
            className="form-control"
          />{" "}
          {""}
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
}

export default UsersForm;
