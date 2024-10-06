import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login_Page";
import SignUp from "./pages/SignUp/SignUp_Page";

function App() {
  return (
    // <>
    //   <SignUp />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Login />
    </BrowserRouter>
  );
}

export default App;
