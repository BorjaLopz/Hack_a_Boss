import { Toaster, toast } from "sonner";

import jwt_decode from "jwt-decode";
import Http from "../services/Http";
import useAuth from "./useAuth";

function useServer() {
  const { token, setUser } = useAuth();

  const handleResponse = ({ data, loading, error }) => {
    console.log(data); //Solo tiene access token
    if (data?.accessToken) {
      const user = jwt_decode(data.accessToken);
      setUser({ user, token: data.accessToken });
    }

    if (error) {
      console.log(error);
    }

    return { data, loading, error };
  };
  return {
    get: ({ url }) => Http({ method: "GET", url, token }).then(handleResponse),
    post: ({ url, body }) =>
      Http({ method: "POST", url, body, token }).then(handleResponse),
    put: ({ url, body }) =>
      Http({ method: "PUT", url, body, token }).then(handleResponse),
    patch: ({ url, body }) =>
      Http({ method: "PATCH", url, body, token }).then(handleResponse),
    delete: ({ url }) =>
      Http({ method: "DELETE", url, token }).then(handleResponse),
  };
}

export default useServer;
