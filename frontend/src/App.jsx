import { Navigate, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { Toaster } from "react-hot-toast";
import { Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";

import SignUp from "./pages/SingUp/SignUp";
import { useAuthContext } from "./context/Autcontext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div className="p-4 justify-center items-center flex h-screen">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Homepage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
