import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
// component imports
import ClipCard from '../ClipCard/MainPageClipCard';
// material imports
import {Box} from '@mui/material';


export default function Homepage() {
    const history = useHistory();
    const clips = useSelector(store => store.clips)

    return (
        // returns clipcards with clips from project library.
            <Box className="clips" sx={{ width: '95%', margin: 'auto' }}>
                <ClipCard xs={12} sm={6} md={4} />
            </Box>
    )
}