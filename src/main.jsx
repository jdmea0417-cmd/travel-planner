import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme.js";
import {AccessTokenContextProvider} from "./contexts/AccessTokenContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AccessTokenContextProvider>
          <App/>
        </AccessTokenContextProvider>
      </ThemeProvider>
    </StrictMode>,
)
