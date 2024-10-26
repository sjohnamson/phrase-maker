// Material UI imports
import { CardContent, Typography, Stack } from "@mui/material";

export default function MainPageCardContent({ clip }) {
  return (
    <>
      <CardContent sx={{}}>
        <Typography gutterBottom variant="body-sm" component="div">
          {clip.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {clip.description}
        </Typography>
        <Stack direction="row" spacing={.5}>
          <Typography variant="subtitle2" color="text.secondary">
            {clip.creator}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {clip.abstractconcreteobject}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {clip.upperlowerboth}
          </Typography>
          </Stack>
          <Stack direction="row" spacing={.5}>
          <Typography variant="subtitle2" color="text.secondary">
            {clip.beats}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {clip.unison ? "Unison" : "Not Unison"}
          </Typography>
        </Stack>
      </CardContent>
    </>
  );
}
