import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// component imports
import ClipCards from "../../components/ClipCard/MainPageClipCard";
// material imports
import { Box, Typography, Divider } from "@mui/material";
import ClipsFilter from "../../components/ClipsFilter/ClipsFilter";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Homepage() {
  const dispatch = useDispatch();
  const clips = useSelector((store) => store.clips);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "GET_CLIPS" });
    dispatch({
      type: "SET_CLIPS_FILTER",
      payload: { sam: true, erin: true, jeffrey: true },
    });
  }, [user.current_project]);

  const fetchClips = () => {
    // Dispatch action to fetch the next batch of clips
    dispatch({ type: "GET_MORE_CLIPS" });
  };

  return (
    <InfiniteScroll
      dataLength={clips.length} 
      next={fetchClips}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {clips.length > 0 ? (
        // returns clipcards with clips from project library.
        <Box className="clips" sx={{ width: "95%", margin: "auto" }}>
          <ClipsFilter />
          <ClipCards xs={6} sm={4} md={2} />
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
      )}
    </InfiniteScroll>
  );
}
