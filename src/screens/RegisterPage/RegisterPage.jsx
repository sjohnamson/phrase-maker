import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { Button, Typography} from '@mui/material';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <Typography variant='subtitle1' sx={{ m: 2 }}>
          Already a member?
        </Typography>
        <Button
        variant='contained'
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
