
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { CloudinaryVideo } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { VideoEdit } from "@cloudinary/url-gen/actions/videoEdit";
import { Concatenate } from "@cloudinary/url-gen/qualifiers/concatenate";
import { Transformation } from "@cloudinary/url-gen/transformation/Transformation";
import { Button, Box } from '@mui/material';
import MakePhraseClipCard from '../ClipCard/MakePhraseClipCard'


export default function MakePhrasePage() {
    const history = useHistory();

    const handleWatchPhrase = () => {
        history.push('/modifyclip')
    }

    return (
        <Box> <section className="clips">
            <MakePhraseClipCard xs={4} sm={3} md={2} />
        </section>

            <Button
                className="btn btn-primary"
                type="submit"
                onClick={handleWatchPhrase}
            >
                Watch phrase
            </Button>
        </Box>
    )
}