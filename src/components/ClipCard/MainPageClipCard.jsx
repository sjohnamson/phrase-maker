import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import MainPageCardActions from './MainPageCardActions/MainPageCardAction';
import MainPageCardContent from './MainPageCardContent/MainPageCardContent';
// Material UI imports
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


export default function ClipCard({xs, sm, md}) {
    const dispatch = useDispatch();
    const clips = useSelector(store => store.clips)

    useEffect(() => {
        dispatch({ type: 'GET_CLIPS' })
    }, []);

    return (

            <Grid container spacing={2}>
                {clips.map((clip, index) => {

                    return (<>
                        <Grid item key={index} xs={xs} sm={sm} md={md} >

                            <Card  sx={{ width: '100%', }}>
                                <CardActionArea onClick={() => { }} sx={{}}>
                                    <VideoPlayer public_id={clip.public_id}  width={400} height={300}/>
                                    <MainPageCardContent clip={clip} />
                                </CardActionArea>
                                <MainPageCardActions clip={clip} />
                            </Card>
                        </Grid>
                    </>);
                }
                )}
            </Grid>

    )
}