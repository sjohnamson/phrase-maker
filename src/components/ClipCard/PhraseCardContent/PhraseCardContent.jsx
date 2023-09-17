// Material UI imports
import { CardContent, Typography } from '@mui/material';

export default function PhraseCardContent({ phrase }) {

    return (
       
            <CardContent sx={{bgcolor: 'info.main'}}>
                <Typography gutterBottom variant="h5"  color='secondary.light'>
                    {phrase.title}
                </Typography>
                <Typography variant="body2" color="secondary.light">
                    {phrase.description}
                </Typography>
            </CardContent>
        
    );
}