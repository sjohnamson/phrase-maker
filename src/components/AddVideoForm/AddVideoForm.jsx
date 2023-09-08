import { useState } from 'react';
import { useDispatch } from 'react-redux';
// material imports
import { Button, Chip, Autocomplete, TextField, Stack, Box } from '@mui/material';

export default function AddVideoForm() {
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
    console.log('newclip in onsubmit:', newClip)
    dispatch({ type: 'ADD_CLIP', payload: newClip })
  }

  return (
    <Box >
      <div className="form-group">
        <TextField
          required
          label="Title"
          placeholder="add a title for your clip"
          value={newClipTitle}
          onChange={(event) => setNewClipTitle(event.target.value)} 
          variant='filled'
          />
        <TextField
          required
          label="Description"
          placeholder='add a description or notes'
          value={newClipDescription}
          onChange={(event) => setNewClipDescription(event.target.value)}
          variant='filled'
        />
        <TextField
          onChange={e => setNewClipFile(e.target.files[0])}
          type="file"
          accept="video/*"
          variant='filled'
        />
      </div>
      <Stack spacing={3} sx={{ width: 300 }}>
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
      </Stack>
      <div className="form-group">
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