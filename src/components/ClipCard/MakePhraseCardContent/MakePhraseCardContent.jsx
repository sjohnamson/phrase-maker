// Material UI imports
import { CardContent, Typography } from '@mui/material';

export default function MainPageCardContent({ clip }) {

    return (
        <>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {clip.title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    {clip.description}
                </Typography> */}
            </CardContent>
        </>
    );
}