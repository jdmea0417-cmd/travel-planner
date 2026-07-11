import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {useAccessTokenContext} from "../contexts/AccessTokenContext.jsx";

export const TopAppBar = () => {
  const {accessToken, setAccessToken} = useAccessTokenContext();

  const navigate = useNavigate();

  function handleLogoutButtonClick() {
    setAccessToken(null);

    navigate("/login");
  }

  function handleHomeButtonClick() {
    navigate("/");
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
          <Button color="inherit" onClick={handleLogoutButtonClick}>로그아웃</Button>
        </Toolbar>
      </AppBar>
  );
}