import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button} from '@mui/material';

export default function UpdateNavButton({ clip }) {
    const history = useHistory();
    const dispatch = useDispatch();

const handleUpdate = () => {
    console.log('clip in button', clip)
    dispatch({ type: 'SET_UPDATE_CLIP', payload: clip })

    history.push('/update')
}
    return (

        <Button
            onClick={() => handleUpdate()}
            size="small"
            variant="contained"
            color="success"
            type="submit"
            sx={{color: "secondary.light"}}
        >
            Update
        </Button>
    )
}