import { useState } from 'react';
import { useDispatch } from 'react-redux';
// material imports
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function AddVideoForm() {
  const dispatch = useDispatch();
  const [newClipFile, setNewClipFile] = useState('');
  const [newClipTitle, setNewClipTitle] = useState('');
  const [newClipDescription, setNewClipDescription] = useState('');
  const [newClipTags, setNewClipTags] = useState([])


  const onSubmit = async (e) => {
    e.preventDefault();
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
    <form onSubmit={onSubmit}>
      <h3>React File Upload</h3>
      <div className="form-group">
        <input
          required
          placeholder="Title"
          value={newClipTitle}
          onChange={(event) => setNewClipTitle(event.target.value)} />
        <input
          required
          placeholder="Description"
          value={newClipDescription}
          onChange={(event) => setNewClipDescription(event.target.value)}
        />
        <input
          onChange={e => setNewClipFile(e.target.files[0])}
          type="file"
          accept="video/*"
        />
      </div>
      <Stack spacing={3} sx={{ width: 500 }}>
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
        <button className="btn btn-primary" type="submit">Upload</button>
      </div>
    </form>

  )

}