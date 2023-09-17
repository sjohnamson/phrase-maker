import AddVideoForm from '../AddVideoForm/AddVideoForm'
import { Button, Typography, Box, Stack } from '@mui/material'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AddClipPhrasePage() {
    const history = useHistory();

    const navigate = (link) => {
        history.push(link)
    }

    return (
            <Stack spacing={5} sx={{m: 5}}>
                <Box sx={{padding: 5, bgcolor: 'info.main' }}>
            <Typography variant='h6' sx={{color: 'primary.light'}}>
                    ADD CLIP
                </Typography>
                <Typography sx={{color: 'primary.light'}}>
                    Upload your short video clips to share with your project!
                </Typography>
                <Button
                    onClick={() => navigate('/addclip')}
                    variant='contained'
                    color='primary'
                    sx={{mt: 2, color: 'info.main'}}
                >
                    ADD CLIP
                </Button>
            </Box>
            <Box sx={{padding: 5, bgcolor: 'primary.main'}}>
            <Typography variant='h6' sx={{color: 'info.main'}}>
                    CREATE PHRASE
                </Typography>
                <Typography sx={{color: 'info.main'}}>
                Click below to create a phrase by joining together video clips saved to your project!
            </Typography >
                <Button
                    onClick={() => navigate('/makephrase')}
                    variant='contained'
                    color='info'
                    sx={{mt: 2, color: 'secondary.light'}}
                >
                    CREATE PHRASE
                </Button>
            </Box>
            </Stack>
    )
}