import { useEffect, useState } from "react";

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function BasicForm() {
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const emailHandler = (e) => {
    // mailFormat.test(e.target.value) ? setEmailValidation("") : setEmailValidation("Email no valido");
    setEmail(e.target.value);
  };

  const blurEmailHandler = (e) => {
    mailFormat.test(e.target.value)
      ? setEmailValidation("")
      : setEmailValidation("Email no valido");
  };

  useEffect(() => {
    if (mailFormat.test(email)) {
      console.log(email);
    }

    fetch("/", {
      method: "POST",
      "Content-type": "application/json",
      body: JSON.stringify(email),
    }).then().catch();
  }, [email]);

  return (
    <>
      <h1>Hola mundo</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={emailHandler}
          onBlur={blurEmailHandler}
          placeholder="hola@example.com"
        />{" "}
        {""}
        <button type="submit">Registrate en el newsletter</button>
        {emailValidation && <p style={{ color: "red" }}>{emailValidation}</p>}
      </form>
    </>
  );
}

export default BasicForm;
