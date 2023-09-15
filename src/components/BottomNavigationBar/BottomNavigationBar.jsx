import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// material imports
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TheatersIcon from '@mui/icons-material/Theaters';

export default function BottomNavigationBar() {
  const [value, setValue] = useState(0);
  const history = useHistory();

  // navigate for the clips and phrases buttons
  const navigate = (link) => {
    history.push(link)
  }

  return (
    <Box sx={{ width: '100%'}}>
      <BottomNavigation
        showLabels={true}
        sx={{height: 80, width: '100%', position: 'fixed', bottom: 0, backgroundColor: 'pink.light', zIndex: 2,}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        <BottomNavigationAction
          label="Clips"
          value={value}
          onClick={() => navigate('/main')}
          icon={<MovieCreationIcon />}
        />
        <BottomNavigationAction
          label="Add"
          value={value}
          onClick={() => navigate('/addclipphrase')}
          icon={<AddCircleOutlineIcon />}
        />
        <BottomNavigationAction
          label="Phrases"
          value={value}
          onClick={() => navigate('/phrases')}
          icon={<TheatersIcon />}
        />     

      </BottomNavigation>
    </Box>
  );
}