import { Stack, TextField, Button, Typography } from "@mui/material";

export default function Signup() {
  return (
    <Stack spacing={2} sx={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <Typography variant="h5">회원가입</Typography>
      <TextField label="이름" variant="outlined" />
      <TextField label="아이디" variant="outlined" />
      <TextField label="비밀번호" type="password" variant="outlined" />
      <Button variant="contained">가입하기</Button>
    </Stack>
  );
}