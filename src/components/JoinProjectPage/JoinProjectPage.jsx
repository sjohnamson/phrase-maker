import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
// material imports
import { Button, Chip, Autocomplete, TextField, Stack, Box } from '@mui/material';

export default function JoinProjectPage() {
    const [joinProject, setJoinProject] = useState('');
    const history = useHistory();
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('join project', joinProject)
        // PUT REQUEST to /api/project/:id to update current project
        axios.put(`/api/project/${joinProject}`)
            .then(response => {

                // refresh will happen with useEffect on Homepage
                history.push('/main'); // back to list
            })
            .catch(error => {
                console.log('error on PUT: ', error);
            })
    }

    return (
        <Box >
        <div className="form-group">
          <TextField
            required
            label="Project"
            placeholder="project to join"
            value={joinProject}
            onChange={(event) => setJoinProject(event.target.value)} 
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