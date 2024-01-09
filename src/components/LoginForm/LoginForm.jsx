import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Button, TextField, Box, Typography, Stack } from "@mui/material";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = () => {
    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        component="form"
        onSubmit={login}
        sx={{ bgcolor: "info.light", pt: 10, pb: 15, m: 2, minWidth: "350px", borderRadius: 5}}
      >
 
        <Stack alignItems='center' spacing={2}>
        <Typography variant="h5" sx={{ pb: 2 }}>
          Login
        </Typography>

        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
          <TextField
            required
            id="outline-required"
            label="Username"
            type="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            id="outline-required"
            label="Password"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            onClick={login}
            name="submit"
            variant="contained"
            color="primary"
            sx={{ color: "secondary.light" }}
          >
            LogIn
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default LoginForm;
