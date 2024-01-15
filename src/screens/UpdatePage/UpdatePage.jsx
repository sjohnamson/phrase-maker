import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

import { Box, Button, TextField} from '@mui/material';


export default function UpdatePage() {
    const updateClip = useSelector((store) => store.updateClip)
    const dispatch = useDispatch();
    const history = useHistory();
   
    useEffect(() => {
        dispatch({ type: 'GET_CLIPS' })
    }, []);

    // create an updatedClip object and dispatch it to a saga to put
    const handleTitleChange = (e) => {
        console.log('in handle change', updateClip)
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'title', value: e.target.value }
        });
    };
    const handleDescriptionChange = (e) => {
        console.log('in handle change', updateClip)
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'description', value: e.target.value }
        });
    };
    const handleTagChange = (e) => {
        console.log('in handle change', updateClip)
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { property: 'tag', value: e.target.value }
        });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        // PUT REQUEST to /api/video/:id
        axios.put(`/api/video/${updateClip.id}`, updateClip)
            .then(response => {
                // clean up reducer data            
                dispatch({ type: 'EDIT_CLEAR' });

                // refresh will happen with useEffect on Homepage
                history.push('/main'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            })

    }

    return (
            <Box>
                <h3>Update your clip information</h3>
                    <TextField
                        required
                        placeholder="Title"
                        value={updateClip.title}
                        onChange={(event) => handleTitleChange(event)} />
                    <TextField
                        required
                        placeholder="Description"
                        value={updateClip.description}
                        onChange={(event) => handleDescriptionChange(event)}
                    />
                    <Button
                        onClick={handleUpdate}
                        size="small"
                        color="success"
                        variant='outlined'
                        type="submit"
                    >
                        Update
                    </Button>
            </Box>

    );

}