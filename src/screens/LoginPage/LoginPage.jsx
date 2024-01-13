import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import { Button, Typography, Box, Slide } from "@mui/material";
import PhraseHalf from "../../images/PMPhrase.png";
import MakerHalf from "../../images/PMMaker.png";

function LoginPage() {
  const history = useHistory();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
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
      <Box display="flex" flexDirection="column" alignItems="center">
        <LoginForm />
        <Typography variant="subtitle1" sx={{ m: 2 }}>
          Haven't created an account yet?
        </Typography>
        <Button
          variant="text"
          color="success"
          onClick={() => {
            history.push("/registration");
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;
