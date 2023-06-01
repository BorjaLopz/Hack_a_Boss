const API_URL =
  import.meta.env.VITE_API_URL || "https://rickandmortyapi.com/api"; //Si lo obtiene en el .env, genial. Si no, le pasamos una url por defecto

export { API_URL };
