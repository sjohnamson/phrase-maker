import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import {
  Box,
  Button,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

export default function UpdatePage() {
  const updateClip = useSelector((store) => store.updateClip);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "GET_CLIPS" });
  }, []);

  // create an updatedClip object and dispatch it to a saga to put
  const handleTitleChange = (e) => {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: { property: "title", value: e.target.value },
    });
  };

  const handleDescriptionChange = (e) => {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: { property: "description", value: e.target.value },
    });
  };


  const handleCreatorChange = (e) => {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: { property: "creator", value: e.target.value },
    });
  };

  const handleAbstractConcreteObjectChange = (e) => {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: { property: "abstractconcreteobject", value: e.target.value },
    });
  };
  const handleUpperLowerBothChange = (e) => {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: { property: "upperlowerboth", value: e.target.value },
    });
  };
  const handleBeatsChange = (e) => {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: { property: "beats", value: e.target.value },
    });
  };
  const handleUnisonChange = (e) => {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: { property: "unison", value: e.target.value },
    });
  };

  const handleTagChange = (e) => {
    dispatch({
      type: "EDIT_ONCHANGE",
      payload: { property: "tag", value: e.target.value },
    });
  };

  const handleUpdate = (e) => {
    console.log('update clip being sent', updateClip)
    e.preventDefault();
    // PUT REQUEST to /api/video/:id
    axios
      .put(`/api/video/${updateClip.id}`, updateClip)
      .then((response) => {
        // clean up reducer data
        dispatch({ type: "EDIT_CLEAR" });

        // refresh will happen with useEffect on Homepage
        history.push("/main"); // back to list
      })
      .catch((error) => {
        console.log("error on PUT: ", error);
      });
  };

  return (
    <Box>
      <h3>Update your clip information</h3>
      <FormControl>
        <TextField
          required
          placeholder="Title"
          value={updateClip.title}
          onChange={(event) => handleTitleChange(event)}
        />
        <TextField
          required
          placeholder="Description"
          value={updateClip.description}
          onChange={(event) => handleDescriptionChange(event)}
        />
        <FormLabel id="demo-row-radio-buttons-group-label">Creator</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={updateClip.creator}
          onChange={(event) => handleCreatorChange(event)}
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
          value={updateClip.abstractconcreteobject}
          onChange={(event) => handleAbstractConcreteObjectChange(event)}
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
          <FormControlLabel value="Object" control={<Radio />} label="Object" />
        </RadioGroup>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Upper/Lower/Both
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={updateClip.upperlowerboth}
          onChange={(event) => handleUpperLowerBothChange(event)}
        >
          <FormControlLabel value="Upper" control={<Radio />} label="Upper" />
          <FormControlLabel value="Lower" control={<Radio />} label="Lower" />
          <FormControlLabel value="Both" control={<Radio />} label="Both" />
        </RadioGroup>
        <FormLabel id="demo-row-radio-buttons-group-label">Beats</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={updateClip.beats}
          onChange={(event) => handleBeatsChange(event)}
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

        <FormLabel id="demo-row-radio-buttons-group-label">Unison</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={updateClip.unison}
          onChange={(event) => handleUnisonChange(event)}
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />

          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <Button
        onClick={handleUpdate}
        size="small"
        color="success"
        variant="outlined"
        type="submit"
      >
        Update
      </Button>
    </Box>
  );
}
