import {
  Container,
  Box,
  Card,
  CardContent,
  Stack,
  TextField,
  Button,
  Typography,
} from "@mui/material";

export default function RegisterPage() {
  return (
      <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            height: "100vh",
            alignItems: "center"
          }}
      >
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Stack spacing={2}>
              <Typography variant="h5">
                회원가입
              </Typography>

              <TextField
                  label="이름"
                  variant="outlined"
              />

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
                가입하기
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
  );
}