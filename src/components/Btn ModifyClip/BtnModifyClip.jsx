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

export default function BtnModifyClip() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [newPhraseFile, setNewPhraseFile] = useState('');
    const [newPhraseTitle, setNewPhraseTitle] = useState('');
    const [newPhraseDescription, setNewPhraseDescription] = useState('');
    const [newPhraseTags, setNewPhraseTags] = useState([])

    const [newPhraseClips, setNewPhraseClips] = useState([])
    const [newPhrase, setNewPhrase] = useState('')

    const handleModify = async (clip) => {
        console.log('clip in modify', clip)
       
        setNewPhraseClips([...newPhraseClips, clip.public_id])

        setNewPhrase(new CloudinaryVideo(newPhraseClips[0])
            .resize(fill().width(300).height(200))
            .videoEdit(
                concatenate(
                    newPhraseClips.slice(1).map((video) =>
                        videoSource(video).transformation(
                            new Transformation().resize(fill().width(300).height(200))
                        )
                    )
                )
            )
        );
    }

    const savePhrase = () => {
        axios.post('/api/phrase', newPhrase)
            .then(response => {
                console.log('phrase post worked')
            })
            .catch(err => {
                console.error('phrase post did not work', err)
            })
    }


    return(
    <Box >
    <div className="form-group">
        <TextField
            required
            label="Title"
            placeholder="add a title for your clip"
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
        <TextField
            onChange={e => setNewPhraseFile(e.target.files[0])}
            type="file"
            accept="video/*"
            variant='filled'
        />
    </div>
    <Stack spacing={3} sx={{ width: 300 }}>
        <Autocomplete
            multiple
            id="tags-filled"
            value={newPhraseTags}
            onChange={(event, newValue) => {
                setNewPhraseTags(newValue);
            }}
            options={[]}
            defaultValue={[]}
            freeSolo
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="filled"
                    label="Tags"
                    placeholder="add a new tag"
                />
            )}
        />
    </Stack>
    <div className="form-group">
        <Button
            className="btn btn-primary"
            type="submit"
            onClick={savePhrase}
        >
            Save phrase
        </Button>
    </div>
</Box>

    )
}