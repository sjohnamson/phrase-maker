import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// styling imports
import './LandingPage.css';
import { Box, Typography, Button, Fade, Slide } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';


// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import PhraseHalf from '../../images/PMPhrase.png';
import MakerHalf from '../../images/PMMaker.png';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
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
    // const delayMaker = setTimeout(() => {
    //   setShowMaker(true);
    // }, 1000);


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
    history.push('/login');
  };

  return (
    <div className="container">
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          paddingTop: 3,
          paddingBottom: 3,
          marginTop: 1,
          marginBottom: 4,
          borderWidth: 1,
          borderColor: 'info',
          borderStyle: 'solid'
        }}
      >
        {/* slide sets the phrase and maker images to slide in on load */}
        <Slide direction="right" in={true} timeout={{ enter: 1250 }} >
          <img src={PhraseHalf} alt="Sliding PHRASE/" style={{ height: 60, paddingLeft: 13 }} />
        </Slide >
        <Slide direction="left" in={true} timeout={{ enter: 1250 }} >
          <img src={MakerHalf} alt="Sliding /MAKER" style={{ height: 60, paddingLeft: 75 }} />
        </Slide>
      </Box>
      {/* fade sets the app directions to fade in one at a time on load */}
      <Box>
        <Fade in={showWelcome} timeout={{ enter: 2500 }}>
          <Typography variant="h5" gutterBottom sx={{color: 'info.main'}}>
            Welcome to Phrase Maker!
          </Typography >
        </Fade>
        <Fade in={showRegister} timeout={{ enter: 2500 }}>
          <Typography variant="subtitle1" gutterBottom sx={{color: 'info.main'}}>
            <FlareIcon />
             Register
          </Typography>
        </Fade>
        <Fade in={showJoin} timeout={{ enter: 2500 }}>
          <Typography variant="subtitle1" gutterBottom sx={{color: 'info.main'}}>
          <FlareIcon />
            Join a project or create a new project.
          </Typography>
        </Fade>
        <Fade in={showShare} timeout={{ enter: 2500 }}>
          <Typography variant="subtitle1" gutterBottom sx={{color: 'info.main'}}>
          <FlareIcon />
            Share your video clips
          </Typography>
        </Fade>
        <Fade in={showSequence} timeout={{ enter: 2500 }}>
          <Typography variant="subtitle1" gutterBottom sx={{color: 'info.main'}}>
          <FlareIcon />
            Sequence clips into phrases.
          </Typography>
        </Fade>
        <Fade in={showRepeat} timeout={{ enter: 2500 }}>
          <Typography variant="subtitle1" gutterBottom sx={{color: 'info.main'}}>
          <FlareIcon />
            Repeat and enjoy!
          </Typography>
        </Fade>
      </Box>
      <RegisterForm />

      <Typography sx={{m: 2, color: 'info.main'}}>Already a Member?</Typography>
      <Button variant="contained" onClick={onLogin} sx={{ml: 2}}>
        Login
      </Button>
    </div>
  );
}

export default LandingPage;
