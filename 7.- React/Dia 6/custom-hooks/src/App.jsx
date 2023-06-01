import { useState } from "react";

import "/node_modules/bootstrap/dist/css/bootstrap.css";

import useGetCharacters from "./hooks/GetChars/useGetCharacters";
import useGetPages from "./hooks/GetPages/useGetPages";

function App() {
  const [pageNumber, setPageNumber] = useState(1); //Por defecto es la 1
  const characters = useGetCharacters({ url: `/character?page=${pageNumber}` });
  const maxPage = useGetPages(); //Obtenemos la pagina maxima de la API.

  const nextPageHandler = () => {
    if (pageNumber < maxPage) {
      setPageNumber(pageNumber + 1);
      // console.log(pageNumber)
    }
  };

  const previousPageHandler = () => {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const homePageHandler = () => {
    if (pageNumber !== 1)
      setPageNumber(1);
  };

  const endPageHandler = () => {
    if (pageNumber !== maxPage)
      setPageNumber(maxPage);
  };

  // Renderizamos los elementos del array del state del componente
  return (
    <>
      <h1 className="text-center p-5">Rick & Morty</h1>
      <div className="text-center">
        <button className="btn btn-primary" onClick={homePageHandler}>
          Inicio
        </button>{" "}
        <button className="btn btn-primary" onClick={previousPageHandler}>
          Anterior Página
        </button>{" "}
        {"página: " + pageNumber} {""}
        <button className="btn btn-primary" onClick={nextPageHandler}>
          Siguiente Página
        </button>{" "}
        {""}
        <button className="btn btn-primary" onClick={endPageHandler}>
          Final
        </button>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
          {characters.map((c) => (
            <div key={c.id} className="card p-0 g-4">
              <img src={c.image} alt={c.name} />
              <div className="card-body p-2">
                <h5 className="card-title text-center">{c.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
