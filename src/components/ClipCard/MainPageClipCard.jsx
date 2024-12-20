import React from "react";
import { useSelector } from "react-redux";
import MainPageCardActions from "./MainPageCardActions/MainPageCardAction";
import MainPageCardContent from "./MainPageCardContent/MainPageCardContent";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

// Material UI imports
import { Box, CardActionArea, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function ClipCards({ xs, sm, md }) {
  const clips = useSelector((store) => store.clips.clips);
  const clipsFilter = useSelector((store) => store.clipsFilter);
  console.log("ClipCards received clips:", clips);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dkabdionr",
    },
  });

  if (!clips || clips.length === 0) {
    return <div>Loading clips...</div>;
  }

  return (
    <Grid container spacing={2}>
      {clips.map((clip, index) => {
        const video = cld
          .video(clip.public_id)
          .resize(fill().width(80).height(120))
          .quality('auto:low')
          .format('auto')
          ;
        return (
          // checks to see if activity should be displayed based on toggle switches
          ((clip.creator === "Sam" && clipsFilter.sam) ||
            (clip.creator === "Erin" && clipsFilter.erin) ||
            (clip.creator === "Jeffrey" && clipsFilter.jeffrey)) && (
            <Grid item key={clip.id} xs={xs} sm={sm} md={md} >
              <Card
                sx={{ width: "100%", display: "flex", flexDirection: "column", padding: "5px" }}
              >
                <CardContent
                  sx={{ display: "flex", flexDirection: "row", padding: "0px" }}
                >
                  <CardActionArea onClick={() => {}}>
                    <AdvancedVideo cldVid={video} controls />
                  </CardActionArea>
                  <MainPageCardActions clip={clip} number={index}/>
                </CardContent>
                <MainPageCardContent clip={clip} />
              </Card>
            </Grid>
          )
        );
      })}
    </Grid>
  );
}
