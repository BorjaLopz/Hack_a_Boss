import useTheme from "../hooks/useTheme";

function Button() {
  const { theme, setTheme } = useTheme();
  const buttonClickHandler = () => {
    setTheme(!theme);
  };

  return (
    <>
      <button onClick={buttonClickHandler}>{theme ? "😎" : "🌑"}</button>
    </>
  );
}

export default Button;
