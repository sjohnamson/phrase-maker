import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// material imports
import {
  Button,
  Typography,
  TextField,
  Stack,
  Box,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

export default function AddVideoForm() {
  const user = useSelector((store) => store.user);
  console.log("user", user);

  const history = useHistory();
  const dispatch = useDispatch();
  const [newFiles, setNewFiles] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCreator, setNewCreator] = useState(user.username);
  const [newBeats, setNewBeats] = useState(1);
  const [newULB, setNewULB] = useState("Upper");
  const [newAbstract, setNewAbstract] = useState("Abstract");
  const [newUnison, setNewUnison] = useState(false);

  const onSubmit = () => {
    console.log("newfiles:", newFiles)
    const filesArray = [...newFiles];
    console.log(filesArray)
    filesArray.forEach((file) => {
      const newClip = {
      newTitle,
      newDescription,
      newFile: file,
      newCreator,
      newBeats,
      newULB,
      newAbstract,
      newUnison,
    };
    console.log('newFile', newClip.newFile)
    dispatch({ type: "ADD_CLIP", payload: newClip });
    })
  history.push("/main");
  };

  return (
    <Box
      sx={{
        m: 4,
        width: {
          xs: "90%",
          sm: "90%",
          md: "60%",
        },
        margin: "0 auto",
      }}
    >
      <Typography variant="h5">Add a clip to your project:</Typography>
      <div className="form-group">
        <Stack spacing={1} sx={{ pt: 3 }}>
          <FormControl>
            <TextField
              onChange={(e) => setNewFiles(e.target.files)}
              type="file"
              accept="video/*"
              variant="filled"
              InputProps={{
                inputProps: {
                  multiple: true, // Allow multiple files
                },
              }}
            />
            <TextField
              label="Title"
              placeholder="add a title for your clip"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
              variant="filled"
              sx={{ width: "100%" }}
            />
            <TextField
              label="Description"
              placeholder="add a description or notes"
              value={newDescription}
              onChange={(event) => setNewDescription(event.target.value)}
              variant="filled"
              sx={{ width: "100%" }}
            />

            <FormLabel id="demo-row-radio-buttons-group-label">
              Creator
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={newCreator}
              onChange={(event) => setNewCreator(event.target.value)}
            >
              <FormControlLabel value="Erin" control={<Radio />} label="Erin" />
              <FormControlLabel
                value="Jeffrey"
                control={<Radio />}
                label="Jeffrey"
              />
              <FormControlLabel value="Sam" control={<Radio />} label="Sam" />
            </RadioGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Abstract/Concrete/Object
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={newAbstract}
              onChange={(event) => setNewAbstract(event.target.value)}
            >
              <FormControlLabel
                value="Abstract"
                control={<Radio />}
                label="Abstract"
              />
              <FormControlLabel
                value="Concrete"
                control={<Radio />}
                label="Concrete"
              />
              <FormControlLabel
                value="Object"
                control={<Radio />}
                label="Object"
              />
            </RadioGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Upper/Lower/Both
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={newULB}
              onChange={(event) => setNewULB(event.target.value)}
            >
              <FormControlLabel
                value="Upper"
                control={<Radio />}
                label="Upper"
              />
              <FormControlLabel
                value="Lower"
                control={<Radio />}
                label="Lower"
              />
              <FormControlLabel value="Both" control={<Radio />} label="Both" />
            </RadioGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">Beats</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={newBeats}
              onChange={(event) => setNewBeats(event.target.value)}
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
              <FormControlLabel value="6" control={<Radio />} label="6" />
              <FormControlLabel value="7" control={<Radio />} label="7" />
              <FormControlLabel value="8" control={<Radio />} label="8" />
            </RadioGroup>

            <FormLabel id="demo-row-radio-buttons-group-label">
              Unison
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={newUnison}
              onChange={(event) => setNewUnison(event.target.value)}
            >
              <FormControlLabel value={true} control={<Radio />} label="Yes" />

              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </div>
      <div className="form-group">
        <Button
          className="btn btn-primary"
          type="submit"
          onClick={onSubmit}
          variant="outlined"
          sx={{ mt: 3 }}
        >
          Add Clip
        </Button>
      </div>
    </Box>
  );
}
