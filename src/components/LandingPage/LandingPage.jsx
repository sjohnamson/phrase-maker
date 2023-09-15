import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// styling imports
import './LandingPage.css';
import { Box, Typography, Button, Fade, Slide } from '@mui/material';


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
      {/* slide sets the phrase and maker images to slide in on load */}
      <Slide direction="right" in={true} timeout={{enter: 1250}} >
        <img src={PhraseHalf} alt="Sliding PHRASE/" style={{ height: 60 }} />
      </Slide >
      <Slide direction="left" in={true} timeout={{enter: 1250}} >
        <img src={MakerHalf} alt="Sliding /MAKER" style={{ height: 60 }} />
      </Slide>
      {/* fade sets the app directions to fade in one at a time on load */}
     <Box>
      <Fade in={showWelcome} timeout={{enter: 2500}}><Typography>Welcome to Phrase Maker! </Typography></Fade>
      <Fade in={showRegister} timeout={{enter: 2500}}><Typography>Register </Typography></Fade>
      <Fade in={showJoin} timeout={{enter: 2500}}><Typography>Join a project or create a new project. </Typography></Fade>
      <Fade in={showShare} timeout={{enter: 2500}}><Typography>Share your video clips </Typography></Fade>
      <Fade in={showSequence} timeout={{enter: 2500}}><Typography>Sequence clips into phrases.</Typography></Fade>
      <Fade in={showRepeat} timeout={{enter: 2500}}><Typography>Repeat and enjoy!</Typography></Fade>
      </Box> 
          <RegisterForm />

            <h4>Already a Member?</h4>
            <Button  variant="contained" onClick={onLogin}>
              Login
            </Button>
    </div>
  );
}

export default LandingPage;
