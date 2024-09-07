import React from "react";
import { useSelector } from "react-redux";
import MainPageCardActions from "./MainPageCardActions/MainPageCardAction";
import MainPageCardContent from "./MainPageCardContent/MainPageCardContent";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

// Material UI imports
import { CardActionArea, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function ClipCards({ xs, sm, md }) {
  const clips = useSelector((store) => store.clips);
  const clipsFilter = useSelector((store) => store.ClipsFilter);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dkabdionr",
    },
  });

  return (
    <Grid container spacing={2}>
      {clips.map((clip, index) => {
        const video = cld
          .video(clip.public_id)
          .resize(fill().width(400).height(250));
        return (
          // checks to see if activity should be displayed based on toggle switches
          ((clip.creator === "Sam" && clipsFilter.sam) ||
            (clip.creator === "Erin" && clipsFilter.erin) ||
            (clip.creator === "Jeffrey" && clipsFilter.jeffrey)) && (
            <Grid item key={clip.id} xs={xs} sm={sm} md={md}>
              <Card sx={{ width: "100%" }}>
                <CardActionArea onClick={() => {}} sx={{}}>
                  <AdvancedVideo cldVid={video} controls />
                  <MainPageCardContent clip={clip} />
                </CardActionArea>
                <MainPageCardActions clip={clip} />
              </Card>
            </Grid>
          )
        );
      })}
    </Grid>
  );
}
