import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function AddVideoForm() {
  const [newClip, setNewClip] = useState('');
  const dispatch = useDispatch();
  // const [videoDescription, setVideoDescription] = useSelector('');

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_CLIP', payload: {
        newClip: newClip
      }
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>React File Upload</h3>
      <div className="form-group">
        <input
          onChange={e => setNewClip(e.target.files[0])}
          type="file"
          // accept="video/*"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">Upload</button>
      </div>
    </form>
  )

}