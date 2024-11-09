import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// component imports
import ClipCards from "../../components/ClipCard/MainPageClipCard";
// material imports
import {
  Box,
  Typography,
  Divider,
  Pagination,
  CircularProgress,
} from "@mui/material";
import ClipsFilter from "../../components/ClipsFilter/ClipsFilter";

export default function Homepage() {
  const dispatch = useDispatch();
  const clips = useSelector((store) => store.clips.clips);
  const totalPages = useSelector((store) => store.clips.totalPages);
  const user = useSelector((store) => store.user);
  const limit = 20;
  const hasClips = clips ? clips.length > 0 : false;

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({ type: "GET_CLIPS", payload: { page, limit }});
    dispatch({
      type: "SET_CLIPS_FILTER",
      payload: { sam: true, erin: true, jeffrey: true },
    });
  }, [user.current_project, page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  console.log("clips in homepage:", clips);

  return (
    <Box sx={{ width: "95%", margin: "auto" }}>
      {hasClips ? (
        <Box className="clips" sx={{ width: "100%", marginTop: 3 }}>
          <ClipsFilter />
          <ClipCards xs={6} sm={4} md={2} />
        </Box>
      ) : (
        <Box sx={{ bgcolor: "pink.main", mt: 10, m: 5, p: 5 }}>
          <Typography variant="h6" sx={{ color: "info.main" }}>
            No clips in your project library.
            <Divider sx={{ m: 1 }} />
            Click Add/Create below to add a clip.
          </Typography>
        </Box>
      )}

      {hasClips && (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3, marginBottom: 7}}>
          <Pagination
            count={totalPages} 
            page={page}
            onChange={handlePageChange}
            color="primary"
            siblingCount={1}
            boundaryCount={1}
          />
        </Box>
      )}
    </Box>
  );
}
