import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// styling imports
import "./LandingPage.css";
import { Box, Typography, Button, Fade, Slide, Stack } from "@mui/material";
import FlareIcon from "@mui/icons-material/Flare";

// CUSTOM COMPONENTS
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import PhraseHalf from "../../images/PMPhrase.png";
import MakerHalf from "../../images/PMMaker.png";

function LandingPage() {
  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  // sets triggers for each of the items that will transition in on load
  const [showMaker, setShowMaker] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showSequence, setShowSequence] = useState(false);
  const [showRepeat, setShowRepeat] = useState(false);

  useEffect(() => {
    // sets the delay for the items that transition in on load
    const delayMaker = setTimeout(() => {
      setShowMaker(true);
    }, 1000);

    const delayWelcome = setTimeout(() => {
      setShowWelcome(true);
    }, 1250);

    const delayRegister = setTimeout(() => {
      setShowRegister(true);
    }, 1750);

    const delayJoin = setTimeout(() => {
      setShowJoin(true);
    }, 2250);

    const delayShare = setTimeout(() => {
      setShowShare(true);
    }, 2750);

    const delaySequence = setTimeout(() => {
      setShowSequence(true);
    }, 3250);

    const delayRepeat = setTimeout(() => {
      setShowRepeat(true);
    }, 3750);

    // return () => clearTimeout(delayMaker);
  }, []);

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="container">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "secondary.main",
          paddingTop: 3,
          paddingBottom: 3,
          marginTop: 1,
          marginBottom: 4,
          borderWidth: 1,
          borderColor: "info",
          borderStyle: "solid",
        }}
      >
        {/* slide sets the phrase and maker images to slide in on load */}
        <Slide direction="right" in={true} timeout={{ enter: 1250 }}>
          <img
            src={PhraseHalf}
            alt="Sliding PHRASE/"
            style={{ width: "40%", paddingLeft: 13 }}
          />
        </Slide>
        <Slide direction="left" in={true} timeout={{ enter: 1250 }}>
          <img
            src={MakerHalf}
            alt="Sliding /MAKER"
            style={{ width: "40%", paddingLeft: 75 }}
          />
        </Slide>
      </Box>
      {/* fade sets the app directions to fade in one at a time on load */}
      <Stack display="flex" justifyContent="center" alignItems="center">
        <Fade in={showWelcome} timeout={{ enter: 2500 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "info.main" }}>
            Welcome to Phrase Maker!
          </Typography>
        </Fade>
        <Fade in={showRegister} timeout={{ enter: 2500 }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <FlareIcon sx={{ p: 1, color: "pink.main" }} />
            <Typography variant="subtitle1" sx={{ color: "info.main" }}>
              Register
            </Typography>
          </Box>
        </Fade>
        <Fade in={showJoin} timeout={{ enter: 2500 }}>
        <Box display="flex" justifyContent="center" alignItems="center">
        <FlareIcon sx={{ p: 1, color: "pink.main" }} />
          <Typography
            variant="subtitle1"
            sx={{ color: "info.main" }}
          >
            Join a project or create a new project.
          </Typography>
          </Box>
        </Fade>
        <Fade in={showShare} timeout={{ enter: 2500 }}>
        <Box display="flex" justifyContent="center" alignItems="center">
        <FlareIcon sx={{ p: 1, color: "pink.main" }} />
          <Typography
            variant="subtitle1"
            sx={{ color: "info.main" }}
          >
            Share your video clips
          </Typography>
          </Box>
        </Fade>
        <Fade in={showSequence} timeout={{ enter: 2500 }}>
        <Box display="flex" justifyContent="center" alignItems="center">
        <FlareIcon sx={{ p: 1, color: "pink.main" }} />
          <Typography
            variant="subtitle1"
            sx={{ color: "info.main" }}
          >
            Sequence clips into phrases.
          </Typography>
          </Box>
        </Fade>
        <Fade in={showRepeat} timeout={{ enter: 2500 }}>
        <Box display="flex" justifyContent="center" alignItems="center">
        <FlareIcon sx={{ p: 1, color: "pink.main" }} />
          <Typography
            variant="subtitle1"
            sx={{ color: "info.main" }}
          >
            Repeat and enjoy!
          </Typography>
          </Box>
        </Fade>
      </Stack>
      <RegisterForm />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography sx={{ m: 2, color: "info.main" }}>
          Already a Member?
        </Typography>
        <Button
          variant="contained"
          onClick={onLogin}
          sx={{ ml: 2, color: "secondary.light" }}
        >
          Login
        </Button>
      </Box>
    </div>
  );
}

export default LandingPage;
