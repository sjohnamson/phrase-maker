import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';



export default function DeleteButton({ clip }) {
    const dispatch = useDispatch();

    // deletes clip
    const handleDelete = () => {
        console.log('in handle delete', clip)
        dispatch({ type: 'DELETE_CLIP', payload: clip })
    }

    return (
        <Button
            onClick={() => handleDelete()}
            size="small"
            color="primary">
            Delete
        </Button>
    )
}