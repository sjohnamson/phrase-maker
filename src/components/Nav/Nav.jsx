import React from "react";
import PhraseLogo from "../../images/PMLogo1.png";
import ProjectDropdown from "../ProjectDropdown/ProjectDropdown";
import { Box, Link, AppBar, Toolbar } from "@mui/material";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "pink.light",  }}>
      <Toolbar sx={{  
        display: "flex",
          direction: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
          <Link to="/home">
            <img
              src={PhraseLogo}
              alt="Phrase Maker"
              style={{ width: '60%', marginTop: 5, marginLeft: 10 }}
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
     
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
