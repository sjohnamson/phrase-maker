import { useState } from "react";
import axios from "axios";
import { CloudinaryVideo } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { concatenate } from "@cloudinary/url-gen/actions/videoEdit";
import { videoSource } from "@cloudinary/url-gen/qualifiers/concatenate";
import { Transformation } from "@cloudinary/url-gen/transformation/Transformation";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Chip, Autocomplete, TextField, Stack, Box } from '@mui/material';


export default function ModifyClipPage({ clip }) {
    const dispatch = useDispatch();
    const history = useHistory();

const handleModify = () => {
    dispatch({ type: 'SET_CURRENT', payload: clip })
    history.push('/modifyclip')
}

    return (

            <Button
                onClick={() => handleModify(clip)}
                size="small"
                color="primary">
                Add clip to phrase
            </Button>
          
    )
}