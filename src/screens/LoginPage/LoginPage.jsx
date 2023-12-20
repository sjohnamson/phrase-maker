import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button, Typography} from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
      <Typography variant='subtitle1' sx={{ m: 2 }}>
          Haven't created an account yet?
        </Typography>
        <Button
        variant='text'
        color='success'
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
