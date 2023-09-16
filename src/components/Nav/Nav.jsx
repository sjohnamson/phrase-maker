import React from 'react';
import PhraseLogo from '../../images/PMLogoNoSq.png'
import ProjectDropdown from '../ProjectDropdown/ProjectDropdown';
import { Box, Stack, Link } from '@mui/material';


import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (

    <Box sx={{ backgroundColor: 'pink.light' }} >
      <Stack 
      direction='row'
      spacing={{ xs: 8, sm: 7, md: 9 }}
      >

        <Link to="/home">
          <img src={PhraseLogo} alt="Phrase Maker" style={{ height: 75, marginLeft: 11, marginTop: 5 }} />
        </Link>

        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Box sx={{paddingTop: 3}}>
            {/* <Link color="inherit" to="/login">
              Login / Register
            </Link> */}
            <Link  to="/about" underline="none" color="info" >
              About
            </Link>
          </Box>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (

          <ProjectDropdown />

        )}
      </Stack>
    </Box>
  );
}

export default Nav;
