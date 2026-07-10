import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage.jsx";
import {ResultPage} from "./pages/ResultPage.jsx";
import {CssBaseline} from "@mui/material";

function App() {
  return (
      <>
        <CssBaseline/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/result" element={<ResultPage/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App
