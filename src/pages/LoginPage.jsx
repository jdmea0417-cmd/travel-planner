import {
  Stack,
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
} from "@mui/material";

export default function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h5">
                로그인
              </Typography>

              <TextField
                label="아이디"
                variant="outlined"
              />

              <TextField
                label="비밀번호"
                type="password"
                variant="outlined"
              />

              <Button variant="contained">
                로그인 하기
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}