import React from "react";

import { useHistory } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Button, Typography, Box, Slide } from "@mui/material";
import PhraseHalf from "../../images/PMPhrase.png";
import MakerHalf from "../../images/PMMaker.png";

function RegisterPage() {
  const history = useHistory();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      height="100vh"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "secondary.main",
          paddingTop: 5,
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
        <RegisterForm />
        <Typography variant="subtitle1" sx={{ m: 2 }}>
          Already a member?
        </Typography>
        <Button
          variant="text"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterPage;
