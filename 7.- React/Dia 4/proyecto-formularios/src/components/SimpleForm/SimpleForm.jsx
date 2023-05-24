import { useState } from "react";
function SimpleForm() {
  const [formState, setFormState] = useState({ username: "", email: "" });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Object.fromEntries)
  };

  return (
    <>
      <h1>Simple Form</h1>
      <form>
        <div>
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formState.username}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formState.email}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      <p>
        Valor del campo <em>username</em> en el estado es: {formState.username}
      </p>
      <p>
        Valor del campo <em>email</em> en el estado es: {formState.email}
      </p>
    </>
  );
}

export default SimpleForm;
