
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Button, Box, Typography, Chip } from '@mui/material';
import MakePhraseClipCard from '../../components/ClipCard/MakePhraseClipCard'


export default function MakePhrasePage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const addedClips = useSelector(store => store.processPhrase)

    const handleWatchPhrase = () => {
        history.push('/modifyclip')
    }

    const handleDelete = (clip) => {
        console.info('You clicked the delete icon.', clip);
        dispatch({type: 'REMOVE_CLIP', payload: clip})
        
      };

    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'info.main',
                    padding: 2,
                    margin: 3,
                    borderWidth: 1,
                    borderColor: 'info.main',
                    borderStyle: 'solid',

                }}
            >
                <Typography variant='h6' color='primary.main'>NEW PHRASE</Typography>
                <Typography variant='subtitle1' color='primary.main'>Add clips to create a new phrase</Typography>
                <Box sx={{borderColor: 'pink.main', borderStyle: 'solid', borderWidth: 1, p: 1, mt: 1}}>
                {addedClips?.map((clip, index) => {
                    // console.log('clip in make phrase', clip)
                    return (
                        <Chip
                            label={clip.clip.title}
                            color="secondary"
                            size="small"
                            onDelete={() => handleDelete(clip) }
                            key={index}
                        />
                    )
                })
                }
                </Box>
                <Button
                className="btn btn-primary"
                type="submit"
                onClick={handleWatchPhrase}
                variant='outlined'
                sx={{mt: 2, ml: 9}}
            >
                Watch phrase
            </Button>
            </Box>
            <Box className="clips" sx={{ width: '95%', margin: 'auto' }}>
                <MakePhraseClipCard xs={6} sm={6} md={6} />
            </Box>
        </>
    )
}