import jwt_decode from "jwt-decode";
import useAuth from "../hooks/useAuth.js";
import useServer from "../hooks/useServer.js";

function Login() {
  // const { setUser } = useAuth();
  const { setUser } = useAuth();
  const { post, delete: destroy } = useServer();
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    const infoDelServer = post({ url: "/auth/login", body: formData });
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
