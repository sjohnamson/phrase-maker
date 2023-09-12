
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Chip, Autocomplete, TextField, Stack, Box } from '@mui/material';

export default function BtnModifyClip({clip}) {
    const dispatch = useDispatch();
    const history = useHistory();

const handleModify = () => {
    dispatch({ type: 'SET_CURRENT', payload: clip })
    history.push('/modifyclip')
}

    return (

            <Button
                onClick={() => handleModify(clip)}
                size="small"
                color="primary">
                Add clip to phrase
            </Button>
          
    )

}