import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// material imports
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TheatersIcon from "@mui/icons-material/Theaters";

export default function BottomNavigationBar() {
  const [value, setValue] = useState(0);
  const history = useHistory();

  // navigate for the clips and phrases buttons
  const navigate = (link) => {
    history.push(link);
  };

  return (
    <Paper elevation={3} square>
        <BottomNavigation
          showLabels={true}
          sx={{
            height: 100,
            position: "fixed",
            bottom: 0,
            zIndex: 2,
            backgroundColor: "pink.light",
            width: "100%",
          }}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="clips"
            value={value}
            onClick={() => navigate("/home")}
            icon={<MovieCreationIcon color="info" />}
          />
          <BottomNavigationAction
            label="Add/Create"
            value={value}
            onClick={() => navigate("/addclipphrase")}
            icon={<AddCircleOutlineIcon color="info" />}
          />
          <BottomNavigationAction
            label="Phrases"
            value={value}
            onClick={() => navigate("/phrases")}
            icon={<TheatersIcon color="info" />}
          />
        </BottomNavigation>
        </Paper>
  );
}
