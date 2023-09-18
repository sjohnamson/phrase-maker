import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Button, TextField, Box, Typography, Stack } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = () => {

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Box 
    onSubmit={login} 
    sx={{ bgcolor: 'info.light', p: 2, m: 2}}>
      <Typography variant='h5' sx={{ pb: 2 }}>Login</Typography>

      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
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
        </label>
      </div>
      <div>
        <Button 
        type="submit" 
        onClick={login} 
        name="submit" 
        variant='contained' 
        color='primary'>
          LogIn        
          </Button>
      </div>
    </Stack>
    </Box >
  );
}

export default LoginForm;
