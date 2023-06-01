import { useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);

  const values = {
    theme: theme,
    setTheme: setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
