import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteButton from '../DeleteButton/DeleteButton';
import UpdateNavButton from '../UpdateNavButton/UpdateNavButton';
// Material UI imports
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function ClipCard() {
    const dispatch = useDispatch();
    const clips = useSelector(store => store.clips)

    useEffect(() => {
        dispatch({ type: 'GET_CLIPS' })
    }, []);

    return (
        <section className="clips">
            {clips.map(clip => {
                return (
                    <div key={clip.id} >

                        <Card sx={{ maxWidth: 270 }}>
                            <CardActionArea onClick={() => { }}>

                                <iframe id="clipIframe"
                                    src={`https://player.cloudinary.com/embed/?cloud_name=dkabdionr&public_id=${clip.public_id}`}
                                    title={clip.title}
                                    width='100%'
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
                                
                                <DeleteButton clip={clip}/>
                                <UpdateNavButton clip={clip}/>

                            </CardActions>
                        </Card>
                    </div>
                );
            })}
        </section>
    )
}