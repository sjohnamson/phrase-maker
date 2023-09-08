import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
// material imports
import { Alert, Button, Chip, Autocomplete, TextField, Stack, Box } from '@mui/material';

export default function () {

    const [newProject, setNewProject] = useState('');
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        // PUT REQUEST to /api/video/:id
        axios.post(`/api/project`, {title: newProject})
            .then(response => {
                // refresh will happen with useEffect on Homepage
                history.push('/main'); // back to list
            })
            .catch(error => {
                <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">Project title already exists, please enter a new project title</Alert>
                </Stack>
                console.log('error on project PUT: ', error);
            })
    }

    return (
        <Box >
            <div className="form-group">
                <TextField
                    required
                    label="Project"
                    placeholder="project to join"
                    value={newProject}
                    onChange={(event) => setNewProject(event.target.value)}
                    variant='filled'
                />

                <Button
                    className="btn btn-primary"
                    type="submit"
                    onClick={onSubmit}
                >
                    Upload
                </Button>
            </div>
        </Box>
    )
}