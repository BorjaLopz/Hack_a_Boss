function ShowEnv() {
  return (
    <div>
      <h1>ENV VARIABLES</h1>
      <p>{process.env.REACT_APP_VariablePrueba}</p>
      {console.log(process.env.REACT_APP_VariablePrueba)}
    </div>
  );
}

export default ShowEnv;