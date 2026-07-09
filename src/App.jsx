import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {MainPage} from "./pages/MainPage.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
