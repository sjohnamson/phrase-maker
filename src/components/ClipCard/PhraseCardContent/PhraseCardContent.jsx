// Material UI imports
import { CardContent, Typography } from '@mui/material';

export default function PhraseCardContent({ phrase }) {

    return (
        <>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {phrase.title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {clip.description}
                </Typography> */}
            </CardContent>
        </>
    );
}