import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Box, Button, Typography, Modal, Stack, TextField, Autocomplete, Chip } from '@mui/material';

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
            variant='outlined'
            color="success"
            type="submit"
        >
            Update
        </Button>
    )
}