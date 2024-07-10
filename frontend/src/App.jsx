import { Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { Toaster } from "react-hot-toast";
import { Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";

import SignUp from "./pages/SingUp/SignUp";

function App() {
  return (
    <>
      <div className="p-4 justify-center items-center flex h-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
