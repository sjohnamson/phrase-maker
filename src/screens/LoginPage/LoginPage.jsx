import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

function LoginPage() {
  const history = useHistory();

  return (
    <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <LoginForm />
      <Typography variant="subtitle1" sx={{ m: 2 }}>
        Haven't created an account yet?
      </Typography>
      <Button
        variant="text"
        color="success"
        onClick={() => {
          history.push("/registration");
        }}
      >
        Register
      </Button>
    </Box>
    </Box>
  );
}

export default LoginPage;
