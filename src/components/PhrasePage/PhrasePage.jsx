import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
// material imports
import { Typography, Divider, Box } from '@mui/material';
import PhraseCard from '../ClipCard/PhraseCard';


export default function PhrasePage() {
    const history = useHistory();
    const phrases = useSelector(store => store.phrases)

    const goToAddClip = () => {
        history.push('./addclip')
    }

    return (
        // if there are phrases
        // phrases[0] ?
            // returns cards of the phrases
            <Box sx={{ width: '95%', margin: 'auto' }}>
                <PhraseCard xs={12} sm={6} md={4} />
            </Box>
            // :
            // // otherwise returns a message that there are no phrases
            // <Box sx={{ bgcolor: 'pink.main', mt: 10, m: 5, p: 5 }}>
            //     <Typography variant='h6' sx={{ color: 'info.main' }}>No phrases in your project library. <Divider sx={{m: 1}}/> Click Add/Create below to create a phrase.</Typography>
            // </Box>


    )
}