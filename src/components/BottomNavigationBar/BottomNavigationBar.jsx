import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ProjectDropdown from '../ProjectDropdown/ProjectDropdown';

// material imports
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TheatersIcon from '@mui/icons-material/Theaters';

export default function BottomNavigationBar() {
  const [value, setValue] = useState(0);
  const history = useHistory();

  const navigate = (link) => {
    history.push(link)
  }
  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels={true}
        sx={{ width: '100%', position: 'fixed', bottom: 0, backgroundColor: '#eae4d9'}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          value={value}
          onClick={() => navigate('/main')}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Clips"
          value={value}
          onClick={() => navigate('/main')}
          icon={<MovieCreationIcon />}
        />
        <BottomNavigationAction
          label="Add"
          value={value}
          // onClick={}
          icon={<AddCircleOutlineIcon />}
        />
        <BottomNavigationAction
          label="Phrases"
          value={value}
          onClick={() => navigate('/phrases')}
          icon={<TheatersIcon />}
        />
        <BottomNavigationAction
          label="Projects"
          value={value}
          icon={<ProjectDropdown />}
        />

      </BottomNavigation>
    </Box>
  );
}