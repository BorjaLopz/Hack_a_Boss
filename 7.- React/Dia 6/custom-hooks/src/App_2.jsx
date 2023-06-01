import { useEffect, useState } from "react";

import  "/node_modules/bootstrap/dist/css/bootstrap.css"

function App_2 () {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getChars = async () => {
      try {
        const resp = await fetch(
          'https://rickandmortyapi.com/api/character?page=1'
        );
        const data = await resp.json();
        const chars = data.results.map((c) => ({
          id: c.id,
          name: c.name,
          image: c.image,
        }))
        
        setCharacters(chars)
      } catch (e) {
        console.error(e.message);
      }
    }

    getChars()
  }, [])
  return (
    <>
      <h1 className="text-center p-5">Rick & Morty</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
          {characters.map((c) => (
            <div key={c.id} className="card p-0 g-4">
              <img src={c.image} alt={c.name}/>
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

export default App_2;