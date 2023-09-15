import AddVideoForm from '../AddVideoForm/AddVideoForm'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AddClipPhrasePage() {
    const history = useHistory();

    const navigate = (link) => {
        history.push(link)
      }

    return (
        <>
            <Button onClick={() => navigate('/addclip')}>ADD CLIP</Button>
            <Button onClick={() => navigate('/makephrase')}>CREATE PHRASE</Button>
        </>
    )
}