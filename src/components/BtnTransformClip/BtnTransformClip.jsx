
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Chip, Autocomplete, TextField, Stack, Box } from '@mui/material';

export default function BtnTransformClip({ clip }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const transformClip = () => {
        dispatch({
            type: 'TRANSFORM_CLIP',
            payload: clip
        })
        dispatch({
            type: 'SET_CURRENT',
            payload: clip
        })
        
    }

    return (
        <Box>
            <Button
                onClick={() => transformClip(clip)}
                size="small"
                color="primary"
                variant="outlined"
                >
                Edit Clip
            </Button>


        </Box>

    )

}