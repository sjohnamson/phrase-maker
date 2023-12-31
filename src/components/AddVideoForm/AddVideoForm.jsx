import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// material imports
import { Button, Typography, TextField, Stack, Box } from '@mui/material';

export default function AddVideoForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [newClipFile, setNewClipFile] = useState('');
  const [newClipTitle, setNewClipTitle] = useState('');
  const [newClipDescription, setNewClipDescription] = useState('');
  const [newClipTags, setNewClipTags] = useState([])


  const onSubmit = async () => {
    const newClip = {
      newClipTitle,
      newClipDescription,
      newClipFile,
      newClipTags,
    }
    dispatch({ type: 'ADD_CLIP', payload: newClip })
    history.push('/main')

  }

  return (
    <Box sx={{m: 4}}>
      <Typography variant='h5'>Add a clip to your project:</Typography>
      <div className="form-group">
        <Stack spacing={2} sx={{pt: 3}}>
      <TextField
          onChange={e => setNewClipFile(e.target.files[0])}
          type="file"
          accept="video/*"
          variant='filled'
        />
        <TextField
          required
          label="Title"
          placeholder="add a title for your clip"
          value={newClipTitle}
          onChange={(event) => setNewClipTitle(event.target.value)} 
          variant='filled'
          sx={{width: '100%'}}
          />
        <TextField
          required
          label="Description"
          placeholder='add a description or notes'
          value={newClipDescription}
          onChange={(event) => setNewClipDescription(event.target.value)}
          variant='filled'
          sx={{width: '100%'}}
        />
</Stack>
      </div>
      {/* <Stack spacing={3} sx={{ width: 300 }}>
        <Autocomplete
          multiple
          id="tags-filled"
          value={newClipTags}
          onChange={(event, newValue) => {
            setNewClipTags(newValue);
          }}
          options={[]}
          defaultValue={[]}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Tags"
              placeholder="add a new tag"
            />
          )}
        />
      </Stack> */}
      <div className="form-group">
        <Button
          className="btn btn-primary"
          type="submit"
          onClick={onSubmit}
          variant='outlined'
sx={{mt: 3}}
        >
          Add Clip
        </Button>
      </div>
    </Box>

  )

}