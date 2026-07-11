import {AppBar, Button, IconButton, Switch, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {useAccessTokenContext} from "../contexts/AccessTokenContext.jsx";
import {useDarkModeContext} from "../contexts/DarkModeContext.jsx";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const TopAppBar = () => {
  const {accessToken, setAccessToken} = useAccessTokenContext();
  const {isDarkMode, setIsDarkMode} = useDarkModeContext();

  const navigate = useNavigate();

  function handleLogoutButtonClick() {
    setAccessToken(null);

    navigate("/login");
  }

  function handleHomeButtonClick() {
    navigate("/");
  }

  function handleDarkModeButtonClick() {
    setIsDarkMode(() => !isDarkMode);
  }

  return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ marginRight: 2 }}
              onClick={handleHomeButtonClick}
          >
            <HomeIcon/>
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>여행계획도우미</Typography>
          <IconButton
              size="large"
              color="inherit"
              onClick={handleDarkModeButtonClick}
          >
            {isDarkMode ? <LightModeIcon/> : <DarkModeIcon/>}
          </IconButton>
          <Button color="inherit" onClick={handleLogoutButtonClick}>로그아웃</Button>
        </Toolbar>
      </AppBar>
  );
}