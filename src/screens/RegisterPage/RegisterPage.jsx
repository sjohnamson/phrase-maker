import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { Button, Typography, Box} from '@mui/material';

function RegisterPage() {
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
      <RegisterForm />
        <Typography variant='subtitle1' sx={{ m: 2 }}>
          Already a member?
        </Typography>
        <Button
        variant='text'
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
        </Box>
    </Box>
  );
}

export default RegisterPage;
