import { useContext, useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import ThemedButton from "./ThemedButton";
import useAuth from "../hooks/useAuth";

function Toolbar() {
  //theme === false -> Light
  //theme === true -> Dark

  const { theme } = useContext(ThemeContext);
  const { logout } = useAuth();

  // useEffect(() => {
  //   // document.body.classList.toggle
  // }, [theme]);

  return (
    <>
      <div
        style={
          theme
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        <ThemedButton />

        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

export default Toolbar;
