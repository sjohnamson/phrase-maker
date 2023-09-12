import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { CloudinaryVideo } from "@cloudinary/url-gen";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { concatenate } from "@cloudinary/url-gen/actions/videoEdit";
import { Concatenate } from "@cloudinary/url-gen/qualifiers/concatenate";
import { videoSource } from "@cloudinary/url-gen/qualifiers/concatenate";
import { Transformation } from "@cloudinary/url-gen/transformation/Transformation";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, TextField, Box } from '@mui/material';


export default function ModifyClipPage() {
    const currentClip = useSelector(store => store.currentClip)
    const dispatch = useDispatch();
    const history = useHistory();

    const processPhrase = useSelector(store => store.processPhrase)

    const [newPhraseFile, setNewPhraseFile] = useState('');
    const [newPhraseTitle, setNewPhraseTitle] = useState('');
    const [newPhraseDescription, setNewPhraseDescription] = useState('');
    const [newPhraseURL, setNewPhraseURL] = useState('');

    const [newPhraseClips, setNewPhraseClips] = useState([])
    const [newPhrase, setNewPhrase] = useState()

    useEffect(() => {
        dispatch({
            type: 'ADD_CLIP_TO_PHRASE',
            payload: { currentClip }
        })
    }, [])


    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dkabdionr'
        }
    });

    

    const handleModify = async () => {
       
        const myVideo = cld.video(processPhrase[0]);
    
        processPhrase.map((video) => {
            console.log('new phrase', video.currentClip.public_id)
        })

        myVideo
            .resize(fill().width(300).height(200))
            .videoEdit(
                concatenate(
                    processPhrase.splice(1).map((video) =>{
                    Concatenate.videoSource(video.currentClip.public_id).transformation(
                        new Transformation().resize(fill().width(300).height(200))
                        )}
                    )
                )
            )
            ;
        const phraseURL = myVideo.toURL();
        console.log('url:', phraseURL)

        setNewPhraseURL(phraseURL);

     




    }

    const savePhrase = () => {
        const phraseToAdd = {
            newPhraseTitle,
            newPhraseDescription,
            newPhrase,
        }
        console.log('phrase to add', phraseToAdd)

        dispatch({ type: 'ADD_PHRASE', payload: phraseToAdd })

    }


    return (
        <Box >
            <div className="form-group">
                <TextField
                    required
                    label="Title"
                    placeholder="add a title for your phrase"
                    value={newPhraseTitle}
                    onChange={(event) => setNewPhraseTitle(event.target.value)}
                    variant='filled'
                />
                <TextField
                    required
                    label="Description"
                    placeholder='add a description or notes'
                    value={newPhraseDescription}
                    onChange={(event) => setNewPhraseDescription(event.target.value)}
                    variant='filled'
                />

                <Button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => handleModify()}
                >
                    Add clip to phrase
                </Button>
                <Button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => savePhrase()}
                >
                    Save phrase
                </Button>

            </div>
        </Box>

    )
}