import Login from "./components/Login";
import Toolbar from "./components/Toolbar";
import useAuth from "./hooks/useAuth";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated && <Toolbar />}
      {!isAuthenticated && <Login />}
    </>
  );
}

export default App;
