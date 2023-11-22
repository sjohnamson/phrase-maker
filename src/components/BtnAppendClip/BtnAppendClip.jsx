
import { useDispatch } from 'react-redux';
import { Button, Box } from '@mui/material';

export default function BtnModifyClip({ clip }) {
    const dispatch = useDispatch();

    const handleAddToPhrase = () => {
        dispatch({
            type: 'ADD_CLIP_TO_PHRASE',
            payload: { clip }
        })
        dispatch({
            type: 'SET_CURRENT',
            payload: clip
        })
        
    }

    return (
        <Box>
            <Button
                onClick={() => handleAddToPhrase(clip)}
                size="small"
                color="primary"
                variant="outlined"
                >
                Add clip to phrase
            </Button>


        </Box>

    )

}