import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import ThemeProvider from "./providers/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        {/* Englobamos con el proveedor lo que queremos que obtenga ciertos valores*/}
        <App />{" "}
        {/* Ahora es "hijo" de ThemeProviders, por tanto ya tiene acceso a themey a setTheme*/}
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
