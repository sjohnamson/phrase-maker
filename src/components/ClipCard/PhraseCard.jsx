import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhraseCardActions from './PhraseCardActions/PhraseCardActions';
import PhraseCardContent from './PhraseCardContent/PhraseCardContent';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

// Material UI imports
import { CardActionArea, Card} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


export default function PhraseCard({ xs, sm, md }) {
    const dispatch = useDispatch();
    const phrases = useSelector(store => store.phrases)
    console.log('phrases in card', phrases)

    useEffect(() => {
        dispatch({ type: 'GET_PHRASES' })
    }, []);

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dkabdionr'
        }
    });

    return (

        <Grid container spacing={2}>
            {phrases.map((phrase, index) => {
                const video = cld.video(phrase.public_id).resize(fill().width(400).height(250));
                return (<>
                    <Grid item key={index} xs={xs} sm={sm} md={md} >

                        <Card sx={{ width: '100%', }}>
                            <CardActionArea onClick={() => { }} sx={{}}>
                                <AdvancedVideo cldVid={video} controls />
                                <PhraseCardContent phrase={phrase} />
                            </CardActionArea>
                            <PhraseCardActions phrase={phrase} />
                        </Card>
                    </Grid>
                </>);
            }
            )}
        </Grid>

    )
}