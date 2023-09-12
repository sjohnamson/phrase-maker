import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AdvancedVideo } from '@cloudinary/react';
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
    const [concatenatedPhrase, setConcatenatedPhrase] = useState()

    const [newPhraseClips, setNewPhraseClips] = useState([])
    const [newPhrase, setNewPhrase] = useState()

    useEffect(() => {
        console.log('current clip in effect', currentClip)
        dispatch({
            type: 'ADD_CLIP_TO_PHRASE',
            payload: { currentClip }
        })
    }, [currentClip])


    //   cloudinary.config({
    //     cloud_name: 'dkabdionr',
    //   })

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dkabdionr'
        }
    });



    //     processPhrase.map((clip) => {
    //         return  myVideo.resize(fill().width(400).height(250)).videoEdit(
    //             concatenate(Concatenate.videoSource(clip.currentClip.public_id).transformation(new Transformation().resize(fill().width(400).height(250)))));
    // });
    const myVideo = cld.video("DEV/cbtcvktirdg0p8vwsh0h");


    const handleModify = async () => {
        let concatenatingPhrase = myVideo.resize(fill().width(400).height(250))
        for (let clip of processPhrase) {
            console.log('clip.currentClip.public_id', clip.currentClip.public_id)

            concatenatingPhrase = concatenatingPhrase.videoEdit(
                concatenate(Concatenate.videoSource(clip.currentClip.public_id).transformation(new Transformation().resize(fill().width(400).height(250)))));
        }
        console.log('concat phrase', concatenatingPhrase)
        setConcatenatedPhrase(concatenatingPhrase)
    }
    //     cloudinary.video("kitten_fighting", {transformation: [
    //         {height: 200, width: 300, crop: "fill"},
    //         {flags: "splice", overlay: "video:dog"},
    //         {height: 200, width: 300, crop: "fill"},
    //         {flags: "layer_apply", start_offset: "0"}
    //         ]})


    //    let phraseURL = `https://res.cloudinary.com/demo/video/upload/c_fill,h_200,w_300/fl_splice,l_video:`+
    //     `${currentClip.public_id}`
    //     +`/c_fill,h_200,w_300/fl_layer_apply/${processPhrase[0].currentClip.public_id}.mp4`

    //     console.log('url???', phraseURL)




    // let myVideo = new cld.CloudinaryVideo(currentClip.public_id)
    // .resize(fill().width(300).height(200))
    // .videoEdit(
    //   concatenate(
    //     videoSource(processPhrase[0].currentClip.public_id).transformation(
    //       new Transformation().resize(fill().width(300).height(200))
    //     )
    //   )
    // );

    //         ;
    //     const phraseURL = myVideo.toURL();
    //     console.log('url:', phraseURL)

    //     setNewPhraseURL(phraseURL);


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
                    onClick={() => handleModify()}
                >
                    Add clip to phrase
                </Button>
                <Button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => savePhrase()}
                >
                    Watch phrase
                </Button>

            </div>
        </Box>

    )
}