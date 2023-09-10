import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

export default function ModifyClipPage() {
    const dispatch = useDispatch();

    // deletes clip
    const handleDelete = () => {
        console.log('in handle delete', clip)
        dispatch({ type: 'DELETE_CLIP', payload: clip })
    }

    return (
        <>
            <ChangeSpeed />
            <ReverseClip />
            <Button
                onClick={() => handleDelete()}
                size="small"
                color="primary">
                Attach to end of phrase
            </Button>
            <Button
                onClick={() => handleDelete()}
                size="small"
                color="primary">
                Attach to beginning of phrase
            </Button>
        </>
    )
}