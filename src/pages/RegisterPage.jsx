  return (
      <Container maxWidth="sm">
        <Box>
          <Card>
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="h5">회원가입</Typography>
                <TextField label="이름" variant="outlined"/>
                <TextField label="아이디" variant="outlined"/>
                <TextField label="비밀번호" variant="outlined" type="password"/>
                <Button variant="contained">가입하기</Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
  );