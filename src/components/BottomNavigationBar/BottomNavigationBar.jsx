import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// material imports
import Paper from '@mui/material/Box';
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
    <Paper elevation={2} sx={{ width: '100%'}}>
      <BottomNavigation
        showLabels={true}
        sx={{height: 80, width: '100%', position: 'fixed', bottom: 0, backgroundColor: 'pink.light', zIndex: 2}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

        <BottomNavigationAction
          label="Clips"
          value={value}
          onClick={() => navigate('/home')}
          icon={<MovieCreationIcon color='info'/>}
        />
        <BottomNavigationAction
          label="Add/Create"
          value={value}
          onClick={() => navigate('/addclipphrase')}
          icon={<AddCircleOutlineIcon color='info'/>}
        />
        <BottomNavigationAction
          label="Phrases"
          value={value}
          onClick={() => navigate('/phrases')}
          icon={<TheatersIcon color='info'/>}
        />     

      </BottomNavigation>
    </Paper>
  );
}