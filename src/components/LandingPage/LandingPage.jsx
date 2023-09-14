import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// styling imports
import './LandingPage.css';
import { Typography, Button, Fade, Slide } from '@mui/material';


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
    const delayMaker = setTimeout(() => {
      setShowMaker(true);
    }, 1000);
 

    const delayWelcome = setTimeout(() => {
      setShowWelcome(true);
    }, 2000);

    const delayRegister = setTimeout(() => {
      setShowRegister(true);
    }, 3000);

    const delayJoin = setTimeout(() => {
      setShowJoin(true);
    }, 4000);

    const delayShare = setTimeout(() => {
      setShowShare(true);
    }, 5000);
    
    const delaySequence = setTimeout(() => {
      setShowSequence(true);
    }, 6000);

    const delayRepeat = setTimeout(() => {
      setShowRepeat(true);
    }, 7000);

    return () => clearTimeout(delayMaker);

  }, []);

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      {/* slide sets the phrase and maker images to slide in on load */}
      <Slide direction="right" in={true} timeout={1500} >
        <img src={PhraseHalf} alt="Sliding PHRASE/" style={{ height: 60 }} />
      </Slide>
      <Slide direction="left" in={showMaker} timeout={{enter: 1500}} >
        <img src={MakerHalf} alt="Sliding /MAKER" style={{ height: 60 }} />
      </Slide>
      {/* fade sets the app directions to fade in one at a time on load */}
      <Fade in={showWelcome} timeout={{enter: 1500}}><Typography>Welcome to Phrase Maker! </Typography></Fade>
      <Fade in={showRegister} timeout={{enter: 1500}}><Typography>Register </Typography></Fade>
      <Fade in={showJoin} timeout={{enter: 1500}}><Typography>Join a project or create a new project. </Typography></Fade>
      <Fade in={showShare} timeout={{enter: 1500}}><Typography>Share your video clips </Typography></Fade>
      <Fade in={showSequence} timeout={{enter: 1500}}><Typography>Sequence clips into phrases.</Typography></Fade>
      <Fade in={showRepeat} timeout={{enter: 1500}}><Typography>Repeat and enjoy!</Typography></Fade>

          <RegisterForm />

            <h4>Already a Member?</h4>
            <Button  onClick={onLogin}>
              Login
            </Button>
    </div>
  );
}

export default LandingPage;
