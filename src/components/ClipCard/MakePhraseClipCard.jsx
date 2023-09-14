import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import MakePhraseCardActions from './MakePhraseCardActions/MakePhraseCardActions'
import MakePhraseCardContent from './MakePhraseCardContent/MakePhraseCardContent'
// Material UI imports
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { AdvancedVideo } from '@cloudinary/react';


export default function ClipCard({ xs, sm, md }) {
    const dispatch = useDispatch();
    const clips = useSelector(store => store.clips)

    useEffect(() => {
        dispatch({ type: 'GET_CLIPS' })
    }, []);

    return (
        <Grid container spacing={2}>
            {clips.map((clip, index) => {

                return (
                    <Grid item key={index} xs={xs} sm={sm} md={md} >

                        <Card sx={{ maxWidth: 600 }}>
                            <CardActionArea onClick={() => { }}>
                                <VideoPlayer public_id={clip.public_id} width={190} height={100}/>
                                <MakePhraseCardContent clip={clip} />
                            </CardActionArea>
                            <MakePhraseCardActions clip={clip} />
                        </Card>
                    </Grid>
                )
                }
            )}
        </Grid>
    )
}