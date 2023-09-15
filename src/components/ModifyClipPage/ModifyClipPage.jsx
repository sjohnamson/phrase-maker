import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AdvancedVideo } from '@cloudinary/react';
import VideoPlayer from "../VideoPlayer/VideoPlayer";
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

    const processPhrase = useSelector(store => store.processPhrase)

    const [newPhraseTitle, setNewPhraseTitle] = useState('');
    const [newPhraseDescription, setNewPhraseDescription] = useState('');
    const [concatenatedPhrase, setConcatenatedPhrase] = useState()

    const [newPhrase, setNewPhrase] = useState()

    useEffect(() => {
        let clipsToAdd = processPhrase.splice(1);
        console.log('clips to add', clipsToAdd)
        let concatenatingPhrase = myVideo.resize(fill().width(400).height(250))
        for (let vid of clipsToAdd) {
            console.log('clip.clip.public_id', vid.clip.public_id)

            concatenatingPhrase = concatenatingPhrase.videoEdit(
                concatenate(
                    Concatenate.videoSource(vid.clip.public_id)
                        .transformation(new Transformation()
                            .resize(fill().width(400).height(250)
                            )
                        )
                )
            );
        }
        setConcatenatedPhrase(concatenatingPhrase)
    }, [])

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dkabdionr'
        }
    });

    const myVideo = cld.video(processPhrase[0].clip.public_id);

    const savePhrase = () => {
        const phraseURL = concatenatedPhrase.toURL();
        console.log('url:', phraseURL)
        const phraseToAdd = {
            newPhraseTitle,
            newPhraseDescription,
            phraseURL,
        }
        console.log('phrase to add', phraseToAdd)

        dispatch({ type: 'ADD_PHRASE', payload: phraseToAdd })

    }

    return (
        <Box >
            <div>
                {concatenatedPhrase &&
                    <AdvancedVideo cldVid={concatenatedPhrase} controls />
                }
            </div>
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
                    onClick={() => savePhrase()}
                >
                    Save phrase
                </Button>

            </div>
        </Box>

    )
}