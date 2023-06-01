import { useContext, useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

import ThemedButton from "./ThemedButton";

function Toolbar() {
  //theme === false -> Light
  //theme === true -> Dark

  const { theme } = useContext(ThemeContext);

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
      </div>
    </>
  );
}

export default Toolbar;
