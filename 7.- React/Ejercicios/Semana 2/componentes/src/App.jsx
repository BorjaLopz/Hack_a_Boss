import "./index.css";
import users from "./users.json";
import Cards from "./views/Cards";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <h1>Usuarios</h1>
        </header>
        <main>
          <Cards users={users} />
        </main>

        <footer>
          <p>Borja López Díaz @2023</p>
        </footer>
      </div>
    </>
  );
}

//h1
/* className="mb-3 text-center text-3xl font-bold p-3" */

//main
/*className="flex place-content-center" */

//p
/* className="text-center text-xs font-light p-3" */
export default App;
