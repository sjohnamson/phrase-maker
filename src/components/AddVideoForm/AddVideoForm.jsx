import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AddVideoForm() {
  const [newClipFile, setNewClipFile] = useState('');
  const [newClipTitle, setNewClipTitle] = useState('');
  const [newClipDescription, setNewClipDescription] = useState('');
  const dispatch = useDispatch();
  // const [videoDescription, setVideoDescription] = useSelector('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const newClip = {
      newClipTitle,
      newClipDescription,
      newClipFile,
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
      <div className="form-group">
        <button className="btn btn-primary" type="submit">Upload</button>
      </div>
    </form>
  )

}