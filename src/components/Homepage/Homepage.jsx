import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
// material imports
import { Button, Chip, Autocomplete, TextField, Stack, Box, Typography } from '@mui/material';
import ClipCard from '../ClipCard/MainPageClipCard';

export default function Homepage() {
    const history = useHistory();
    const clips = useSelector(store => store.clips)

    const goToAddClip = () => {
        history.push('./addclip')
    }

    return (
        <>
{clips ? 
    <Box>
    <Typography>Looks like you're just starting here. Here are some directions.</Typography>
</Box>
 : 
            <Box className="clips" sx={{width: '95%', margin: 'auto'}}>
                <ClipCard xs={12} sm={6} md={4}/>
            </Box>
}
        </>

    )
}