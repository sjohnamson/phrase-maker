import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField, Box, Typography, Stack } from '@mui/material';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = () => {

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <Box onSubmit={registerUser} sx={{ bgcolor: 'info.light', p: 2 }}>
      <Typography variant='h5' sx={{ pb: 2 }}>Register</Typography>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
       <Stack spacing={2}>
      <div>
       
          <label htmlFor="username">

            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
              sx={{ width: '100%', bgcolor: 'secondary.main' }}
            />
            {/* <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          /> */}
          </label>
      </div>
      <div>
        <label htmlFor="password">
          <TextField
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            sx={{ width: '100%', bgcolor: 'secondary.main' }}
          />
          {/* <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          /> */}

        </label>
      </div>
      <div>
        <Button type="submit" onClick={registerUser} name="submit" variant='contained' color='success'>
          Register
        </Button>
      
    </div>
    </Stack>
    </Box >
  );
}

export default RegisterForm;
