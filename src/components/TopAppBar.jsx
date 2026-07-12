import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {useAccessTokenContext} from "../contexts/AccessTokenContext.jsx";
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';

export const TopAppBar = () => {
  const { setAccessToken } = useAccessTokenContext();

  const navigate = useNavigate();

  function handleLogoutButtonClick() {
    setAccessToken(null);

    navigate("/login");
  }

  function handleHomeButtonClick() {
    navigate("/");
  }

  function handleHistoryButtonClick() {
    navigate("/history");
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
              onClick={handleHistoryButtonClick}
          >
            <HistoryIcon/>
          </IconButton>
          <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleLogoutButtonClick}
          >
            <LogoutIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}