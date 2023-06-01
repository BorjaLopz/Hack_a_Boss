import { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { localStorageKey } from "../config";

function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || {}
  );

  const logoutHandler = () => {
    localStorage.removeItem(localStorageKey);
    return setUser(null);
  };

  const setUserHandler = (newUser = {}) => {
    if (Object.keys(user).length === 0) {
      return;
    }

    const logUser = {
      ...user,
      ...newUser,
    };

    localStorage.setItem(localStorageKey, JSON.stringify(user));
    return setUser(user);
  };

  const authValues = {
    token: user.token,
    isAuthenticated: !!user.token,
    setUser: setUserHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={{ authValues }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// token = 'abcde' (truthy)
// !token = false
// !!token = true
