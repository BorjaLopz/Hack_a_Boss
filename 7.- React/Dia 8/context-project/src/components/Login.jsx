import useAuth from "../hooks/useAuth";

function Login() {
  const { setUser } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Formulario de Login</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>

        {/* <div>
          <label htmlFor="nickname">Nickname</label>
          <input type="text" name="nickname" id="nickname" />
        </div> */}

        <div>
          <label htmlFor="password">Contraseña</label>
          <input type="text" name="password" id="password" />{" "}
          {/* Cambiar el type="text" a type="password"*/}
        </div>

        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Login;
