// Material UI imports
import { CardContent, Typography, Stack } from '@mui/material';

export default function MainPageCardContent({ clip }) {

    return (
        <>
            <CardContent sx={{}}>
                <Typography gutterBottom variant="h5" component="div">
                    {clip.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {clip.description}
                </Typography>
                <Stack direction="row" spacing={2}>
                <Typography variant="body1" color="text.secondary">
                    {clip.creator}
                </Typography>  
                <Typography variant="body1" color="text.secondary">
                    {clip.abstractconcreteobject}
                </Typography>               
                <Typography variant="body1" color="text.secondary">
                    {clip.upperlowerboth}
                </Typography>                
                <Typography variant="body1" color="text.secondary">
                    {clip.beats}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {clip.unison ? 'Unison' : 'Not Unison' }
                </Typography>
                </Stack>
            </CardContent>
        </>
    );
}