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
        sx={{ bgcolor: "info.light", p: 2, m: 2, width: "60%" }}
      >
        <Typography variant="h5" sx={{ pb: 2 }}>
          Register
        </Typography>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <Stack spacing={2}>
          <TextField
            id="filled-basic"
            label="Username"
            variant="filled"
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
            sx={{ width: "100%", bgcolor: "secondary.main", borderRadius: 2   }}
          />

          <TextField
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            sx={{ width: "100%", bgcolor: "secondary.main", borderRadius: 2  }}
          />

          <Button
            type="submit"
            onClick={registerUser}
            name="submit"
            variant="contained"
            color="success"
            sx={{ color: "secondary.light", borderRadius: 2  }}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default RegisterForm;
