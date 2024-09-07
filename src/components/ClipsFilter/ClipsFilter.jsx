import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { Typography, FormControlLabel, FormGroup, Switch } from "@mui/material";


export default function ClipsFilter() {
  const dispatch = useDispatch();

  const [clipsFilter, setClipsFilter] = useState({
    sam: true,
    erin: true,
    jeffrey: true,
});

useEffect (() => {
  console.log('clipsFilter', clipsFilter)
  dispatch({ type: 'SET_CLIPS_FILTER', payload: clipsFilter });
})

const handleFilterChange = (event) => {
    setClipsFilter({
        ...clipsFilter,
        [event.target.name]: event.target.checked,
    });
    dispatch({ type: 'SET_CLIPS_FILTER', payload: clipsFilter });
};

return (
  <>
    <Typography align="center" variant="h6" sx={{ p: 2 }}>
      Creator Filter
    </Typography>
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={clipsFilter.sam}
            onChange={handleFilterChange}
            name="sam"
          />
        }
        label={<Typography variant="body2">Sam</Typography>}
      />
      <FormControlLabel
        control={
          <Switch
            checked={clipsFilter.erin}
            onChange={handleFilterChange}
            name="erin"
          />
        }
        label={<Typography variant="body2">Erin</Typography>}
      />
      <FormControlLabel
        control={
          <Switch
            checked={clipsFilter.jeffrey}
            onChange={handleFilterChange}
            name="jeffrey"
          />
        }
        label={<Typography variant="body2">Jeffrey</Typography>}
      />
    </FormGroup>
  </>
);
}