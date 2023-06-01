import { Toaster } from "sonner";
import Login from "./components/Login";
import Toolbar from "./components/Toolbar";
import useAuth from "./hooks/useAuth";
import Todos from "./components/Todos";

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Toaster />
      {isAuthenticated && <Toolbar />}
      {isAuthenticated && <Todos />}
      {!isAuthenticated && <Login />}
    </>
  );
}

export default App;
