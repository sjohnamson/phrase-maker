import AddVideoForm from '../AddVideoForm/AddVideoForm'
import { Button, Typography, Box } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AddClipPhrasePage() {
    const history = useHistory();

    const navigate = (link) => {
        history.push(link)
    }

    return (
        <>
            <Box sx={{padding: 5 }}>
                <Typography>
                    Upload your short video clips to share with your project!
                </Typography>
                <Button
                    onClick={() => navigate('/addclip')}
                    variant='contained'
                    color='primary'
                >
                    ADD CLIP
                </Button>
            </Box>
            <Box sx={{padding: 5 }}>
                <Typography>
                Click below to create a phrase by joining together video clips saved to your project!
            </Typography>
                <Button
                    onClick={() => navigate('/makephrase')}
                    variant='contained'
                    color='info'
                >
                    CREATE PHRASE
                </Button>
            </Box>
        </>
    )
}