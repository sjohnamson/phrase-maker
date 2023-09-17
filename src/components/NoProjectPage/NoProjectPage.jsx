import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import PhraseLogo from '../../images/PMLogoNoSq.png'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TheatersIcon from '@mui/icons-material/Theaters';


export default function NoProjectPage() {
    return (
        <Box sx={{mt: 3, p: 5}}>
            <Stack spacing={2}>
        <Typography variant='h5' sx={{m: 'auto', bgcolor: 'info.main', color: 'secondary.light', p: 1}}>Looks like you're just joining Phrase Maker. Welcome!
        </Typography>
        <Typography sx={{bgcolor: 'primary.main', color: 'info.main', p: 1}}>
            To get started click on the <Diversity3Icon fontSize='medium' /> in the upper right corner and JOIN an existing project or CREATE a new project.
        </Typography>
        <Typography sx={{bgcolor: 'pink.main', color: 'info.main', p: 1}}>
            Once you are a part of a project you will see all of that project's video clips here.
            </Typography>
            <Typography sx={{bgcolor: 'secondary.main', color: 'info.main', p: 1}}>
            To ADD new clips or to string existing clips together into a new PHRASE click on the <AddCircleOutlineIcon /> button below.
            </Typography>
            <Typography sx={{bgcolor: 'success.main', color: 'secondary.light', p: 1}}>
            To switch between viewing your project's clips and phrases click on the  <MovieCreationIcon /> and <TheatersIcon /> buttons.
            </Typography>
            </Stack>
    </Box>
    )
}