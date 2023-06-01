import { api_url } from "../config";

async function Http({ method = "GET", url, token, body }) {
  //Comprobamos si le pasamos una url valida
  if (!url.startsWith("/")) throw new Error("La url debe comenzar con '/' ");

  const fullURL = new URL(api_url + url); //Le pasamos la URL que ya tenemos asignada más la URL que le pasamos por parametro y el verbo HTTP correspondiente.

  console.log(fullURL);

  const config = {
    method,
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  };

  if (token) {
    // config.headers.Authorization = token; // -> Sin bearer
    config.headers.Authorization = `Bearer ${token}`; // -> Con Bearer
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(fullURL.href, config);
    if (!res.ok) throw res.error;
    const data = await res.json();

    return { data, loading: false, error: null };
  } catch (e) {
    return { data: null, loading: false, error: e };
  }
}

export default Http;
