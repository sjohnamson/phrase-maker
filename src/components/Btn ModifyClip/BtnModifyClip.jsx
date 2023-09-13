
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Chip, Autocomplete, TextField, Stack, Box } from '@mui/material';

export default function BtnModifyClip({ clip }) {
    const dispatch = useDispatch();
    const history = useHistory();

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
                color="primary">
                Add clip to phrase
            </Button>


        </Box>

    )

}