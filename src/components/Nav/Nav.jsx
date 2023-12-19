import React from "react";
import PhraseLogo from "../../images/PMLogo1.png";
import ProjectDropdown from "../ProjectDropdown/ProjectDropdown";
import { Box, Stack, Link, AppBar, Toolbar } from "@mui/material";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "pink.light", p: 0.5 }}>
        <Toolbar>
        <Stack direction="row" spacing={{ xs: 6, sm: 8, md: 10 }}>
          <Link to="/home">
            <img
              src={PhraseLogo}
              alt="Phrase Maker"
              style={{ height: 60, marginLeft: 11, marginTop: 5 }}
            />
          </Link>

          {/* If no user is logged in, show these links */}
          {!user.id && (
            // If there's no user, show login/registration links
            <Box sx={{ paddingTop: 3 }}>
              {/* <Link color="inherit" to="/login">
              Login / Register
            </Link> */}
              <Link to="/about" underline="none" color="info">
                About
              </Link>
            </Box>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <ProjectDropdown />
            </>
          )}
        </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
