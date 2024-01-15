import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Box, Typography, Stack } from "@mui/material";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = () => {
    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        onSubmit={registerUser}
        sx={{
          bgcolor: "info.light",
          pt: 10,
          pb: 15,
          m: 2,
          minWidth: "350px",
          borderRadius: 5,
        }}
      >
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h5" sx={{ pb: 2 }}>
            Register
          </Typography>
          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
          )}
          <TextField
            required
            id="outline-required"
            label="Username"
            type="username"
            name="username"
            color="success"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <TextField
            required
            id="outline-required"
            label="Password"
            type="password"
            name="password"
            color="success"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button
            type="submit"
            onClick={registerUser}
            name="submit"
            variant="contained"
            color="success"
            sx={{ color: "secondary.light" }}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default RegisterForm;
