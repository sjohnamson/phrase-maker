import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// component imports
import ClipCard from "../../components/ClipCard/MainPageClipCard";
// material imports
import { Box, Typography, Divider } from "@mui/material";
import { Cloudinary } from "@cloudinary/url-gen";

export default function Homepage() {
  const dispatch = useDispatch();
  const clips = useSelector(store => store.clips)
  const user = useSelector(store => store.user)

  useEffect(() => {
    dispatch({ type: 'GET_CLIPS' })
    
}, [user.current_project]);

  return (
    // if there are clips
    clips[0] ? (
      // returns clipcards with clips from project library.
      <Box className="clips" sx={{ width: "95%", margin: "auto" }}>
        <ClipCard xs={12} sm={6} md={4} />
      </Box>
    ) : (
      // otherwise returns a message that there are no clips
      <Box sx={{ bgcolor: "pink.main", mt: 10, m: 5, p: 5 }}>
        <Typography variant="h6" sx={{ color: "info.main" }}>
          No clips in your project library.
          <Divider sx={{ m: 1 }} />
          Click Add/Create below to add a clip.
        </Typography>
      </Box>
    )
  );
}
