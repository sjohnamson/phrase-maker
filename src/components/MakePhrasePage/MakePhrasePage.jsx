
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

import { Button, Box, Typography } from '@mui/material';
import MakePhraseClipCard from '../ClipCard/MakePhraseClipCard'


export default function MakePhrasePage() {
    const history = useHistory();
    const addedClips = useSelector(store => store.processPhrase)

    const handleWatchPhrase = () => {
        history.push('/modifyclip')
    }

    return (
        <>
            <Box>
                <Typography>PHRASE</Typography>
                {addedClips.map((clip, index) => {
                    console.log('clip in make phrase', clip)
                    return (
                        <Typography key={index}> { clip.clip.title }</Typography>
                    )
                }
                )
                }
            </Box>
            <Button
                    className="btn btn-primary"
                    type="submit"
                    onClick={handleWatchPhrase}
                >
                    Watch phrase
                </Button>
            <Box className="clips" sx={{ width: '95%', margin: 'auto' }}>
                <MakePhraseClipCard xs={6} sm={6} md={6} />

            </Box>
        </>
    )
}