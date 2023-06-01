import { useEffect, useState } from "react";
import { API_URL } from "../../config.js";

function useGetPages() {
  const [pages, setPages] = useState([]);

  // Hacemos un fetch a la API cuando se inicializa el componente
  useEffect(() => {
    const getChars = async () => {
      try {
        const resp = await fetch(`${API_URL}/character`);
        const data = await resp.json();
        const pages = data.info.pages;
        setPages(pages);
      } catch (e) {
        console.error(e.message);
      }
    };

    getChars();
  }, []);

  return pages;
}

export default useGetPages;
