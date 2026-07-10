import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage.jsx";
import {ResultPage} from "./pages/ResultPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import {CssBaseline, GlobalStyles, ThemeProvider} from "@mui/material";
import {theme} from "./theme.js";

function App() {
  return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/result" element={<ResultPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </>
  );
}

export default App;