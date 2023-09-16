import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// material imports
import { Button, Chip, Autocomplete, TextField, Stack, Box } from '@mui/material';
import PhraseCard from '../ClipCard/PhraseCard';


export default function PhrasePage() {
    const history = useHistory();

    const goToAddClip = () => {
        history.push('./addclip')
    }

    return (
        <>
            <Box className="clips" sx={{width: '95%', margin: 'auto'}}>
                <PhraseCard xs={12} sm={6} md={4}/>
            </Box>
        </>

    )
}