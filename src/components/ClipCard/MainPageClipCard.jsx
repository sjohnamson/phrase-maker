import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import MainPageCardActions from './MainPageCardActions/MainPageCardAction';
import MainPageCardContent from './MainPageCardContent/MainPageCardContent';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

// Material UI imports
import { CardActionArea, Card} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


export default function ClipCard({ xs, sm, md }) {
    const dispatch = useDispatch();
    const clips = useSelector(store => store.clips)
    const user = useSelector(store => store.user)

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dkabdionr'
        }
    });

    return (

        <Grid container spacing={2}>
            {clips.map((clip, index) => {
                const video = cld.video(clip.public_id).resize(fill().width(400).height(250));
                return (<>
                    <Grid item key={index} xs={xs} sm={sm} md={md} >

                        <Card sx={{ width: '100%'}}>
                            <CardActionArea onClick={() => { }} sx={{}}>
                                <AdvancedVideo cldVid={video} controls />
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