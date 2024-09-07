import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Typography, FormControl, FormControlLabel, FormGroup, Switch } from "@mui/material";

const dispatch = useDispatch();

const [cardFilter, setCardFilter] = useState({
    sam: true,
    erin: true,
    jeffrey: true,
});

const handleViewChange = (event) => {
    setCardFilter({
        ...cardFilter,
        [event.target.name]: event.target.checked,
    });
    dispatch({ type: 'SET_CLIPS_FILTER', payload: cardFilter });
};

export default function ClipsFilter() {

return (
  <>
    <Typography align="center" variant="h6" sx={{ p: 2 }}>
      Creator Filter
    </Typography>
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={cardFilter.sam}
            onChange={handleViewChange}
            name="Sam"
          />
        }
        label={<Typography variant="body2">Requests</Typography>}
      />
      <FormControlLabel
        control={
          <Switch
            checked={cardFilter.erin}
            onChange={handleViewChange}
            name="Erin"
          />
        }
        label={<Typography variant="body2">Shares</Typography>}
      />
      <FormControlLabel
        control={
          <Switch
            checked={cardFilter.jeffrey}
            onChange={handleViewChange}
            name="Jeffrey"
          />
        }
        label={<Typography variant="body2">Offers</Typography>}
      />
    </FormGroup>
  </>
);
}