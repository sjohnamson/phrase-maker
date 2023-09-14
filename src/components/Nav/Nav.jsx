import React from 'react';
import { Link } from 'react-router-dom';
import PhraseLogo from '../../images/PMLogo.png'
import ProjectDropdown from '../ProjectDropdown/ProjectDropdown';
import { Box, Stack } from '@mui/material';


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
          <img src={PhraseLogo} alt="Phrase Maker" style={{ height: 75, marginLeft: 11, marginTop: 3 }} />
        </Link>

        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
            <Link className="navLink" to="/about">
              About
            </Link>
          </>
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
