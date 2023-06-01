import { useEffect, useState } from "react";
import { API_URL } from "../../config.js";

function useGetCharacters({url}) {
  const [characters, setCharacters] = useState([]);

  // Hacemos un fetch a la API cuando se inicializa el componente
  useEffect(() => {
    const getChars = async () => {
      try {
        const resp = await fetch(`${API_URL}${url}`);
        const data = await resp.json();

        const chars = data.results.map((c) => ({
          id: c.id,
          name: c.name,
          image: c.image,
        }));

        setCharacters(chars);
      } catch (e) {
        console.error(e.message);
      }
    };

    getChars();
  }, [url]);

  return characters;
}

export default useGetCharacters;
