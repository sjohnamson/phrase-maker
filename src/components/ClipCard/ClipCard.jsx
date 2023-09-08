import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import UpdateNavButton from '../UpdateNavButton/UpdateNavButton';
// import cloudinary from "cloudinary-video-player";
// import "cloudinary-video-player/dist/cld-video-player.min.css";
// Material UI imports
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


export default function ClipCard() {
    const dispatch = useDispatch();
    const clips = useSelector(store => store.clips)

    useEffect(() => {
        dispatch({ type: 'GET_CLIPS' })
    }, []);

    return (
        <section className="clips">
            <Grid container spacing={2}>
                {clips.map(clip => {
                return (
                    <Grid item key={clip.id} xs={12} sm={6} md={4} >

                        <Card sx={{ maxWidth: 600 }}>
                            <CardActionArea onClick={() => { }}>

                                <iframe id="clipPlayer"
                                    src={`https://player.cloudinary.com/embed/?cloud_name=dkabdionr&public_id=${clip.public_id}`}
                                    title={clip.title}
                                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                    frameBorder="0"
                                    />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {clip.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {clip.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>

                                <DeleteButton clip={clip} />
                                <UpdateNavButton clip={clip} />

                            </CardActions>
                        </Card>
                    </Grid>
                );
            })}
            </Grid>
        </section>
    )
}